import React from 'react';
import Hero from '../components/Hero';

/**
 * Home Page Component
 * Landing page featuring the hero section with introduction and main call-to-actions
 */
const HomePage = () => {
  return (
    <div className="page page--home">
      <Hero />
      
      {/* Additional home content can be added here */}
      <section 
        className="home-highlights"
        style={{
          padding: 'var(--space-4xl) 0',
          background: 'var(--bg-secondary)'
        }}
      >
        <div className="container">
          <div 
            className="highlights-grid"
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: 'var(--space-xl)',
              maxWidth: '1000px',
              margin: '0 auto'
            }}
          >
            {/* Quick Stats */}
            <div 
              className="highlight-card"
              style={{
                background: 'white',
                padding: 'var(--space-xl)',
                borderRadius: 'var(--radius-xl)',
                boxShadow: 'var(--shadow-md)',
                border: '1px solid var(--neutral-200)',
                textAlign: 'center',
                transition: 'all var(--transition-normal)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-4px)';
                e.currentTarget.style.boxShadow = 'var(--shadow-xl)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'var(--shadow-md)';
              }}
            >
              <i 
                className="fas fa-code"
                style={{
                  fontSize: '2.5rem',
                  color: 'var(--primary-blue)',
                  marginBottom: 'var(--space-md)'
                }}
              ></i>
              <h3 
                style={{
                  fontSize: '1.5rem',
                  fontWeight: '600',
                  color: 'var(--text-primary)',
                  marginBottom: 'var(--space-sm)'
                }}
              >
                15+ Projects
              </h3>
              <p 
                style={{
                  color: 'var(--text-secondary)',
                  fontSize: '1rem',
                  lineHeight: '1.6'
                }}
              >
                Diverse AI/ML projects spanning 5 domains—from autonomous systems to generative AI
              </p>
            </div>

            <div 
              className="highlight-card"
              style={{
                background: 'white',
                padding: 'var(--space-xl)',
                borderRadius: 'var(--radius-xl)',
                boxShadow: 'var(--shadow-md)',
                border: '1px solid var(--neutral-200)',
                textAlign: 'center',
                transition: 'all var(--transition-normal)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-4px)';
                e.currentTarget.style.boxShadow = 'var(--shadow-xl)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'var(--shadow-md)';
              }}
            >
              <i 
                className="fas fa-graduation-cap"
                style={{
                  fontSize: '2.5rem',
                  color: 'var(--accent-emerald)',
                  marginBottom: 'var(--space-md)'
                }}
              ></i>
              <h3 
                style={{
                  fontSize: '1.5rem',
                  fontWeight: '600',
                  color: 'var(--text-primary)',
                  marginBottom: 'var(--space-sm)'
                }}
              >
                500+ Students
              </h3>
              <p 
                style={{
                  color: 'var(--text-secondary)',
                  fontSize: '1rem',
                  lineHeight: '1.6'
                }}
              >
                Mentored and guided students through complex AI/ML concepts and real-world applications
              </p>
            </div>

            <div 
              className="highlight-card"
              style={{
                background: 'white',
                padding: 'var(--space-xl)',
                borderRadius: 'var(--radius-xl)',
                boxShadow: 'var(--shadow-md)',
                border: '1px solid var(--neutral-200)',
                textAlign: 'center',
                transition: 'all var(--transition-normal)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-4px)';
                e.currentTarget.style.boxShadow = 'var(--shadow-xl)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'var(--shadow-md)';
              }}
            >
              <i 
                className="fas fa-globe"
                style={{
                  fontSize: '2.5rem',
                  color: 'var(--accent-amber)',
                  marginBottom: 'var(--space-md)'
                }}
              ></i>
              <h3 
                style={{
                  fontSize: '1.5rem',
                  fontWeight: '600',
                  color: 'var(--text-primary)',
                  marginBottom: 'var(--space-sm)'
                }}
              >
                3 Countries
              </h3>
              <p 
                style={{
                  color: 'var(--text-secondary)',
                  fontSize: '1rem',
                  lineHeight: '1.6'
                }}
              >
                International experience working with diverse teams across Armenia, US, and Netherlands
              </p>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        @media (max-width: 768px) {
          .highlights-grid {
            grid-template-columns: 1fr !important;
            gap: var(--space-lg) !important;
          }
          
          .highlight-card {
            padding: var(--space-lg) !important;
          }
        }
      `}</style>
    </div>
  );
};

export default HomePage;
