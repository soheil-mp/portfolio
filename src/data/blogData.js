import { getAllBlogFiles } from '../utils/markdownParser';

// Get all blog metadata
export const getBlogMetadata = async () => {
  try {
    return await getAllBlogFiles();
  } catch (error) {
    console.error('Error loading blog metadata:', error);
    return [];
  }
};

// Get metadata for a specific blog post
export const getBlogPost = async (slug) => {
  try {
    const allBlogs = await getAllBlogFiles();
    return allBlogs.find(blog => blog.filename === slug) || null;
  } catch (error) {
    console.error('Error loading blog post:', error);
    return null;
  }
}; 