import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getBlogMetadata } from '../data/blogData';

const Home = () => {
  const [blogPosts, setBlogPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadPosts = async () => {
      try {
        console.log('Home: Starting to load blog posts...');
        const posts = await getBlogMetadata();
        console.log('Home: Received posts:', posts);
        setBlogPosts(posts);
      } catch (error) {
        console.error('Home: Error loading blog posts:', error);
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
            <h1>Data and AI Chronicle</h1>
            <p>Decoding cutting-edge algorithms and methods, this blog unravels the intricate mechanics of artificial intelligence.</p>
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
          <h1>Data and AI Chronicle</h1>
          <p>Decoding cutting-edge algorithms and methods, this blog unravels the intricate mechanics of artificial intelligence.</p>
        </div>
      </section>

      {/* Strategy Cards */}
      <section className="container">
        <div className="card-grid">
          {blogPosts.map((post) => (
            <Link to={`/blog/${post.slug}`} key={post.id} className="card">
              <img 
                src={`/assets/images/${post.image}`} 
                alt={post.title}
                className="card-image"
              />
              <h3 className="card-title">{post.title}</h3>
              <p className="card-excerpt">{post.excerpt}</p>
              {post.tags && post.tags.length > 0 && (
                <div className="card-tags" style={{ marginBottom: '1rem' }}>
                  {post.tags.slice(0, 3).map((tag, index) => (
                    <span key={index} className="tag" style={{
                      display: 'inline-block',
                      padding: '0.25rem 0.5rem',
                      margin: '0.25rem 0.25rem 0.25rem 0',
                      backgroundColor: '#e2e8f0',
                      color: '#2d3748',
                      borderRadius: '4px',
                      fontSize: '0.8rem'
                    }}>
                      {tag}
                    </span>
                  ))}
                </div>
              )}
              <div className="card-meta">
                <span>{post.category}</span>
                <span>{post.date}</span>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home; 