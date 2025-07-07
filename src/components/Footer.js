import React from 'react';

/**
 * Footer Component
 * Clean footer with social links and copyright
 */
const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      id: 'github',
      icon: 'fab fa-github',
      href: 'https://github.com/soheil-mp',
      label: 'GitHub',
      color: '#333'
    },
    {
      id: 'linkedin',
      icon: 'fab fa-linkedin',
      href: 'https://linkedin.com/in/soheilmp',
      label: 'LinkedIn',
      color: '#0077b5'
    },
    {
      id: 'email',
      icon: 'fas fa-envelope',
      href: 'mailto:soheil.mpg@gmail.com',
      label: 'Email',
      color: 'var(--primary-blue)'
    }
  ];

  const quickLinks = [
    { id: 'about', label: 'About', href: '#about' },
    { id: 'skills', label: 'Skills', href: '#skills' },
    { id: 'projects', label: 'Projects', href: '#projects' },
    { id: 'experience', label: 'Experience', href: '#experience' },
    { id: 'contact', label: 'Contact', href: '#contact' }
  ];

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerHeight = 80;
      const elementPosition = element.offsetTop - headerHeight;
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer 
      className="footer"
      style={{
        background: 'linear-gradient(135deg, var(--neutral-900), var(--neutral-800))',
        color: 'white',
        padding: 'var(--space-4xl) 0 var(--space-xl) 0',
        position: 'relative',
        overflow: 'hidden'
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
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Ccircle cx='7' cy='7' r='2'/%3E%3Ccircle cx='53' cy='7' r='2'/%3E%3Ccircle cx='7' cy='53' r='2'/%3E%3Ccircle cx='53' cy='53' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          opacity: 0.3
        }}
      />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        {/* Main Footer Content */}
        <div 
          className="footer-content"
          style={{
            display: 'grid',
            gridTemplateColumns: '2fr 1fr 1fr',
            gap: 'var(--space-4xl)',
            marginBottom: 'var(--space-3xl)'
          }}
        >
          {/* Brand Section */}
          <div className="footer-brand">
            <div 
              className="brand-logo"
              style={{
                fontSize: '2rem',
                fontWeight: '800',
                color: 'white',
                marginBottom: 'var(--space-lg)',
                cursor: 'pointer'
              }}
              onClick={scrollToTop}
            >
              Soheil<span style={{ color: 'var(--accent-amber)' }}>.</span>
            </div>
            
            <p 
              style={{
                fontSize: '1.1rem',
                lineHeight: '1.7',
                color: 'var(--neutral-300)',
                marginBottom: 'var(--space-lg)',
                maxWidth: '400px'
              }}
            >
              Senior Data Scientist & AI Engineer with 6+ years of experience building 
              intelligent solutions that make a real impact. From trading algorithms to 
              generative AI, I turn complex problems into elegant solutions.
            </p>

            {/* Key Stats */}
            <div 
              className="footer-stats"
              style={{
                display: 'flex',
                gap: 'var(--space-xl)',
                marginBottom: 'var(--space-lg)'
              }}
            >
              <div className="stat">
                <div 
                  style={{
                    fontSize: '1.5rem',
                    fontWeight: '700',
                    color: 'var(--accent-amber)'
                  }}
                >
                  15+
                </div>
                <div 
                  style={{
                    fontSize: '0.9rem',
                    color: 'var(--neutral-400)'
                  }}
                >
                  AI Projects
                </div>
              </div>
              <div className="stat">
                <div 
                  style={{
                    fontSize: '1.5rem',
                    fontWeight: '700',
                    color: 'var(--accent-amber)'
                  }}
                >
                  6+
                </div>
                <div 
                  style={{
                    fontSize: '0.9rem',
                    color: 'var(--neutral-400)'
                  }}
                >
                  Years Exp
                </div>
              </div>
              <div className="stat">
                <div 
                  style={{
                    fontSize: '1.5rem',
                    fontWeight: '700',
                    color: 'var(--accent-amber)'
                  }}
                >
                  20+
                </div>
                <div 
                  style={{
                    fontSize: '0.9rem',
                    color: 'var(--neutral-400)'
                  }}
                >
                  Certifications
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div 
              className="social-links"
              style={{
                display: 'flex',
                gap: 'var(--space-md)'
              }}
            >
              {socialLinks.map((social) => (
                <a 
                  key={social.id}
                  href={social.href}
                  target={social.id !== 'email' ? '_blank' : undefined}
                  rel={social.id !== 'email' ? 'noopener noreferrer' : undefined}
                  aria-label={social.label}
                  style={{
                    width: '50px',
                    height: '50px',
                    borderRadius: '50%',
                    background: 'rgba(255, 255, 255, 0.1)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'white',
                    textDecoration: 'none',
                    transition: 'all var(--transition-normal)',
                    border: '2px solid rgba(255, 255, 255, 0.2)'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.background = social.color;
                    e.target.style.borderColor = social.color;
                    e.target.style.transform = 'translateY(-3px)';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.background = 'rgba(255, 255, 255, 0.1)';
                    e.target.style.borderColor = 'rgba(255, 255, 255, 0.2)';
                    e.target.style.transform = 'translateY(0)';
                  }}
                >
                  <i className={social.icon} style={{ fontSize: '1.2rem' }}></i>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-links">
            <h4 
              style={{
                fontSize: '1.2rem',
                fontWeight: '600',
                color: 'white',
                marginBottom: 'var(--space-lg)'
              }}
            >
              Quick Links
            </h4>
            
            <ul 
              style={{
                listStyle: 'none',
                padding: 0,
                margin: 0
              }}
            >
              {quickLinks.map((link) => (
                <li key={link.id} style={{ marginBottom: 'var(--space-md)' }}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    style={{
                      background: 'none',
                      border: 'none',
                      color: 'var(--neutral-300)',
                      fontSize: '1rem',
                      cursor: 'pointer',
                      transition: 'color var(--transition-fast)',
                      padding: 0,
                      textAlign: 'left'
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.color = 'var(--accent-amber)';
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.color = 'var(--neutral-300)';
                    }}
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="footer-contact">
            <h4 
              style={{
                fontSize: '1.2rem',
                fontWeight: '600',
                color: 'white',
                marginBottom: 'var(--space-lg)'
              }}
            >
              Get In Touch
            </h4>
            
            <div className="contact-info">
              <div 
                className="contact-item"
                style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: 'var(--space-sm)',
                  marginBottom: 'var(--space-md)'
                }}
              >
                <i 
                  className="fas fa-envelope"
                  style={{
                    color: 'var(--accent-amber)',
                    fontSize: '1rem',
                    marginTop: '2px'
                  }}
                ></i>
                <div>
                  <a 
                    href="mailto:soheil.mpg@gmail.com"
                    style={{
                      color: 'var(--neutral-300)',
                      textDecoration: 'none',
                      fontSize: '0.95rem',
                      fontFamily: 'var(--font-mono)'
                    }}
                    onMouseEnter={(e) => e.target.style.color = 'var(--accent-amber)'}
                    onMouseLeave={(e) => e.target.style.color = 'var(--neutral-300)'}
                  >
                    soheil.mpg@gmail.com
                  </a>
                </div>
              </div>

              <div 
                className="contact-item"
                style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: 'var(--space-sm)',
                  marginBottom: 'var(--space-md)'
                }}
              >
                <i 
                  className="fas fa-map-marker-alt"
                  style={{
                    color: 'var(--accent-amber)',
                    fontSize: '1rem',
                    marginTop: '2px'
                  }}
                ></i>
                <div>
                  <span 
                    style={{
                      color: 'var(--neutral-300)',
                      fontSize: '0.95rem'
                    }}
                  >
                    Roosendaal, Netherlands
                  </span>
                </div>
              </div>

              <div 
                className="contact-item"
                style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: 'var(--space-sm)',
                  marginBottom: 'var(--space-lg)'
                }}
              >
                <i 
                  className="fas fa-globe"
                  style={{
                    color: 'var(--accent-amber)',
                    fontSize: '1rem',
                    marginTop: '2px'
                  }}
                ></i>
                <div>
                  <span 
                    style={{
                      color: 'var(--neutral-300)',
                      fontSize: '0.95rem'
                    }}
                  >
                    Available worldwide (Remote)
                  </span>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <a 
              href="mailto:soheil.mpg@gmail.com"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 'var(--space-sm)',
                padding: 'var(--space-sm) var(--space-lg)',
                background: 'linear-gradient(135deg, var(--accent-amber), var(--accent-amber)dd)',
                color: 'white',
                textDecoration: 'none',
                borderRadius: 'var(--radius-md)',
                fontSize: '0.9rem',
                fontWeight: '600',
                transition: 'all var(--transition-normal)'
              }}
              onMouseEnter={(e) => {
                e.target.style.transform = 'translateY(-2px)';
                e.target.style.boxShadow = 'var(--shadow-lg)';
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = 'translateY(0)';
                e.target.style.boxShadow = 'none';
              }}
            >
              <i className="fas fa-paper-plane"></i>
              Let's Work Together
            </a>
          </div>
        </div>

        {/* Footer Bottom */}
        <div 
          className="footer-bottom"
          style={{
            paddingTop: 'var(--space-xl)',
            borderTop: '1px solid rgba(255, 255, 255, 0.1)',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: 'var(--space-md)'
          }}
        >
          <div 
            className="copyright"
            style={{
              color: 'var(--neutral-400)',
              fontSize: '0.9rem'
            }}
          >
            © {currentYear} Soheil Mohammadpour. All rights reserved. Built with ❤️ and React.
          </div>

          <div 
            className="footer-links-bottom"
            style={{
              display: 'flex',
              gap: 'var(--space-lg)',
              alignItems: 'center'
            }}
          >
            <button
              onClick={scrollToTop}
              style={{
                background: 'rgba(255, 255, 255, 0.1)',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                color: 'white',
                width: '40px',
                height: '40px',
                borderRadius: '50%',
                cursor: 'pointer',
                transition: 'all var(--transition-normal)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
              onMouseEnter={(e) => {
                e.target.style.background = 'var(--accent-amber)';
                e.target.style.borderColor = 'var(--accent-amber)';
                e.target.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={(e) => {
                e.target.style.background = 'rgba(255, 255, 255, 0.1)';
                e.target.style.borderColor = 'rgba(255, 255, 255, 0.2)';
                e.target.style.transform = 'translateY(0)';
              }}
              aria-label="Back to top"
            >
              <i className="fas fa-arrow-up"></i>
            </button>

            <div 
              style={{
                color: 'var(--neutral-400)',
                fontSize: '0.8rem'
              }}
            >
              Made in Netherlands 🇳🇱
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 768px) {
          .footer-content {
            grid-template-columns: 1fr !important;
            gap: var(--space-2xl) !important;
            text-align: center;
          }
          
          .footer-stats {
            justify-content: center !important;
          }
          
          .social-links {
            justify-content: center !important;
          }
          
          .footer-bottom {
            flex-direction: column !important;
            text-align: center;
          }
          
          .footer-links-bottom {
            flex-direction: column !important;
            gap: var(--space-md) !important;
          }
        }

        @media (max-width: 480px) {
          .footer-stats {
            flex-direction: column !important;
            gap: var(--space-md) !important;
          }
          
          .social-links {
            gap: var(--space-sm) !important;
          }
          
          .social-links a {
            width: 45px !important;
            height: 45px !important;
          }
        }
      `}</style>
    </footer>
  );
};

export default Footer;
