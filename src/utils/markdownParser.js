import { marked } from 'marked';

// Configure marked options
marked.setOptions({
  breaks: true,
  gfm: true
});

// Parse frontmatter from markdown content
const parseFrontmatter = (text) => {
  const lines = text.split('\n');
  
  if (lines[0].trim() !== '---') {
    return { data: {}, content: text };
  }
  
  let frontmatterEnd = -1;
  for (let i = 1; i < lines.length; i++) {
    if (lines[i].trim() === '---') {
      frontmatterEnd = i;
      break;
    }
  }
  
  if (frontmatterEnd === -1) {
    return { data: {}, content: text };
  }
  
  const frontmatterLines = lines.slice(1, frontmatterEnd);
  const content = lines.slice(frontmatterEnd + 1).join('\n');
  
  const frontmatter = {};
  let currentKey = null;
  
  frontmatterLines.forEach((line) => {
    const trimmedLine = line.trim();
    
    if (trimmedLine.startsWith('-') && currentKey) {
      // YAML array item
      const value = trimmedLine.substring(1).trim();
      if (!Array.isArray(frontmatter[currentKey])) {
        frontmatter[currentKey] = [];
      }
      frontmatter[currentKey].push(value);
    } else if (trimmedLine.includes(':')) {
      // Key-value pair
      const [key, ...valueParts] = line.split(':');
      const value = valueParts.join(':').trim();
      currentKey = key.trim();
      
      if (value) {
        // Handle JSON-style arrays [item1, item2]
        if (value.startsWith('[') && value.endsWith(']')) {
          try {
            frontmatter[currentKey] = JSON.parse(value);
          } catch {
            frontmatter[currentKey] = value.slice(1, -1).split(',').map(item => item.trim());
          }
        } 
        // Handle quoted strings
        else if ((value.startsWith('"') && value.endsWith('"')) || (value.startsWith("'") && value.endsWith("'"))) {
          frontmatter[currentKey] = value.slice(1, -1);
        }
        // Handle booleans
        else if (value === 'true' || value === 'false') {
          frontmatter[currentKey] = value === 'true';
        }
        // Handle regular strings
        else {
          frontmatter[currentKey] = value;
        }
      } else {
        // Key without value - prepare for YAML array
        frontmatter[currentKey] = [];
      }
    }
  });
  
  console.log('Parsed frontmatter for file:', frontmatter);
  
  return { data: frontmatter, content };
};

export const parseMarkdown = async (markdownPath) => {
  try {
    const response = await fetch(markdownPath);
    if (!response.ok) {
      throw new Error(`Failed to fetch ${markdownPath}: ${response.status}`);
    }
    const markdownText = await response.text();
    
    // Parse frontmatter and content (content should already be stripped of frontmatter)
    const { data: frontmatter, content } = parseFrontmatter(markdownText);
    
    console.log('parseMarkdown - Raw content length:', content.length);
    console.log('parseMarkdown - Content preview:', content.substring(0, 200));
    
    // Convert markdown to HTML
    const htmlContent = marked(content);
    
    return {
      frontmatter,
      content: htmlContent,
      rawContent: content
    };
  } catch (error) {
    console.error('Error parsing markdown:', error);
    return null;
  }
};

// Get all blog files from the /blogs directory
export const getAllBlogFiles = async () => {
  try {
    console.log('Starting blog discovery...');
    
    // First, try to get directory listing
    let blogFiles = [];
    
    try {
      const response = await fetch('/blogs');
      if (response.ok) {
        const html = await response.text();
        console.log('Directory listing HTML length:', html.length);
        
        // Extract .md file names from directory listing HTML
        const parser = new DOMParser();
        const doc = parser.parseFromString(html, 'text/html');
        
        // Try multiple selectors to find .md files
        let links = doc.querySelectorAll('a[href$=".md"]');
        if (links.length === 0) {
          // Fallback: look for any links containing .md
          links = doc.querySelectorAll('a[href*=".md"]');
        }
        if (links.length === 0) {
          // Another fallback: look in the HTML text for .md files
          const mdMatches = html.match(/[\w-]+\.md/g);
          if (mdMatches) {
            console.log('Found .md files via regex:', mdMatches);
            for (const filename of mdMatches) {
              await loadBlogFile(filename, blogFiles);
            }
          }
        } else {
          console.log('Found .md links via querySelector:', links.length);
          for (const link of links) {
            const filename = link.getAttribute('href');
            if (filename && filename.endsWith('.md')) {
              await loadBlogFile(filename, blogFiles);
            }
          }
        }
      }
    } catch (error) {
      console.warn('Directory listing failed, trying fallback method:', error);
    }
    
    // Fallback: if no files found via directory listing, try known files
    if (blogFiles.length === 0) {
      console.log('No files found via directory listing, trying known files...');
      const knownFiles = [
        'momentum-trading-strategies.md',
        'portfolio-theory-optimization.md',
        'breakout-trading-systems.md',
        'rainbow-algorithm-analysis.md'
      ];
      
      for (const filename of knownFiles) {
        await loadBlogFile(filename, blogFiles);
      }
    }
    
    console.log('Total blog files processed:', blogFiles.length);
    
    // Sort by date (newest first)
    const sortedFiles = blogFiles.sort((a, b) => new Date(b.date) - new Date(a.date));
    console.log('Sorted blog files:', sortedFiles);
    
    return sortedFiles;
    
  } catch (error) {
    console.error('Error getting blog files:', error);
    return [];
  }
};

// Helper function to load a single blog file
const loadBlogFile = async (filename, blogFiles) => {
  try {
    console.log('Processing file:', filename);
    
    const fileResponse = await fetch(`/blogs/${filename}`);
    if (fileResponse.ok) {
      const content = await fileResponse.text();
      console.log(`Loaded content for ${filename}, length:`, content.length);
      
      const { data: frontmatter } = parseFrontmatter(content);
      console.log(`Frontmatter for ${filename}:`, frontmatter);
      
      const blogPost = {
        id: blogFiles.length + 1, // Add ID for Home component
        filename: filename.replace('.md', ''),
        slug: filename.replace('.md', ''),
        title: frontmatter.Title || filename.replace('.md', '').replace(/-/g, ' '),
        description: frontmatter.Description || '',
        author: frontmatter.Author || 'Unknown',
        category: Array.isArray(frontmatter.Category) ? frontmatter.Category[0] : frontmatter.Category || 'General',
        tags: frontmatter.Tags || [],
        image: frontmatter.Image || 'portfolio_theory.gif',
        excerpt: frontmatter.Excerpt || frontmatter.Description || '',
        featured: frontmatter.Featured === 'true' || frontmatter.Featured === true,
        status: frontmatter.Status || 'published',
        estimatedReadingTime: frontmatter['Estimated Reading Time'] || '10 min',
        // Ensure we have a date for sorting
        date: frontmatter.date || frontmatter.Created || new Date().toISOString().split('T')[0]
      };
      
      console.log(`Created blog post object for ${filename}:`, blogPost);
      blogFiles.push(blogPost);
    } else {
      console.warn(`Could not fetch ${filename}, status:`, fileResponse.status);
    }
  } catch (error) {
    console.warn(`Could not load blog file ${filename}:`, error);
  }
}; 