import React from 'react';
import { NavLink } from 'react-router-dom';

/**
 * TabNavigation Component
 * Provides tab-based navigation between different portfolio sections
 * Features modern tab design with active states and smooth transitions
 */
const TabNavigation = () => {
  const navigationTabs = [
    { 
      id: 'home', 
      path: '/', 
      label: 'Home', 
      icon: 'fas fa-home',
      description: 'Hero & Introduction'
    },
    { 
      id: 'about', 
      path: '/about', 
      label: 'About', 
      icon: 'fas fa-user',
      description: 'Personal Story'
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
      description: 'Professional Timeline'
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

  return (
    <nav 
      className="tab-navigation"
      style={{
        position: 'sticky',
        top: '80px',
        zIndex: 100,
        background: 'rgba(255, 255, 255, 0.95)',
        backdropFilter: 'blur(10px)',
        borderBottom: '1px solid var(--neutral-200)',
        padding: 'var(--space-md) 0',
        marginBottom: 'var(--space-lg)'
      }}
    >
      <div className="container">
        <div 
          className="tabs-container"
          style={{
            display: 'flex',
            gap: 'var(--space-xs)',
            overflowX: 'auto',
            padding: 'var(--space-sm) 0',
            scrollbarWidth: 'none',
            msOverflowStyle: 'none'
          }}
        >
          {navigationTabs.map((tab) => (
            <NavLink
              key={tab.id}
              to={tab.path}
              className={({ isActive }) => 
                `tab-item ${isActive ? 'tab-item--active' : ''}`
              }
              style={({ isActive }) => ({
                display: 'flex',
                alignItems: 'center',
                gap: 'var(--space-sm)',
                padding: 'var(--space-md) var(--space-lg)',
                borderRadius: 'var(--radius-lg)',
                textDecoration: 'none',
                fontSize: '0.95rem',
                fontWeight: '500',
                transition: 'all var(--transition-normal)',
                background: isActive 
                  ? 'linear-gradient(135deg, var(--primary-blue), var(--primary-blue-dark))'
                  : 'transparent',
                color: isActive ? 'white' : 'var(--text-primary)',
                border: isActive 
                  ? '2px solid var(--primary-blue)'
                  : '2px solid var(--neutral-200)',
                minWidth: 'max-content',
                transform: isActive ? 'translateY(-2px)' : 'translateY(0)',
                boxShadow: isActive ? 'var(--shadow-lg)' : 'var(--shadow-sm)'
              })}
              onMouseEnter={(e) => {
                if (!e.currentTarget.classList.contains('tab-item--active')) {
                  e.currentTarget.style.borderColor = 'var(--primary-blue)';
                  e.currentTarget.style.color = 'var(--primary-blue)';
                  e.currentTarget.style.transform = 'translateY(-1px)';
                  e.currentTarget.style.boxShadow = 'var(--shadow-md)';
                }
              }}
              onMouseLeave={(e) => {
                if (!e.currentTarget.classList.contains('tab-item--active')) {
                  e.currentTarget.style.borderColor = 'var(--neutral-200)';
                  e.currentTarget.style.color = 'var(--text-primary)';
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = 'var(--shadow-sm)';
                }
              }}
            >
              <i className={tab.icon}></i>
              <div 
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'flex-start'
                }}
              >
                <span style={{ fontWeight: '600' }}>{tab.label}</span>
                <span 
                  style={{
                    fontSize: '0.75rem',
                    opacity: 0.8,
                    fontWeight: '400'
                  }}
                >
                  {tab.description}
                </span>
              </div>
            </NavLink>
          ))}
        </div>
      </div>

      <style jsx>{`
        .tabs-container::-webkit-scrollbar {
          display: none;
        }

        @media (max-width: 768px) {
          .tabs-container {
            justify-content: flex-start !important;
            padding-bottom: var(--space-md) !important;
          }
          
          .tab-item {
            flex-shrink: 0;
            padding: var(--space-sm) var(--space-md) !important;
          }
          
          .tab-item div {
            flex-direction: row !important;
            gap: var(--space-xs) !important;
          }
          
          .tab-item span:last-child {
            display: none !important;
          }
        }

        @media (max-width: 480px) {
          .tab-item {
            padding: var(--space-sm) !important;
          }
          
          .tab-item span:first-child {
            display: none !important;
          }
        }
      `}</style>
    </nav>
  );
};

export default TabNavigation;
