import React, { useState, useEffect } from 'react';

/**
 * Header component with navigation and responsive mobile menu
 * Features smooth scrolling and active section highlighting
 */
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [isScrolled, setIsScrolled] = useState(false);

  // Navigation items
  const navItems = [
    { id: 'hero', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'experience', label: 'Experience' },
    { id: 'contact', label: 'Contact' }
  ];

  // Handle scroll effects
  useEffect(() => {
    const handleScroll = () => {
      // Update header background on scroll
      setIsScrolled(window.scrollY > 50);

      // Update active section based on scroll position
      const sections = navItems.map(item => document.getElementById(item.id)).filter(Boolean);
      const scrollPosition = window.scrollY + 100;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && scrollPosition >= section.offsetTop) {
          setActiveSection(navItems[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Smooth scroll to section
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
    setIsMenuOpen(false);
  };

  return (
    <header 
      className={`header ${isScrolled ? 'header--scrolled' : ''}`}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        backgroundColor: isScrolled ? 'rgba(255, 255, 255, 0.95)' : 'rgba(255, 255, 255, 0.9)',
        backdropFilter: 'blur(10px)',
        borderBottom: isScrolled ? '1px solid var(--neutral-200)' : 'none',
        transition: 'all var(--transition-normal)',
        padding: '1rem 0'
      }}
    >
      <div className="container">
        <nav className="nav" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          {/* Logo */}
          <div 
            className="nav__logo"
            style={{
              fontSize: '1.5rem',
              fontWeight: '800',
              color: 'var(--primary-blue)',
              cursor: 'pointer'
            }}
            onClick={() => scrollToSection('hero')}
          >
            Soheil<span style={{ color: 'var(--accent-amber)' }}>.</span>
          </div>

          {/* Desktop Navigation */}
          <ul 
            className="nav__menu"
            style={{
              display: 'flex',
              listStyle: 'none',
              gap: '2rem',
              margin: 0,
              padding: 0
            }}
          >
            {navItems.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => scrollToSection(item.id)}
                  className={`nav__link ${activeSection === item.id ? 'nav__link--active' : ''}`}
                  style={{
                    background: 'none',
                    border: 'none',
                    color: activeSection === item.id ? 'var(--primary-blue)' : 'var(--text-primary)',
                    fontSize: '1rem',
                    fontWeight: activeSection === item.id ? '600' : '500',
                    cursor: 'pointer',
                    padding: '0.5rem 1rem',
                    borderRadius: 'var(--radius-md)',
                    transition: 'all var(--transition-fast)',
                    position: 'relative'
                  }}
                  onMouseEnter={(e) => {
                    if (activeSection !== item.id) {
                      e.target.style.color = 'var(--primary-blue)';
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (activeSection !== item.id) {
                      e.target.style.color = 'var(--text-primary)';
                    }
                  }}
                >
                  {item.label}
                  {activeSection === item.id && (
                    <span 
                      style={{
                        position: 'absolute',
                        bottom: '-2px',
                        left: '50%',
                        transform: 'translateX(-50%)',
                        width: '6px',
                        height: '6px',
                        backgroundColor: 'var(--primary-blue)',
                        borderRadius: '50%'
                      }}
                    />
                  )}
                </button>
              </li>
            ))}
          </ul>

          {/* Mobile Menu Toggle */}
          <button
            className="nav__toggle"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            style={{
              display: 'none',
              background: 'none',
              border: 'none',
              flexDirection: 'column',
              cursor: 'pointer',
              padding: '0.5rem',
              gap: '3px'
            }}
          >
            <span 
              style={{
                width: '25px',
                height: '3px',
                backgroundColor: 'var(--text-primary)',
                transition: 'all var(--transition-normal)',
                transform: isMenuOpen ? 'rotate(45deg) translate(5px, 5px)' : 'none'
              }}
            />
            <span 
              style={{
                width: '25px',
                height: '3px',
                backgroundColor: 'var(--text-primary)',
                transition: 'all var(--transition-normal)',
                opacity: isMenuOpen ? 0 : 1
              }}
            />
            <span 
              style={{
                width: '25px',
                height: '3px',
                backgroundColor: 'var(--text-primary)',
                transition: 'all var(--transition-normal)',
                transform: isMenuOpen ? 'rotate(-45deg) translate(7px, -6px)' : 'none'
              }}
            />
          </button>
        </nav>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div 
            className="nav__mobile"
            style={{
              position: 'absolute',
              top: '100%',
              left: 0,
              right: 0,
              backgroundColor: 'white',
              borderBottom: '1px solid var(--neutral-200)',
              padding: '1rem 0',
              boxShadow: 'var(--shadow-lg)'
            }}
          >
            <ul style={{ listStyle: 'none', margin: 0, padding: 0 }}>
              {navItems.map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => scrollToSection(item.id)}
                    style={{
                      width: '100%',
                      background: 'none',
                      border: 'none',
                      color: 'var(--text-primary)',
                      fontSize: '1.1rem',
                      fontWeight: '500',
                      cursor: 'pointer',
                      padding: '1rem 2rem',
                      textAlign: 'left',
                      transition: 'all var(--transition-fast)'
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.backgroundColor = 'var(--neutral-50)';
                      e.target.style.color = 'var(--primary-blue)';
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.backgroundColor = 'transparent';
                      e.target.style.color = 'var(--text-primary)';
                    }}
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      {/* Mobile Styles */}
      <style jsx>{`
        @media (max-width: 768px) {
          .nav__menu {
            display: none !important;
          }
          .nav__toggle {
            display: flex !important;
          }
        }
      `}</style>
    </header>
  );
};

export default Header;
