import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getBlogPosts, getFeaturedPosts } from '../data/blogData';

const BlogList = () => {
  const [featuredPosts, setFeaturedPosts] = useState([]);
  const [allPosts, setAllPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadPosts = async () => {
      try {
        const [featured, all] = await Promise.all([
          getFeaturedPosts(),
          getBlogPosts()
        ]);
        setFeaturedPosts(featured);
        setAllPosts(all);
      } catch (error) {
        console.error('Error loading blog posts:', error);
      } finally {
        setLoading(false);
      }
    };

    loadPosts();
  }, []);

  if (loading) {
    return (
      <div>
        <section className="hero">
          <div className="container">
            <h1>Blog</h1>
            <p>Insights, strategies, and analysis for the modern quantitative investor</p>
          </div>
        </section>
        <div className="container">
          <p>Loading posts...</p>
        </div>
      </div>
    );
  }

  return (
    <div>
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <h1>Blog</h1>
          <p>Insights, strategies, and analysis for the modern quantitative investor</p>
        </div>
      </section>

      <div className="container">
        {/* Featured Posts */}
        {featuredPosts.length > 0 && (
          <section style={{ marginBottom: '4rem' }}>
            <h2 style={{ marginBottom: '2rem', fontSize: '1.875rem' }}>Featured Posts</h2>
            <div className="card-grid">
              {featuredPosts.map((post) => (
                <Link to={`/blog/${post.slug}`} key={post.id} className="card">
                  <img 
                    src={`/assets/images/${post.image}`} 
                    alt={post.title}
                    className="card-image"
                  />
                  <h3 className="card-title">{post.title}</h3>
                  <p className="card-excerpt">{post.excerpt}</p>
                  <div className="tags">
                    {post.tags && post.tags.slice(0, 3).map(tag => (
                      <span key={tag} className="tag">{tag}</span>
                    ))}
                  </div>
                  <div className="card-meta">
                    <span>{post.category}</span>
                    <span>{post.date}</span>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}

        {/* All Posts */}
        <section>
          <h2 style={{ marginBottom: '2rem', fontSize: '1.875rem' }}>All Posts</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            {allPosts.map((post) => (
              <Link 
                to={`/blog/${post.slug}`} 
                key={post.id} 
                className="card"
                style={{ 
                  display: 'flex', 
                  flexDirection: 'row',
                  alignItems: 'center',
                  gap: '2rem',
                  padding: '2rem'
                }}
              >
                <img 
                  src={`/assets/images/${post.image}`} 
                  alt={post.title}
                  style={{
                    width: '200px',
                    height: '120px',
                    objectFit: 'cover',
                    borderRadius: '8px',
                    flexShrink: 0
                  }}
                />
                <div style={{ flex: 1 }}>
                  <div className="tags" style={{ marginBottom: '0.5rem' }}>
                    <span className="tag">{post.category}</span>
                  </div>
                  <h3 className="card-title" style={{ marginBottom: '0.5rem' }}>{post.title}</h3>
                  <p className="card-excerpt" style={{ marginBottom: '1rem' }}>{post.excerpt}</p>
                  <div className="card-meta">
                    <span>{post.date} • By {post.author}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default BlogList; 