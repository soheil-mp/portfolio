import React from 'react';

/**
 * About Section Component
 * Personal story and value proposition
 */
const About = () => {
  return (
    <section 
      id="about" 
      className="section section--alt"
      style={{
        padding: 'var(--space-4xl) 0',
        backgroundColor: 'var(--bg-secondary)'
      }}
    >
      <div className="container">
        {/* Section Header */}
        <div className="section-header text-center mb-2xl">
          <h2 
            style={{
              fontSize: 'clamp(2rem, 4vw, 3rem)',
              fontWeight: '700',
              color: 'var(--text-primary)',
              marginBottom: 'var(--space-md)'
            }}
          >
            About Me
          </h2>
          <p 
            style={{
              fontSize: '1.25rem',
              color: 'var(--text-secondary)',
              maxWidth: '600px',
              margin: '0 auto'
            }}
          >
            A passionate data science enthusiast with 6+ years of experience across the full AI/ML spectrum
          </p>
        </div>

        {/* Main Content */}
        <div 
          className="about-content"
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '4rem',
            alignItems: 'center',
            maxWidth: '1000px',
            margin: '0 auto'
          }}
        >
          {/* Left Side - Story */}
          <div className="about-story">
            <div className="story-content">
              <p 
                style={{
                  fontSize: '1.125rem',
                  lineHeight: '1.7',
                  color: 'var(--text-secondary)',
                  marginBottom: 'var(--space-lg)'
                }}
              >
                Hey there! I'm a <strong style={{ color: 'var(--primary-blue)' }}>data science enthusiast</strong> with 
                6+ years of experience across the full spectrum: analysis, machine learning, deep learning, NLP, 
                computer vision, and reinforcement learning.
              </p>

              <p 
                style={{
                  fontSize: '1.125rem',
                  lineHeight: '1.7',
                  color: 'var(--text-secondary)',
                  marginBottom: 'var(--space-lg)'
                }}
              >
                From building <strong style={{ color: 'var(--primary-blue)' }}>trading strategies</strong> in production 
                to teaching AI to teens, I've done it all—and loved every minute. Currently pursuing my degree in 
                <strong style={{ color: 'var(--primary-blue)' }}> Applied Data Science & AI</strong> at Breda University 
                while working as a freelance AI Engineer.
              </p>

              <p 
                style={{
                  fontSize: '1.125rem',
                  lineHeight: '1.7',
                  color: 'var(--text-secondary)',
                  marginBottom: 'var(--space-xl)'
                }}
              >
                What sets me apart? I don't just build models—I create <strong style={{ color: 'var(--primary-blue)' }}>
                intelligent solutions</strong> that solve real-world problems, from automated plant inoculation systems 
                to fine-tuned AI therapists.
              </p>

              {/* Location & Availability */}
              <div 
                className="about-details"
                style={{
                  display: 'flex',
                  gap: '2rem',
                  flexWrap: 'wrap'
                }}
              >
                <div className="detail-item">
                  <i 
                    className="fas fa-map-marker-alt"
                    style={{ 
                      color: 'var(--primary-blue)', 
                      marginRight: '0.5rem' 
                    }}
                  ></i>
                  <span style={{ color: 'var(--text-primary)', fontWeight: '500' }}>
                    Roosendaal, Netherlands
                  </span>
                </div>
                <div className="detail-item">
                  <i 
                    className="fas fa-briefcase"
                    style={{ 
                      color: 'var(--accent-amber)', 
                      marginRight: '0.5rem' 
                    }}
                  ></i>
                  <span style={{ color: 'var(--text-primary)', fontWeight: '500' }}>
                    Available for freelance
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Highlights */}
          <div className="about-highlights">
            <div 
              className="highlights-grid"
              style={{
                display: 'grid',
                gap: 'var(--space-lg)'
              }}
            >
              {/* Experience Highlight */}
              <div 
                className="highlight-card"
                style={{
                  background: 'white',
                  padding: 'var(--space-xl)',
                  borderRadius: 'var(--radius-xl)',
                  boxShadow: 'var(--shadow-md)',
                  border: '1px solid var(--neutral-200)',
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
                <div 
                  className="highlight-icon"
                  style={{
                    width: '60px',
                    height: '60px',
                    borderRadius: '50%',
                    background: 'linear-gradient(135deg, var(--primary-blue), var(--accent-purple))',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: 'var(--space-md)'
                  }}
                >
                  <i className="fas fa-chart-line" style={{ color: 'white', fontSize: '1.5rem' }}></i>
                </div>
                <h4 style={{ fontSize: '1.25rem', fontWeight: '600', marginBottom: 'var(--space-sm)' }}>
                  Production Impact
                </h4>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>
                  Successfully deployed data-driven trading strategies in production environments at GrabSoft
                </p>
              </div>

              {/* Teaching Highlight */}
              <div 
                className="highlight-card"
                style={{
                  background: 'white',
                  padding: 'var(--space-xl)',
                  borderRadius: 'var(--radius-xl)',
                  boxShadow: 'var(--shadow-md)',
                  border: '1px solid var(--neutral-200)',
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
                <div 
                  className="highlight-icon"
                  style={{
                    width: '60px',
                    height: '60px',
                    borderRadius: '50%',
                    background: 'linear-gradient(135deg, var(--accent-amber), var(--accent-emerald))',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: 'var(--space-md)'
                  }}
                >
                  <i className="fas fa-chalkboard-teacher" style={{ color: 'white', fontSize: '1.5rem' }}></i>
                </div>
                <h4 style={{ fontSize: '1.25rem', fontWeight: '600', marginBottom: 'var(--space-sm)' }}>
                  Education & Mentoring
                </h4>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>
                  Mentored students and created educational materials for Udacity's NLP Nanodegree program
                </p>
              </div>

              {/* Innovation Highlight */}
              <div 
                className="highlight-card"
                style={{
                  background: 'white',
                  padding: 'var(--space-xl)',
                  borderRadius: 'var(--radius-xl)',
                  boxShadow: 'var(--shadow-md)',
                  border: '1px solid var(--neutral-200)',
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
                <div 
                  className="highlight-icon"
                  style={{
                    width: '60px',
                    height: '60px',
                    borderRadius: '50%',
                    background: 'linear-gradient(135deg, var(--accent-purple), var(--primary-blue))',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: 'var(--space-md)'
                  }}
                >
                  <i className="fas fa-lightbulb" style={{ color: 'white', fontSize: '1.5rem' }}></i>
                </div>
                <h4 style={{ fontSize: '1.25rem', fontWeight: '600', marginBottom: 'var(--space-sm)' }}>
                  Innovation
                </h4>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>
                  15+ diverse AI projects spanning robotics, GenAI, computer vision, and data engineering
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Fun Facts */}
        <div 
          className="fun-facts"
          style={{
            marginTop: 'var(--space-4xl)',
            textAlign: 'center'
          }}
        >
          <h3 
            style={{
              fontSize: '1.5rem',
              fontWeight: '600',
              marginBottom: 'var(--space-xl)',
              color: 'var(--text-primary)'
            }}
          >
            Quick Facts About Me
          </h3>
          
          <div 
            className="facts-grid"
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
              gap: 'var(--space-lg)',
              maxWidth: '800px',
              margin: '0 auto'
            }}
          >
            <div 
              className="fact-item"
              style={{
                padding: 'var(--space-lg)',
                background: 'white',
                borderRadius: 'var(--radius-lg)',
                boxShadow: 'var(--shadow-sm)',
                transition: 'all var(--transition-normal)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.boxShadow = 'var(--shadow-md)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'var(--shadow-sm)';
              }}
            >
              <i 
                className="fas fa-coffee"
                style={{ 
                  fontSize: '2rem', 
                  color: 'var(--accent-amber)', 
                  marginBottom: 'var(--space-sm)' 
                }}
              ></i>
              <p style={{ color: 'var(--text-secondary)', margin: 0 }}>
                Powered by coffee and curiosity about the latest AI breakthroughs
              </p>
            </div>

            <div 
              className="fact-item"
              style={{
                padding: 'var(--space-lg)',
                background: 'white',
                borderRadius: 'var(--radius-lg)',
                boxShadow: 'var(--shadow-sm)',
                transition: 'all var(--transition-normal)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.boxShadow = 'var(--shadow-md)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'var(--shadow-sm)';
              }}
            >
              <i 
                className="fas fa-globe"
                style={{ 
                  fontSize: '2rem', 
                  color: 'var(--primary-blue)', 
                  marginBottom: 'var(--space-sm)' 
                }}
              ></i>
              <p style={{ color: 'var(--text-secondary)', margin: 0 }}>
                Worked remotely with teams across Armenia, US, and Netherlands
              </p>
            </div>

            <div 
              className="fact-item"
              style={{
                padding: 'var(--space-lg)',
                background: 'white',
                borderRadius: 'var(--radius-lg)',
                boxShadow: 'var(--shadow-sm)',
                transition: 'all var(--transition-normal)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.boxShadow = 'var(--shadow-md)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'var(--shadow-sm)';
              }}
            >
              <i 
                className="fas fa-rocket"
                style={{ 
                  fontSize: '2rem', 
                  color: 'var(--accent-purple)', 
                  marginBottom: 'var(--space-sm)' 
                }}
              ></i>
              <p style={{ color: 'var(--text-secondary)', margin: 0 }}>
                From nano-degrees to production systems—always learning, always building
              </p>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 768px) {
          .about-content {
            grid-template-columns: 1fr !important;
            gap: 2rem !important;
          }
          
          .about-details {
            flex-direction: column !important;
            gap: 1rem !important;
          }
          
          .facts-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
};

export default About;
