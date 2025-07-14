import React, { useState, useEffect } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { getBlogPost } from '../data/blogData';
import { parseMarkdown } from '../utils/markdownParser';

const BlogPost = () => {
  const { slug } = useParams();
  const [post, setPost] = useState(null);
  const [content, setContent] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadPost = async () => {
      try {
        console.log('Loading post with slug:', slug);
        const postMetadata = await getBlogPost(slug);
        console.log('Post metadata:', postMetadata);
        
        if (!postMetadata) {
          console.log('No post metadata found for slug:', slug);
          setLoading(false);
          return;
        }

        setPost(postMetadata);

        // Load markdown content
        const markdownPath = `/blogs/${slug}.md`;
        console.log('Fetching markdown from:', markdownPath);
        const parsedMarkdown = await parseMarkdown(markdownPath);
        console.log('Parsed markdown:', parsedMarkdown);
        
        if (parsedMarkdown) {
          console.log('Setting content, length:', parsedMarkdown.content.length);
          setContent(parsedMarkdown.content);
        } else {
          console.log('No parsed markdown content');
        }
      } catch (error) {
        console.error('Error loading blog post:', error);
      } finally {
        setLoading(false);
      }
    };

    loadPost();
  }, [slug]);

  if (loading) {
    return (
      <div className="container">
        <div style={{ padding: '2rem', textAlign: 'center' }}>
          <p>Loading post...</p>
        </div>
      </div>
    );
  }

  if (!post) {
    return <Navigate to="/" replace />;
  }

  console.log('Rendering BlogPost with content length:', content.length);

  return (
    <div>
      {/* Minimal Breadcrumb */}
      <nav style={{
        backgroundColor: '#1b1b1b',
        borderBottom: '1px solid #333333',
        padding: '1rem 0'
      }}>
        <div className="container">
          <Link 
            to="/" 
            style={{
              color: '#cccccc',
              textDecoration: 'none',
              fontSize: '0.9rem',
              fontWeight: '400',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              transition: 'opacity 0.2s'
            }}
            onMouseEnter={(e) => e.target.style.opacity = '0.7'}
            onMouseLeave={(e) => e.target.style.opacity = '1'}
          >
            ← Back to Home
          </Link>
        </div>
      </nav>

      {/* Minimal Hero Section */}
      <section style={{
        backgroundColor: '#1b1b1b',
        padding: '3rem 0',
        borderBottom: '1px solid #333333'
      }}>
        <div className="container">
          {/* Category */}
          <div style={{ marginBottom: '1rem' }}>
            <span style={{
              display: 'inline-block',
              padding: '0.25rem 0.75rem',
              backgroundColor: '#333333',
              color: '#cccccc',
              fontSize: '0.8rem',
              fontWeight: '400',
              textTransform: 'uppercase',
              letterSpacing: '1px'
            }}>
              {Array.isArray(post.category) ? post.category[0] : post.category}
            </span>
          </div>
          
          {/* Title */}
          <h1 style={{
            fontSize: 'clamp(2rem, 5vw, 3rem)',
            fontWeight: '400',
            marginBottom: '1rem',
            color: '#ffffff',
            lineHeight: '1.3',
            fontFamily: 'Georgia, serif'
          }}>
            {post.title}
          </h1>
          
          {/* Description */}
          <p style={{
            fontSize: '1.1rem',
            color: '#cccccc',
            marginBottom: '2rem',
            maxWidth: '700px',
            lineHeight: '1.6',
            fontWeight: '300'
          }}>
            {post.description}
          </p>
          
          {/* Meta Information */}
          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            gap: '2rem',
            color: '#aaaaaa',
            fontSize: '0.9rem',
            fontWeight: '300',
            marginBottom: '1.5rem'
          }}>
            <span>{post.author}</span>
            <span>{new Date(post.date).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric'
            })}</span>
            <span>{post.estimatedReadingTime || post['Estimated Reading Time'] || '10 min read'}</span>
          </div>
          
          {/* Tags */}
          {post.tags && post.tags.length > 0 && (
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
              {post.tags.map(tag => (
                <span key={tag} style={{
                  display: 'inline-block',
                  padding: '0.25rem 0.5rem',
                  backgroundColor: '#333333',
                  color: '#cccccc',
                  fontSize: '0.8rem',
                  fontWeight: '300'
                }}>
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Blog Content */}
      <article className="container">
        <div className="blog-content">

          
          {/* Debug info */}
          {content.length === 0 && (
            <div style={{ padding: '1rem', backgroundColor: '#ffebee', borderRadius: '4px', marginBottom: '2rem' }}>
              <p><strong>Debug Info:</strong></p>
              <p>Content length: {content.length}</p>
              <p>Slug: {slug}</p>
              <p>Post loaded: {post ? 'Yes' : 'No'}</p>
            </div>
          )}
          
          {/* Enhanced Markdown Content */}
          <div 
            className="markdown-content"
            dangerouslySetInnerHTML={{ __html: content }}
            style={{
              lineHeight: '1.8',
              fontSize: '1.1rem',
              color: '#2d3748',
              fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
              maxWidth: 'none'
            }}
          />
          
          {/* Minimal CSS for Markdown Content */}
          <style jsx>{`
            .markdown-content h1 {
              font-size: 2rem;
              font-weight: 400;
              color: #222222;
              margin: 3rem 0 1.5rem 0;
              line-height: 1.3;
              font-family: Georgia, serif;
            }
            
            .markdown-content h2 {
              font-size: 1.5rem;
              font-weight: 400;
              color: #333333;
              margin: 2.5rem 0 1rem 0;
              line-height: 1.4;
              font-family: Georgia, serif;
            }
            
            .markdown-content h3 {
              font-size: 1.2rem;
              font-weight: 400;
              color: #444444;
              margin: 2rem 0 0.75rem 0;
              line-height: 1.4;
              font-family: Georgia, serif;
            }
            
            .markdown-content p {
              margin-bottom: 1.5rem;
              line-height: 1.8;
              color: #555555;
              font-weight: 300;
            }
            
            .markdown-content code {
              background-color: #f8f8f8;
              color: #333333;
              padding: 0.2rem 0.4rem;
              font-size: 0.9em;
              font-family: 'SF Mono', 'Monaco', 'Inconsolata', 'Roboto Mono', monospace;
            }
            
            .markdown-content pre {
              background-color: #f8f8f8;
              color: #333333;
              padding: 1.5rem;
              overflow-x: auto;
              margin: 2rem 0;
              border: 1px solid #e8e8e8;
            }
            
            .markdown-content pre code {
              background: none;
              color: inherit;
              padding: 0;
              font-size: 0.9rem;
            }
            
            .markdown-content blockquote {
              border-left: 2px solid #e0e0e0;
              background-color: #fafafa;
              padding: 1.5rem;
              margin: 2rem 0;
              font-style: italic;
              color: #666666;
            }
            
            .markdown-content ul, .markdown-content ol {
              margin: 1.5rem 0;
              padding-left: 2rem;
              color: #555555;
            }
            
            .markdown-content li {
              margin-bottom: 0.5rem;
              line-height: 1.7;
            }
            
            .markdown-content table {
              width: 100%;
              border-collapse: collapse;
              margin: 2rem 0;
              border: 1px solid #e8e8e8;
            }
            
            .markdown-content th,
            .markdown-content td {
              padding: 0.75rem;
              text-align: left;
              border-bottom: 1px solid #e8e8e8;
            }
            
            .markdown-content th {
              background-color: #f8f8f8;
              color: #333333;
              font-weight: 400;
            }
            
            .markdown-content tr:nth-child(even) {
              background-color: #fafafa;
            }
            
            .markdown-content a {
              color: #333333;
              text-decoration: underline;
              transition: opacity 0.2s ease;
            }
            
            .markdown-content a:hover {
              opacity: 0.7;
            }
            
            .markdown-content img {
              max-width: 100%;
              height: auto;
              margin: 2rem 0;
              border: 1px solid #e8e8e8;
            }
          `}</style>

          {/* Minimal Article Footer */}
          <div style={{
            marginTop: '4rem',
            paddingTop: '2rem',
            borderTop: '1px solid #f0f0f0'
          }}>
            {/* Publication Info */}
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              padding: '1rem 0',
              fontSize: '0.85rem',
              color: '#888888',
              fontWeight: '300'
            }}>
              <span>
                {post.estimatedReadingTime || post['Estimated Reading Time'] || '10 min read'}
              </span>
              <span>
                Published {new Date(post.date).toLocaleDateString('en-US', { 
                  year: 'numeric', 
                  month: 'long', 
                  day: 'numeric' 
                })}
              </span>
            </div>
          </div>

          {/* Minimal Back Link */}
          <div style={{ marginTop: '3rem', textAlign: 'center' }}>
            <Link 
              to="/" 
              style={{
                display: 'inline-block',
                padding: '0.75rem 0',
                color: '#333333',
                textDecoration: 'none',
                fontSize: '0.9rem',
                fontWeight: '300',
                borderTop: '1px solid #f0f0f0',
                paddingTop: '1rem',
                transition: 'opacity 0.2s'
              }}
              onMouseEnter={(e) => e.target.style.opacity = '0.7'}
              onMouseLeave={(e) => e.target.style.opacity = '1'}
            >
              ← Back to all articles
            </Link>
          </div>
        </div>
      </article>
    </div>
  );
};

export default BlogPost; 