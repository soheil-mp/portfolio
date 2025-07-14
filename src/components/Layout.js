import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Layout = ({ children }) => {
  const location = useLocation();

  const scrollToAbout = (e) => {
    e.preventDefault();
    const aboutSection = document.querySelector('.footer-combined');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="nav">
        <div className="container">
          <div className="nav-content">
            <Link to="/" className="nav-brand">
              Mind Over Machine
            </Link>
            <ul className="nav-links">
              <li>
                <Link 
                  to="/" 
                  className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}
                >
                  Home
                </Link>
              </li>
              <li>
                <a 
                  href="#about"
                  onClick={scrollToAbout}
                  className="nav-link"
                >
                  About Me
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main>
        {children}
      </main>

      {/* Combined Footer with About Me */}
      <footer className="footer-combined" id="about">
        <div className="container">
          {/* About Me Section */}
          <div className="about-me-content">
            <div className="about-me-profile">
              <div className="profile-image">
                <img src="/assets/images/investor_img.png" alt="Soheil Mohammadpour" />
              </div>
              <div className="profile-social">
                <a 
                  href="https://www.linkedin.com/in/soheil-mp/" 
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src="/assets/images/linkedin_logo.png" alt="LinkedIn" />
                </a>
                <a 
                  href="https://github.com/soheil-mp" 
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src="/assets/images/github_logo.png" alt="GitHub" />
                </a>
              </div>
            </div>
            <div className="about-me-text">
              <h1>SOHEIL MOHAMMADPOUR</h1>
              <h3>Senior Data Scientist</h3>
              <p>
                Solving puzzles that masquerade as data, turning complexity into clarity.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout; 