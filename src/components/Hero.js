import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

/**
 * Modern Hero Section Component
 * Clean, organized, and compact design focused on content and performance
 * 
 * @component
 * @example
 * return <Hero />
 */
const Hero = () => {
  const navigate = useNavigate();
  const [currentRole, setCurrentRole] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isTyping, setIsTyping] = useState(true);

  // Professional role titles optimized for impact
  const roles = [
    'Senior Data Scientist',
    'AI Engineer', 
    'Machine Learning Expert',
    'Deep Learning Specialist',
    'NLP Engineer'
  ];

  /**
   * Optimized typing effect with smooth performance
   * Reduced complexity for better user experience
   */
  useEffect(() => {
    let timeout;
    const role = roles[currentRole];
    
    if (isTyping) {
      if (displayText.length < role.length) {
        timeout = setTimeout(() => {
          setDisplayText(role.slice(0, displayText.length + 1));
        }, 100);
      } else {
        timeout = setTimeout(() => setIsTyping(false), 2000);
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

  /**
   * Navigation handler
   * @param {string} path - Route path to navigate to
   */
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
        position: 'relative',
        background: `
          linear-gradient(135deg, 
            #0a0f1c 0%, 
            #1a2332 20%, 
            #2d3b56 40%, 
            #1a2332 60%, 
            #0a0f1c 80%, 
            #000b1a 100%
          )
        `,
        color: 'white',
        overflow: 'hidden'
      }}
    >
      {/* Sophisticated Background with Enhanced Depth */}
      <div 
        className="background-overlay"
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: `
            radial-gradient(ellipse at 25% 40%, rgba(79, 172, 254, 0.15) 0%, transparent 65%),
            radial-gradient(ellipse at 75% 60%, rgba(168, 85, 247, 0.12) 0%, transparent 65%),
            radial-gradient(ellipse at 50% 20%, rgba(34, 197, 94, 0.08) 0%, transparent 70%),
            radial-gradient(ellipse at 20% 80%, rgba(251, 191, 36, 0.06) 0%, transparent 60%)
          `,
          animation: 'sophisticatedFloat 25s ease-in-out infinite'
        }}
      />

      {/* Elegant Geometric Elements */}
      <div 
        className="geometric-elements"
        style={{
          position: 'absolute',
          top: '8%',
          right: '8%',
          width: '350px',
          height: '350px',
          pointerEvents: 'none',
          zIndex: 1,
          opacity: 0.4
        }}
      >
        {/* Sophisticated Ring Elements */}
        <div
          style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
            border: '3px solid rgba(79, 172, 254, 0.3)',
            borderRadius: '50%',
            borderStyle: 'dashed',
            borderSpacing: '20px',
            animation: 'elegantRotate 40s linear infinite'
          }}
        />
        <div
          style={{
            position: 'absolute',
            top: '15%',
            left: '15%',
            width: '70%',
            height: '70%',
            border: '2px solid rgba(168, 85, 247, 0.25)',
            borderRadius: '50%',
            animation: 'elegantRotate 30s linear infinite reverse'
          }}
        />
        <div
          style={{
            position: 'absolute',
            top: '35%',
            left: '35%',
            width: '30%',
            height: '30%',
            background: `
              radial-gradient(circle, 
                rgba(79, 172, 254, 0.8) 0%, 
                rgba(168, 85, 247, 0.6) 50%, 
                rgba(34, 197, 94, 0.4) 100%
              )
            `,
            borderRadius: '50%',
            animation: 'sophisticatedPulse 6s ease-in-out infinite',
            filter: 'blur(1px)'
          }}
        />
        {/* Additional decorative elements */}
        <div
          style={{
            position: 'absolute',
            top: '10%',
            left: '80%',
            width: '6px',
            height: '6px',
            background: 'rgba(251, 191, 36, 0.8)',
            borderRadius: '50%',
            animation: 'twinkle 3s ease-in-out infinite'
          }}
        />
        <div
          style={{
            position: 'absolute',
            top: '70%',
            left: '10%',
            width: '4px',
            height: '4px',
            background: 'rgba(79, 172, 254, 0.9)',
            borderRadius: '50%',
            animation: 'twinkle 4s ease-in-out infinite 1s'
          }}
        />
      </div>

      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        <div
          className="hero-content"
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr',
            gap: '3rem',
            alignItems: 'center',
            maxWidth: '1200px',
            margin: '0 auto',
            padding: '2rem',
            textAlign: 'center'
          }}
        >
          {/* Main Content */}
          <div className="hero-text">
            <h1
              style={{
                fontSize: 'clamp(3.5rem, 8vw, 6rem)',
                fontWeight: '900',
                marginBottom: '2rem',
                lineHeight: '1.05',
                background: `
                  linear-gradient(135deg, 
                    #ffffff 0%, 
                    #f8fafc 20%, 
                    #e2e8f0 40%, 
                    #f8fafc 60%, 
                    #ffffff 80%, 
                    #f1f5f9 100%
                  )
                `,
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                textShadow: '0 8px 32px rgba(0, 0, 0, 0.4)',
                animation: 'elegantFadeInUp 1.2s ease-out',
                letterSpacing: '-0.02em'
              }}
            >
              Hi, I'm{' '}
              <span
                style={{
                  background: `
                    linear-gradient(135deg, 
                      #fbbf24 0%, 
                      #f59e0b 30%, 
                      #d97706 60%, 
                      #b45309 100%
                    )
                  `,
                  backgroundClip: 'text',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  animation: 'sophisticatedGlow 3s ease-in-out infinite alternate',
                  filter: 'drop-shadow(0 0 20px rgba(251, 191, 36, 0.3))'
                }}
              >
                Soheil
              </span>
            </h1>

            <div style={{ marginBottom: '2.5rem', minHeight: '90px' }}>
              <h2
                style={{
                  fontSize: 'clamp(1.8rem, 4vw, 3rem)',
                  fontWeight: '700',
                  color: '#94a3b8',
                  marginBottom: '0.75rem',
                  letterSpacing: '-0.01em'
                }}
              >
                <span style={{
                  background: `
                    linear-gradient(135deg, 
                      #cbd5e1 0%, 
                      #94a3b8 50%, 
                      #64748b 100%
                    )
                  `,
                  backgroundClip: 'text',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent'
                }}>{displayText}</span>
                <span
                  style={{
                    opacity: isTyping ? 1 : 0,
                    animation: 'sophisticatedBlink 1.2s infinite',
                    color: '#fbbf24',
                    filter: 'drop-shadow(0 0 8px rgba(251, 191, 36, 0.6))'
                  }}
                >
                  |
                </span>
              </h2>
            </div>

            <p
              style={{
                fontSize: 'clamp(1.2rem, 2.5vw, 1.4rem)',
                lineHeight: '1.8',
                color: '#cbd5e1',
                marginBottom: '3.5rem',
                maxWidth: '650px',
                margin: '0 auto 3.5rem auto',
                animation: 'elegantFadeInUp 1.2s ease-out 0.4s both',
                fontWeight: '400',
                letterSpacing: '0.01em'
              }}
            >
              6+ years of experience across the full AI/ML spectrum. From building trading strategies to teaching AI, I create intelligent solutions that make a{' '}
              <span style={{
                color: '#4fc3f7',
                fontWeight: '600',
                background: `
                  linear-gradient(135deg, 
                    #4fc3f7 0%, 
                    #29b6f6 50%, 
                    #0288d1 100%
                  )
                `,
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
              }}>real impact</span>.
            </p>

            {/* Enhanced Stats Section */}
            <div
              className="hero-stats"
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))',
                gap: '2rem',
                marginBottom: '3.5rem',
                animation: 'elegantFadeInUp 1.2s ease-out 0.8s both'
              }}
            >
              <div className="stat-card">
                <div className="stat-number">15+</div>
                <div className="stat-label">AI Projects</div>
              </div>
              <div className="stat-card">
                <div className="stat-number">6+</div>
                <div className="stat-label">Years Experience</div>
              </div>
              <div className="stat-card">
                <div className="stat-number">10+</div>
                <div className="stat-label">Technologies</div>
              </div>
            </div>

            {/* Enhanced Buttons Section */}
            <div
              className="hero-buttons"
              style={{
                display: 'flex',
                gap: '2rem',
                justifyContent: 'center',
                flexWrap: 'wrap',
                animation: 'elegantFadeInUp 1.2s ease-out 1.2s both'
              }}
            >
              <button
                className="btn-primary"
                onClick={() => navigateToPage('/projects')}
              >
                <span>🚀</span>
                Explore My Work
              </button>

              <button
                className="btn-secondary"
                onClick={() => navigateToPage('/contact')}
              >
                <span>💬</span>
                Get In Touch
              </button>

              <a
                href="/resume.pdf"
                download
                className="btn-outline"
              >
                <span>📄</span>
                Download Resume
              </a>
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
            color: '#94a3b8',
            animation: 'bounce 2s infinite'
          }}
        >
          <div 
            style={{
              fontSize: '1.5rem',
              cursor: 'pointer',
              transition: 'color 0.3s ease'
            }}
            onClick={() => navigateToPage('/about')}
            onMouseEnter={(e) => e.target.style.color = '#60a5fa'}
            onMouseLeave={(e) => e.target.style.color = '#94a3b8'}
          >
            ↓
          </div>
        </div>
      </div>

      {/* Enhanced CSS - Sophisticated and Performance Optimized */}
      <style>{`
        /* Sophisticated Base Animations */
        @keyframes elegantFadeInUp {
          from {
            opacity: 0;
            transform: translateY(40px) scale(0.95);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        @keyframes sophisticatedGlow {
          0%, 100% {
            filter: drop-shadow(0 0 25px rgba(251, 191, 36, 0.4));
            transform: scale(1);
          }
          50% {
            filter: drop-shadow(0 0 35px rgba(251, 191, 36, 0.7));
            transform: scale(1.02);
          }
        }

        @keyframes sophisticatedBlink {
          0%, 45% { opacity: 1; }
          50%, 95% { opacity: 0; }
          100% { opacity: 1; }
        }

        @keyframes bounce {
          0%, 20%, 50%, 80%, 100% { transform: translateX(-50%) translateY(0); }
          40% { transform: translateX(-50%) translateY(-12px); }
          60% { transform: translateX(-50%) translateY(-6px); }
        }

        @keyframes sophisticatedFloat {
          0%, 100% { 
            transform: translateY(0px) rotate(0deg);
            opacity: 0.8;
          }
          33% { 
            transform: translateY(-15px) rotate(1deg);
            opacity: 1;
          }
          66% { 
            transform: translateY(-8px) rotate(-1deg);
            opacity: 0.9;
          }
        }

        @keyframes elegantRotate {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        @keyframes sophisticatedPulse {
          0%, 100% { 
            transform: scale(1);
            opacity: 0.6;
          }
          33% { 
            transform: scale(1.15);
            opacity: 0.9;
          }
          66% { 
            transform: scale(1.05);
            opacity: 0.8;
          }
        }

        @keyframes twinkle {
          0%, 100% { 
            opacity: 0.3;
            transform: scale(1);
          }
          50% { 
            opacity: 1;
            transform: scale(1.5);
          }
        }

        /* Enhanced Button Styles */
        .btn-primary {
          padding: 1.25rem 2.5rem;
          font-size: 1.125rem;
          font-weight: 700;
          background: linear-gradient(135deg, #f59e0b 0%, #d97706 50%, #b45309 100%);
          color: white;
          border: none;
          border-radius: 16px;
          cursor: pointer;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          display: inline-flex;
          align-items: center;
          gap: 0.75rem;
          text-decoration: none;
          box-shadow: 
            0 8px 25px rgba(245, 158, 11, 0.4),
            0 4px 12px rgba(0, 0, 0, 0.15);
          position: relative;
          overflow: hidden;
          letter-spacing: 0.01em;
        }

        .btn-primary::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
          transition: left 0.6s;
        }

        .btn-primary:hover::before {
          left: 100%;
        }

        .btn-primary:hover {
          transform: translateY(-3px) scale(1.02);
          box-shadow: 
            0 12px 35px rgba(245, 158, 11, 0.5),
            0 8px 20px rgba(0, 0, 0, 0.2);
          background: linear-gradient(135deg, #fbbf24 0%, #f59e0b 50%, #d97706 100%);
        }

        .btn-secondary {
          padding: 1.25rem 2.5rem;
          font-size: 1.125rem;
          font-weight: 700;
          background: rgba(255, 255, 255, 0.08);
          color: white;
          border: 2px solid rgba(255, 255, 255, 0.25);
          border-radius: 16px;
          cursor: pointer;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          display: inline-flex;
          align-items: center;
          gap: 0.75rem;
          text-decoration: none;
          backdrop-filter: blur(20px);
          box-shadow: 
            0 8px 25px rgba(0, 0, 0, 0.15),
            inset 0 1px 0 rgba(255, 255, 255, 0.1);
          letter-spacing: 0.01em;
        }

        .btn-secondary:hover {
          transform: translateY(-3px) scale(1.02);
          background: rgba(255, 255, 255, 0.15);
          border-color: rgba(255, 255, 255, 0.4);
          box-shadow: 
            0 12px 35px rgba(0, 0, 0, 0.2),
            inset 0 1px 0 rgba(255, 255, 255, 0.15);
        }

        .btn-outline {
          padding: 1.25rem 2.5rem;
          font-size: 1.125rem;
          font-weight: 700;
          background: transparent;
          color: white;
          border: 2px solid rgba(255, 255, 255, 0.25);
          border-radius: 16px;
          cursor: pointer;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          display: inline-flex;
          align-items: center;
          gap: 0.75rem;
          text-decoration: none;
          box-shadow: 
            0 4px 15px rgba(0, 0, 0, 0.1);
          letter-spacing: 0.01em;
        }

        .btn-outline:hover {
          transform: translateY(-3px) scale(1.02);
          border-color: rgba(255, 255, 255, 0.6);
          background: rgba(255, 255, 255, 0.08);
          box-shadow: 
            0 8px 25px rgba(0, 0, 0, 0.15);
        }

        /* Enhanced Stat Cards */
        .stat-card {
          padding: 2rem 1.5rem;
          background: rgba(255, 255, 255, 0.08);
          border: 1px solid rgba(255, 255, 255, 0.15);
          border-radius: 20px;
          text-align: center;
          backdrop-filter: blur(20px);
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          box-shadow: 
            0 8px 25px rgba(0, 0, 0, 0.1),
            inset 0 1px 0 rgba(255, 255, 255, 0.1);
        }

        .stat-card:hover {
          transform: translateY(-8px) scale(1.02);
          background: rgba(255, 255, 255, 0.12);
          border-color: rgba(255, 255, 255, 0.25);
          box-shadow: 
            0 15px 40px rgba(0, 0, 0, 0.2),
            inset 0 1px 0 rgba(255, 255, 255, 0.15);
        }

        .stat-number {
          font-size: 2.25rem;
          font-weight: 900;
          background: linear-gradient(135deg, #fbbf24 0%, #f59e0b 50%, #d97706 100%);
          background-clip: text;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          margin-bottom: 0.75rem;
          letter-spacing: -0.02em;
          filter: drop-shadow(0 2px 4px rgba(245, 158, 11, 0.3));
        }

        .stat-label {
          font-size: 1rem;
          color: #cbd5e1;
          font-weight: 600;
          letter-spacing: 0.01em;
        }

        /* Enhanced Responsive Design */
        @media (max-width: 768px) {
          .hero-content {
            padding: 1.5rem !important;
            gap: 2.5rem !important;
          }

          .hero-buttons {
            flex-direction: column !important;
            align-items: center !important;
            width: 100% !important;
            gap: 1.5rem !important;
          }

          .btn-primary,
          .btn-secondary,
          .btn-outline {
            width: 100% !important;
            max-width: 320px !important;
            justify-content: center !important;
            padding: 1rem 2rem !important;
          }

          .hero-stats {
            grid-template-columns: 1fr 1fr !important;
            gap: 1.5rem !important;
          }

          .geometric-elements {
            display: none !important;
          }
        }

        @media (max-width: 480px) {
          .hero-stats {
            grid-template-columns: 1fr !important;
          }
          
          .stat-card {
            padding: 1.5rem 1rem !important;
          }
        }

        /* Premium Accessibility */
        @media (prefers-reduced-motion: reduce) {
          * {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
          }
        }

        @media (prefers-color-scheme: light) {
          .hero-section {
            /* Maintains dark theme regardless of system preference */
          }
        }

        /* Enhanced Focus States for Accessibility */
        .btn-primary:focus,
        .btn-secondary:focus,
        .btn-outline:focus {
          outline: 3px solid rgba(251, 191, 36, 0.6);
          outline-offset: 2px;
        }
      `}</style>
    </section>
  );
};

export default Hero;
