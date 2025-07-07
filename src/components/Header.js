import React, { useState, useEffect } from 'react';
import { useLocation, NavLink } from 'react-router-dom';

/**
 * Unified Header Component with Dark Theme
 * Features elegant tab-based navigation with modern dark design
 * Combines traditional header and tab navigation into one cohesive component
 */
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  // Enhanced navigation items with icons and descriptions
  const navItems = [
    { 
      id: 'home', 
      path: '/', 
      label: 'Home', 
      icon: 'fas fa-home',
      description: 'Welcome & Overview'
    },
    { 
      id: 'about', 
      path: '/about', 
      label: 'About', 
      icon: 'fas fa-user',
      description: 'My Story & Background'
    },
    { 
      id: 'skills', 
      path: '/skills', 
      label: 'Skills', 
      icon: 'fas fa-code',
      description: 'Technical Expertise'
    },
    { 
      id: 'projects', 
      path: '/projects', 
      label: 'Projects', 
      icon: 'fas fa-laptop-code',
      description: 'Featured Work'
    },
    { 
      id: 'experience', 
      path: '/experience', 
      label: 'Experience', 
      icon: 'fas fa-briefcase',
      description: 'Career Journey'
    },
    { 
      id: 'certifications', 
      path: '/certifications', 
      label: 'Certifications', 
      icon: 'fas fa-certificate',
      description: 'Achievements'
    },
    { 
      id: 'contact', 
      path: '/contact', 
      label: 'Contact', 
      icon: 'fas fa-envelope',
      description: 'Get in Touch'
    }
  ];

  // Handle scroll effects for enhanced visual feedback
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  // Get current active page for enhanced styling
  const getCurrentPage = () => {
    return navItems.find(item => item.path === location.pathname)?.id || 'home';
  };

  return (
    <>
      {/* Unified Compact Header with Dark Theme */}
      <header 
        className="unified-header"
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1000,
          background: isScrolled 
            ? 'linear-gradient(135deg, rgba(10, 16, 30, 0.98), rgba(24, 28, 42, 0.98))'
            : 'linear-gradient(135deg, rgba(10, 16, 30, 0.95), rgba(24, 28, 42, 0.95))',
          backdropFilter: 'blur(24px)',
          borderBottom: isScrolled 
            ? '1px solid rgba(59, 130, 246, 0.2)' 
            : '1px solid rgba(59, 130, 246, 0.1)',
          transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
          boxShadow: isScrolled 
            ? '0 12px 40px rgba(0, 0, 0, 0.4), 0 4px 16px rgba(59, 130, 246, 0.1)' 
            : '0 8px 28px rgba(0, 0, 0, 0.3), 0 2px 8px rgba(59, 130, 246, 0.05)',
          padding: '1.25rem 0'
        }}
      >
        <div className="container">
          <div 
            className="header-content"
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: '1.5rem'
            }}
          >
            {/* Enhanced Logo */}
            <NavLink 
              to="/"
              className="nav__logo"
              style={{
                fontSize: '1.8rem',
                fontWeight: '900',
                background: 'linear-gradient(135deg, #60a5fa, #a78bfa, #f472b6)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                textDecoration: 'none',
                transition: 'all 0.3s ease',
                filter: 'drop-shadow(0 2px 8px rgba(96, 165, 250, 0.3))',
                flexShrink: 0
              }}
              onMouseEnter={(e) => {
                e.target.style.transform = 'scale(1.05)';
                e.target.style.filter = 'drop-shadow(0 4px 12px rgba(96, 165, 250, 0.5))';
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = 'scale(1)';
                e.target.style.filter = 'drop-shadow(0 2px 8px rgba(96, 165, 250, 0.3))';
              }}
            >
              Soheil<span style={{ 
                background: 'linear-gradient(135deg, #fbbf24, #f59e0b)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}>.</span>
            </NavLink>

            {/* Compact Tab Navigation */}
            <div 
              className="tabs-container"
              style={{
                display: 'flex',
                gap: '0.25rem',
                justifyContent: 'space-between',
                alignItems: 'center',
                width: '100%',
                padding: '0.375rem',
                background: 'rgba(0, 0, 0, 0.25)',
                borderRadius: '18px',
                backdropFilter: 'blur(16px)',
                border: '1px solid rgba(59, 130, 246, 0.15)',
                boxShadow: 'inset 0 2px 12px rgba(0, 0, 0, 0.4), 0 4px 20px rgba(0, 0, 0, 0.2)',
                flex: 1,
                maxWidth: '700px',
                position: 'relative'
              }}
            >
              {navItems.map((item) => {
                const isActive = getCurrentPage() === item.id;
                return (
                  <NavLink
                    key={item.id}
                    to={item.path}
                    className={`tab-item ${isActive ? 'tab-item--active' : ''}`}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.3rem',
                      padding: '0.5rem 0.65rem',
                      borderRadius: '12px',
                      textDecoration: 'none',
                      fontSize: '0.75rem',
                      fontWeight: '700',
                      transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                      background: isActive 
                        ? 'linear-gradient(135deg, rgba(59, 130, 246, 0.9), rgba(147, 51, 234, 0.85))'
                        : 'rgba(255, 255, 255, 0.08)',
                      color: isActive ? '#ffffff' : '#e2e8f0',
                      border: isActive 
                        ? '1px solid rgba(59, 130, 246, 0.7)'
                        : '1px solid rgba(255, 255, 255, 0.12)',
                      flex: '1',
                      minWidth: '0',
                      transform: isActive ? 'translateY(-1px) scale(1.02)' : 'translateY(0) scale(1)',
                      boxShadow: isActive 
                        ? '0 6px 20px rgba(59, 130, 246, 0.35), 0 2px 8px rgba(0, 0, 0, 0.4), inset 0 1px 2px rgba(255, 255, 255, 0.2)' 
                        : '0 1px 4px rgba(0, 0, 0, 0.2), inset 0 1px 1px rgba(255, 255, 255, 0.1)',
                      backdropFilter: 'blur(12px)',
                      position: 'relative',
                      overflow: 'hidden',
                      justifyContent: 'center'
                    }}
                    onMouseEnter={(e) => {
                      if (!isActive) {
                        e.currentTarget.style.background = 'rgba(255, 255, 255, 0.15)';
                        e.currentTarget.style.borderColor = 'rgba(59, 130, 246, 0.4)';
                        e.currentTarget.style.color = '#ffffff';
                        e.currentTarget.style.transform = 'translateY(-1px) scale(1.01)';
                        e.currentTarget.style.boxShadow = '0 4px 12px rgba(59, 130, 246, 0.25), 0 2px 6px rgba(0, 0, 0, 0.3)';
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (!isActive) {
                        e.currentTarget.style.background = 'rgba(255, 255, 255, 0.08)';
                        e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.12)';
                        e.currentTarget.style.color = '#e2e8f0';
                        e.currentTarget.style.transform = 'translateY(0) scale(1)';
                        e.currentTarget.style.boxShadow = '0 1px 4px rgba(0, 0, 0, 0.2), inset 0 1px 1px rgba(255, 255, 255, 0.1)';
                      }
                    }}
                  >
                    {/* Enhanced animated glow effect for active tab */}
                    {isActive && (
                      <div
                        style={{
                          position: 'absolute',
                          top: '50%',
                          left: '50%',
                          width: '120%',
                          height: '120%',
                          background: 'radial-gradient(circle, rgba(59, 130, 246, 0.2) 0%, transparent 70%)',
                          borderRadius: '50%',
                          animation: 'activeTabPulse 3s ease-in-out infinite',
                          transform: 'translate(-50%, -50%)',
                          zIndex: -1
                        }}
                      />
                    )}
                    
                    <i 
                      className={item.icon}
                      style={{
                        fontSize: '0.85rem',
                        color: isActive ? '#ffffff' : '#cbd5e1',
                        transition: 'all 0.3s ease',
                        filter: isActive ? 'drop-shadow(0 1px 2px rgba(0, 0, 0, 0.3))' : 'none',
                        flexShrink: 0
                      }}
                    ></i>
                    
                    <span style={{ 
                      fontWeight: '700',
                      lineHeight: '1.1',
                      whiteSpace: 'nowrap',
                      textShadow: isActive ? '0 1px 2px rgba(0, 0, 0, 0.3)' : 'none',
                      overflow: 'hidden',
                      textOverflow: 'ellipsis',
                      minWidth: '0'
                    }}>
                      {item.label}
                    </span>
                  </NavLink>
                );
              })}
            </div>

            {/* Mobile Menu Toggle */}
            <button
              className="nav__toggle"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              style={{
                display: 'none',
                background: 'rgba(255, 255, 255, 0.1)',
                border: '1px solid rgba(59, 130, 246, 0.3)',
                borderRadius: '12px',
                flexDirection: 'column',
                cursor: 'pointer',
                padding: '0.75rem',
                gap: '4px',
                transition: 'all 0.3s ease',
                backdropFilter: 'blur(12px)',
                flexShrink: 0
              }}
              onMouseEnter={(e) => {
                e.target.style.background = 'rgba(255, 255, 255, 0.15)';
                e.target.style.borderColor = 'rgba(59, 130, 246, 0.5)';
              }}
              onMouseLeave={(e) => {
                e.target.style.background = 'rgba(255, 255, 255, 0.1)';
                e.target.style.borderColor = 'rgba(59, 130, 246, 0.3)';
              }}
            >
              <span 
                style={{
                  width: '22px',
                  height: '2px',
                  background: 'linear-gradient(135deg, #f1f5f9, #cbd5e1)',
                  borderRadius: '2px',
                  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                  transform: isMenuOpen ? 'rotate(45deg) translate(5px, 5px)' : 'none'
                }}
              />
              <span 
                style={{
                  width: '22px',
                  height: '2px',
                  background: 'linear-gradient(135deg, #f1f5f9, #cbd5e1)',
                  borderRadius: '2px',
                  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                  opacity: isMenuOpen ? 0 : 1
                }}
              />
              <span 
                style={{
                  width: '22px',
                  height: '2px',
                  background: 'linear-gradient(135deg, #f1f5f9, #cbd5e1)',
                  borderRadius: '2px',
                  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                  transform: isMenuOpen ? 'rotate(-45deg) translate(5px, -5px)' : 'none'
                }}
              />
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div 
            className="nav__mobile"
            style={{
              position: 'absolute',
              top: '100%',
              left: 0,
              right: 0,
              background: 'linear-gradient(135deg, rgba(10, 16, 30, 0.98), rgba(24, 28, 42, 0.98))',
              backdropFilter: 'blur(24px)',
              borderTop: '1px solid rgba(59, 130, 246, 0.2)',
              borderBottom: '1px solid rgba(59, 130, 246, 0.2)',
              padding: '1.25rem',
              boxShadow: '0 12px 40px rgba(0, 0, 0, 0.4)',
              animation: 'slideDown 0.3s ease-out'
            }}
          >
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              {navItems.map((item) => {
                const isActive = getCurrentPage() === item.id;
                return (
                  <NavLink
                    key={item.id}
                    to={item.path}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.875rem',
                      background: isActive 
                        ? 'linear-gradient(135deg, rgba(59, 130, 246, 0.25), rgba(147, 51, 234, 0.25))' 
                        : 'rgba(255, 255, 255, 0.06)',
                      color: isActive ? '#ffffff' : '#e2e8f0',
                      fontSize: '0.95rem',
                      fontWeight: '700',
                      cursor: 'pointer',
                      padding: '0.875rem 1rem',
                      borderRadius: '12px',
                      textDecoration: 'none',
                      transition: 'all 0.3s ease',
                      border: '1px solid transparent',
                      borderColor: isActive ? 'rgba(59, 130, 246, 0.4)' : 'rgba(255, 255, 255, 0.1)',
                      boxShadow: isActive 
                        ? '0 4px 12px rgba(59, 130, 246, 0.2)' 
                        : '0 2px 6px rgba(0, 0, 0, 0.2)'
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.background = isActive 
                        ? 'linear-gradient(135deg, rgba(59, 130, 246, 0.35), rgba(147, 51, 234, 0.35))'
                        : 'rgba(255, 255, 255, 0.12)';
                      e.target.style.color = '#ffffff';
                      e.target.style.borderColor = 'rgba(59, 130, 246, 0.5)';
                      e.target.style.transform = 'translateX(4px)';
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.background = isActive 
                        ? 'linear-gradient(135deg, rgba(59, 130, 246, 0.25), rgba(147, 51, 234, 0.25))' 
                        : 'rgba(255, 255, 255, 0.06)';
                      e.target.style.color = isActive ? '#ffffff' : '#e2e8f0';
                      e.target.style.borderColor = isActive ? 'rgba(59, 130, 246, 0.4)' : 'rgba(255, 255, 255, 0.1)';
                      e.target.style.transform = 'translateX(0)';
                    }}
                  >
                    <i className={item.icon} style={{ 
                      fontSize: '1rem', 
                      color: isActive ? '#60a5fa' : '#94a3b8',
                      filter: isActive ? 'drop-shadow(0 1px 2px rgba(0, 0, 0, 0.3))' : 'none'
                    }}></i>
                    <span style={{ fontWeight: '700' }}>{item.label}</span>
                  </NavLink>
                );
              })}
            </div>
          </div>
        )}
      </header>

      {/* Enhanced Custom Styles */}
      <style jsx>{`
        @keyframes activeTabPulse {
          0%, 100% { 
            opacity: 0.6; 
            transform: translate(-50%, -50%) scale(1);
          }
          50% { 
            opacity: 0.8; 
            transform: translate(-50%, -50%) scale(1.05);
          }
        }

        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-15px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes shimmer {
          0% {
            background-position: -200% 0;
          }
          100% {
            background-position: 200% 0;
          }
        }

        .tabs-container {
          overflow: visible !important;
        }

        /* Add subtle shimmer effect on hover */
        .tab-item:hover::after {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.1), transparent);
          animation: shimmer 1.5s ease-out;
          pointer-events: none;
        }

        /* Enhanced responsive design */
        @media (max-width: 1200px) {
          .tabs-container {
            max-width: 600px !important;
            gap: 0.2rem !important;
          }
          
          .tab-item {
            padding: 0.45rem 0.6rem !important;
            font-size: 0.7rem !important;
            gap: 0.25rem !important;
          }
          
          .tab-item i {
            font-size: 0.8rem !important;
          }
        }

        @media (max-width: 1024px) {
          .tabs-container {
            max-width: 500px !important;
            gap: 0.15rem !important;
          }
          
          .tab-item {
            padding: 0.4rem 0.5rem !important;
            font-size: 0.65rem !important;
            gap: 0.2rem !important;
          }
          
          .tab-item i {
            font-size: 0.75rem !important;
          }
        }

        @media (max-width: 900px) {
          .tab-item span {
            display: none !important;
          }
          
          .tab-item {
            padding: 0.5rem !important;
            gap: 0 !important;
            justify-content: center !important;
          }
          
          .tab-item i {
            font-size: 0.9rem !important;
          }
        }

        @media (max-width: 768px) {
          .nav__toggle {
            display: flex !important;
          }

          .tabs-container {
            display: none !important;
          }
          
          .header-content {
            gap: 1rem !important;
          }
        }

        /* Ultra-compact mode for very small screens */
        @media (max-width: 480px) {
          .nav__logo {
            font-size: 1.4rem !important;
          }
          
          .nav__toggle {
            padding: 0.5rem !important;
          }
          
          .nav__toggle span {
            width: 18px !important;
          }
          
          .header-content {
            gap: 0.75rem !important;
          }
        }
        
        @media (max-width: 360px) {
          .tab-item {
            padding: 0.4rem 0.3rem !important;
            font-size: 0.6rem !important;
          }
          
          .tab-item i {
            font-size: 0.85rem !important;
          }
          
          .nav__logo {
            font-size: 1.3rem !important;
          }
        }

        /* Enhanced focus and accessibility */
        .tab-item:focus,
        .nav__toggle:focus {
          outline: 2px solid #60a5fa;
          outline-offset: 2px;
        }

        /* High contrast mode support */
        @media (prefers-contrast: high) {
          .unified-header {
            background: #000 !important;
            border-bottom: 2px solid #fff !important;
          }
          
          .tab-item {
            border: 2px solid #fff !important;
          }
          
          .tabs-container {
            border: 2px solid #fff !important;
            background: #000 !important;
          }
        }

        /* Reduced motion support */
        @media (prefers-reduced-motion: reduce) {
          .tab-item,
          .nav__mobile,
          .nav__toggle span {
            transition: none !important;
            animation: none !important;
          }
          
          .tab-item::after {
            animation: none !important;
          }
        }

        /* Glass morphism enhancement */
        .unified-header::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(135deg, 
            rgba(59, 130, 246, 0.02) 0%, 
            rgba(147, 51, 234, 0.02) 30%,
            rgba(244, 114, 182, 0.02) 60%,
            rgba(251, 191, 36, 0.02) 100%);
          pointer-events: none;
          z-index: -1;
        }

        /* Improved active tab indicators */
        .tab-item--active::before {
          content: '';
          position: absolute;
          bottom: -1px;
          left: 50%;
          transform: translateX(-50%);
          width: 60%;
          height: 2px;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.6), transparent);
          border-radius: 1px;
        }

        /* Glass morphism enhancement */
        .unified-header::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(135deg, 
            rgba(59, 130, 246, 0.02) 0%, 
            rgba(147, 51, 234, 0.02) 30%,
            rgba(244, 114, 182, 0.02) 60%,
            rgba(251, 191, 36, 0.02) 100%);
          pointer-events: none;
          z-index: -1;
        }

        /* Improved active tab indicators */
        .tab-item--active::before {
          content: '';
          position: absolute;
          bottom: -1px;
          left: 50%;
          transform: translateX(-50%);
          width: 60%;
          height: 2px;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.6), transparent);
          border-radius: 1px;
        }
      `}</style>
    </>
  );
};

export default Header;
