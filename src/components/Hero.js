import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

/**
 * Hero Section Component
 * Features dynamic typing effect and compelling call-to-action
 */
const Hero = () => {
  const navigate = useNavigate();
  const [currentRole, setCurrentRole] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isTyping, setIsTyping] = useState(true);

  const roles = [
    'Senior Data Scientist',
    'AI Engineer', 
    'Machine Learning Expert',
    'Deep Learning Specialist',
    'NLP Engineer'
  ];

  useEffect(() => {
    let timeout;
    const role = roles[currentRole];
    
    if (isTyping) {
      if (displayText.length < role.length) {
        timeout = setTimeout(() => {
          setDisplayText(role.slice(0, displayText.length + 1));
        }, 100);
      } else {
        timeout = setTimeout(() => {
          setIsTyping(false);
        }, 2000);
      }
    } else {
      if (displayText.length > 0) {
        timeout = setTimeout(() => {
          setDisplayText(displayText.slice(0, -1));
        }, 50);
      } else {
        setCurrentRole((prev) => (prev + 1) % roles.length);
        setIsTyping(true);
      }
    }

    return () => clearTimeout(timeout);
  }, [displayText, isTyping, currentRole, roles]);

  const navigateToPage = (path) => {
    navigate(path);
  };

  return (
    <section 
      id="hero" 
      className="hero-section"
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        position: 'relative',
        overflow: 'hidden',
        color: 'white'
      }}
    >
      {/* Background Pattern */}
      <div 
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Ccircle cx='7' cy='7' r='7'/%3E%3Ccircle cx='53' cy='7' r='7'/%3E%3Ccircle cx='7' cy='53' r='7'/%3E%3Ccircle cx='53' cy='53' r='7'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          opacity: 0.3
        }}
      />

      <div className="container">
        <div 
          className="hero-content"
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '4rem',
            alignItems: 'center',
            position: 'relative',
            zIndex: 1
          }}
        >
          {/* Left Content */}
          <div className="hero-text">
            <h1 
              style={{
                fontSize: 'clamp(2.5rem, 5vw, 4rem)',
                fontWeight: '800',
                marginBottom: '1rem',
                lineHeight: '1.1'
              }}
            >
              Hi, I'm{' '}
              <span style={{ color: 'var(--accent-amber)' }}>Soheil</span>
              <span style={{ display: 'block', marginTop: '0.5rem' }}>
                <span style={{ color: 'var(--accent-amber)' }}>{displayText}</span>
                <span 
                  style={{ 
                    opacity: isTyping ? 1 : 0,
                    animation: 'blink 1s infinite',
                    color: 'var(--accent-amber)'
                  }}
                >
                  |
                </span>
              </span>
            </h1>

            <p 
              style={{
                fontSize: '1.25rem',
                marginBottom: '2rem',
                opacity: 0.9,
                maxWidth: '500px'
              }}
            >
              6+ years of experience across the full AI/ML spectrum. From building trading strategies to teaching AI, I create intelligent solutions that make a real impact.
            </p>

            <div 
              className="hero-stats"
              style={{
                display: 'flex',
                gap: '2rem',
                marginBottom: '2rem',
                flexWrap: 'wrap'
              }}
            >
              <div className="stat">
                <div style={{ fontSize: '2rem', fontWeight: '700', color: 'var(--accent-amber)' }}>15+</div>
                <div style={{ fontSize: '0.9rem', opacity: 0.8 }}>AI Projects</div>
              </div>
              <div className="stat">
                <div style={{ fontSize: '2rem', fontWeight: '700', color: 'var(--accent-amber)' }}>6+</div>
                <div style={{ fontSize: '0.9rem', opacity: 0.8 }}>Years Experience</div>
              </div>
              <div className="stat">
                <div style={{ fontSize: '2rem', fontWeight: '700', color: 'var(--accent-amber)' }}>20+</div>
                <div style={{ fontSize: '0.9rem', opacity: 0.8 }}>Certifications</div>
              </div>
            </div>

            <div 
              className="hero-buttons"
              style={{
                display: 'flex',
                gap: '1rem',
                flexWrap: 'wrap'
              }}
            >
              <button 
                className="btn btn--primary"
                onClick={() => navigateToPage('/projects')}
                style={{
                  padding: '1rem 2rem',
                  fontSize: '1.1rem',
                  fontWeight: '600',
                  background: 'var(--accent-amber)',
                  color: 'var(--neutral-900)',
                  border: 'none',
                  borderRadius: 'var(--radius-lg)',
                  cursor: 'pointer',
                  transition: 'all var(--transition-normal)',
                  transform: 'translateY(0)',
                  boxShadow: 'var(--shadow-lg)'
                }}
                onMouseEnter={(e) => {
                  e.target.style.transform = 'translateY(-2px)';
                  e.target.style.boxShadow = 'var(--shadow-xl)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.transform = 'translateY(0)';
                  e.target.style.boxShadow = 'var(--shadow-lg)';
                }}
              >
                <i className="fas fa-rocket" style={{ marginRight: '0.5rem' }}></i>
                Explore My Work
              </button>

              <button 
                className="btn btn--secondary"
                onClick={() => navigateToPage('/contact')}
                style={{
                  padding: '1rem 2rem',
                  fontSize: '1.1rem',
                  fontWeight: '600',
                  background: 'transparent',
                  color: 'white',
                  border: '2px solid white',
                  borderRadius: 'var(--radius-lg)',
                  cursor: 'pointer',
                  transition: 'all var(--transition-normal)',
                  transform: 'translateY(0)'
                }}
                onMouseEnter={(e) => {
                  e.target.style.background = 'white';
                  e.target.style.color = 'var(--primary-blue)';
                  e.target.style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.background = 'transparent';
                  e.target.style.color = 'white';
                  e.target.style.transform = 'translateY(0)';
                }}
              >
                <i className="fas fa-envelope" style={{ marginRight: '0.5rem' }}></i>
                Get In Touch
              </button>

              <a 
                href="/resume.pdf" 
                download
                className="btn btn--outline"
                style={{
                  padding: '1rem 2rem',
                  fontSize: '1.1rem',
                  fontWeight: '600',
                  background: 'transparent',
                  color: 'white',
                  border: '2px solid rgba(255, 255, 255, 0.3)',
                  borderRadius: 'var(--radius-lg)',
                  cursor: 'pointer',
                  transition: 'all var(--transition-normal)',
                  transform: 'translateY(0)',
                  textDecoration: 'none',
                  display: 'inline-flex',
                  alignItems: 'center'
                }}
                onMouseEnter={(e) => {
                  e.target.style.borderColor = 'white';
                  e.target.style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.borderColor = 'rgba(255, 255, 255, 0.3)';
                  e.target.style.transform = 'translateY(0)';
                }}
              >
                <i className="fas fa-download" style={{ marginRight: '0.5rem' }}></i>
                Download Resume
              </a>
            </div>
          </div>

          {/* Right Content - Profile Image */}
          <div 
            className="hero-image"
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center'
            }}
          >
            <div 
              className="profile-container"
              style={{
                width: '350px',
                height: '350px',
                borderRadius: '50%',
                background: 'rgba(255, 255, 255, 0.1)',
                backdropFilter: 'blur(10px)',
                border: '3px solid rgba(255, 255, 255, 0.2)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                position: 'relative',
                overflow: 'hidden'
              }}
            >
              {/* Placeholder for profile image */}
              <div 
                style={{
                  width: '200px',
                  height: '200px',
                  borderRadius: '50%',
                  background: 'linear-gradient(135deg, var(--accent-amber), var(--accent-purple))',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '4rem',
                  color: 'white'
                }}
              >
                <i className="fas fa-user"></i>
              </div>

              {/* Floating Elements */}
              <div 
                style={{
                  position: 'absolute',
                  top: '20%',
                  right: '10%',
                  width: '60px',
                  height: '60px',
                  borderRadius: '50%',
                  background: 'rgba(251, 191, 36, 0.2)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  animation: 'float 3s ease-in-out infinite'
                }}
              >
                <i className="fas fa-brain" style={{ color: 'var(--accent-amber)', fontSize: '1.5rem' }}></i>
              </div>

              <div 
                style={{
                  position: 'absolute',
                  bottom: '15%',
                  left: '15%',
                  width: '50px',
                  height: '50px',
                  borderRadius: '50%',
                  background: 'rgba(124, 58, 237, 0.2)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  animation: 'float 3s ease-in-out infinite 1s'
                }}
              >
                <i className="fas fa-code" style={{ color: 'var(--accent-purple)', fontSize: '1.2rem' }}></i>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div 
          className="scroll-indicator"
          style={{
            position: 'absolute',
            bottom: '2rem',
            left: '50%',
            transform: 'translateX(-50%)',
            animation: 'bounce 2s infinite'
          }}
        >
          <i 
            className="fas fa-chevron-down"
            style={{
              fontSize: '1.5rem',
              opacity: 0.7,
              cursor: 'pointer'
            }}
            onClick={() => navigateToPage('/about')}
          ></i>
        </div>
      </div>

      {/* Animations */}
      <style jsx>{`
        @keyframes blink {
          0%, 50% { opacity: 1; }
          51%, 100% { opacity: 0; }
        }

        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }

        @keyframes bounce {
          0%, 20%, 50%, 80%, 100% { transform: translateX(-50%) translateY(0); }
          40% { transform: translateX(-50%) translateY(-10px); }
          60% { transform: translateX(-50%) translateY(-5px); }
        }

        @media (max-width: 768px) {
          .hero-content {
            grid-template-columns: 1fr !important;
            text-align: center;
            gap: 2rem !important;
          }
          
          .hero-stats {
            justify-content: center !important;
          }
          
          .hero-buttons {
            justify-content: center !important;
          }
          
          .profile-container {
            width: 250px !important;
            height: 250px !important;
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;
