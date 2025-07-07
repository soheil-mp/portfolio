import React, { useState } from 'react';

/**
 * Contact Section Component
 * Clear call-to-action and multiple contact methods
 */
const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const contactMethods = [
    {
      id: 'email',
      icon: 'fas fa-envelope',
      title: 'Email',
      subtitle: 'Drop me a line',
      value: 'soheil.mpg@gmail.com',
      href: 'mailto:soheil.mpg@gmail.com',
      color: 'var(--primary-blue)',
      description: 'Best for detailed project discussions'
    },
    {
      id: 'linkedin',
      icon: 'fab fa-linkedin',
      title: 'LinkedIn',
      subtitle: 'Let\'s connect',
      value: '/in/soheilmp',
      href: 'https://linkedin.com/in/soheilmp',
      color: '#0077b5',
      description: 'Professional networking and opportunities'
    },
    {
      id: 'github',
      icon: 'fab fa-github',
      title: 'GitHub',
      subtitle: 'Check out my code',
      value: '/soheil-mp',
      href: 'https://github.com/soheil-mp',
      color: '#333',
      description: 'Explore my open-source projects'
    },
    {
      id: 'location',
      icon: 'fas fa-map-marker-alt',
      title: 'Location',
      subtitle: 'Based in',
      value: 'Roosendaal, Netherlands',
      href: null,
      color: 'var(--accent-emerald)',
      description: 'Available for remote & on-site work'
    }
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission (replace with actual form handling)
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus(null), 5000);
    }
  };

  const ContactMethodCard = ({ method }) => (
    <div 
      className="contact-method"
      style={{
        background: 'white',
        padding: 'var(--space-xl)',
        borderRadius: 'var(--radius-xl)',
        boxShadow: 'var(--shadow-md)',
        border: '1px solid var(--neutral-200)',
        transition: 'all var(--transition-normal)',
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden'
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
      {/* Background Pattern */}
      <div 
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '4px',
          background: method.color
        }}
      />

      {/* Icon */}
      <div 
        className="contact-icon"
        style={{
          width: '70px',
          height: '70px',
          borderRadius: '50%',
          background: `${method.color}15`,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          margin: '0 auto var(--space-lg) auto',
          border: `3px solid ${method.color}30`
        }}
      >
        <i 
          className={method.icon}
          style={{
            fontSize: '1.8rem',
            color: method.color
          }}
        ></i>
      </div>

      {/* Content */}
      <div className="contact-content">
        <h3 
          style={{
            fontSize: '1.3rem',
            fontWeight: '600',
            color: 'var(--text-primary)',
            marginBottom: 'var(--space-xs)'
          }}
        >
          {method.title}
        </h3>
        
        <p 
          style={{
            fontSize: '0.9rem',
            color: 'var(--text-secondary)',
            marginBottom: 'var(--space-md)'
          }}
        >
          {method.subtitle}
        </p>

        <div 
          style={{
            fontSize: '1rem',
            fontWeight: '600',
            color: method.color,
            marginBottom: 'var(--space-md)',
            fontFamily: method.id === 'email' ? 'var(--font-mono)' : 'inherit'
          }}
        >
          {method.value}
        </div>

        <p 
          style={{
            fontSize: '0.85rem',
            color: 'var(--text-secondary)',
            marginBottom: 'var(--space-lg)'
          }}
        >
          {method.description}
        </p>

        {/* Action Button */}
        {method.href && (
          <a 
            href={method.href}
            target={method.id !== 'email' ? '_blank' : undefined}
            rel={method.id !== 'email' ? 'noopener noreferrer' : undefined}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 'var(--space-sm)',
              padding: 'var(--space-sm) var(--space-lg)',
              background: method.color,
              color: 'white',
              textDecoration: 'none',
              borderRadius: 'var(--radius-md)',
              fontSize: '0.9rem',
              fontWeight: '500',
              transition: 'all var(--transition-fast)'
            }}
            onMouseEnter={(e) => {
              e.target.style.transform = 'translateY(-2px)';
              e.target.style.opacity = '0.9';
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = 'translateY(0)';
              e.target.style.opacity = '1';
            }}
          >
            <i className={method.icon}></i>
            {method.id === 'email' ? 'Send Email' : 
             method.id === 'linkedin' ? 'Connect' :
             method.id === 'github' ? 'View Profile' : 'Contact'}
          </a>
        )}
      </div>
    </div>
  );

  return (
    <section 
      id="contact" 
      className="section"
      style={{
        padding: 'var(--space-4xl) 0',
        backgroundColor: 'var(--bg-primary)',
        position: 'relative'
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
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23e5e7eb' fill-opacity='0.3'%3E%3Ccircle cx='7' cy='7' r='1'/%3E%3Ccircle cx='53' cy='7' r='1'/%3E%3Ccircle cx='7' cy='53' r='1'/%3E%3Ccircle cx='53' cy='53' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          opacity: 0.4
        }}
      />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
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
            Let's Work Together
          </h2>
          <p 
            style={{
              fontSize: '1.25rem',
              color: 'var(--text-secondary)',
              maxWidth: '700px',
              margin: '0 auto'
            }}
          >
            Ready to bring your AI/ML vision to life? Let's discuss how we can tackle your next challenge together.
          </p>
        </div>

        {/* Main Content */}
        <div 
          className="contact-content"
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: 'var(--space-4xl)',
            alignItems: 'start',
            maxWidth: '1000px',
            margin: '0 auto'
          }}
        >
          {/* Contact Form */}
          <div 
            className="contact-form-section"
            style={{
              background: 'white',
              padding: 'var(--space-2xl)',
              borderRadius: 'var(--radius-xl)',
              boxShadow: 'var(--shadow-lg)',
              border: '1px solid var(--neutral-200)'
            }}
          >
            <h3 
              style={{
                fontSize: '1.5rem',
                fontWeight: '600',
                color: 'var(--text-primary)',
                marginBottom: 'var(--space-lg)'
              }}
            >
              💬 Send me a message
            </h3>

            <form onSubmit={handleSubmit}>
              <div 
                className="form-group"
                style={{ marginBottom: 'var(--space-lg)' }}
              >
                <label 
                  htmlFor="name"
                  style={{
                    display: 'block',
                    fontSize: '0.9rem',
                    fontWeight: '500',
                    color: 'var(--text-primary)',
                    marginBottom: 'var(--space-sm)'
                  }}
                >
                  Your Name
                </label>
                <input 
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  style={{
                    width: '100%',
                    padding: 'var(--space-md)',
                    border: '2px solid var(--neutral-300)',
                    borderRadius: 'var(--radius-md)',
                    fontSize: '1rem',
                    transition: 'border-color var(--transition-fast)',
                    outline: 'none'
                  }}
                  onFocus={(e) => e.target.style.borderColor = 'var(--primary-blue)'}
                  onBlur={(e) => e.target.style.borderColor = 'var(--neutral-300)'}
                />
              </div>

              <div 
                className="form-group"
                style={{ marginBottom: 'var(--space-lg)' }}
              >
                <label 
                  htmlFor="email"
                  style={{
                    display: 'block',
                    fontSize: '0.9rem',
                    fontWeight: '500',
                    color: 'var(--text-primary)',
                    marginBottom: 'var(--space-sm)'
                  }}
                >
                  Email Address
                </label>
                <input 
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  style={{
                    width: '100%',
                    padding: 'var(--space-md)',
                    border: '2px solid var(--neutral-300)',
                    borderRadius: 'var(--radius-md)',
                    fontSize: '1rem',
                    transition: 'border-color var(--transition-fast)',
                    outline: 'none'
                  }}
                  onFocus={(e) => e.target.style.borderColor = 'var(--primary-blue)'}
                  onBlur={(e) => e.target.style.borderColor = 'var(--neutral-300)'}
                />
              </div>

              <div 
                className="form-group"
                style={{ marginBottom: 'var(--space-lg)' }}
              >
                <label 
                  htmlFor="subject"
                  style={{
                    display: 'block',
                    fontSize: '0.9rem',
                    fontWeight: '500',
                    color: 'var(--text-primary)',
                    marginBottom: 'var(--space-sm)'
                  }}
                >
                  Subject
                </label>
                <input 
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  placeholder="e.g., AI/ML Project Collaboration"
                  style={{
                    width: '100%',
                    padding: 'var(--space-md)',
                    border: '2px solid var(--neutral-300)',
                    borderRadius: 'var(--radius-md)',
                    fontSize: '1rem',
                    transition: 'border-color var(--transition-fast)',
                    outline: 'none'
                  }}
                  onFocus={(e) => e.target.style.borderColor = 'var(--primary-blue)'}
                  onBlur={(e) => e.target.style.borderColor = 'var(--neutral-300)'}
                />
              </div>

              <div 
                className="form-group"
                style={{ marginBottom: 'var(--space-xl)' }}
              >
                <label 
                  htmlFor="message"
                  style={{
                    display: 'block',
                    fontSize: '0.9rem',
                    fontWeight: '500',
                    color: 'var(--text-primary)',
                    marginBottom: 'var(--space-sm)'
                  }}
                >
                  Message
                </label>
                <textarea 
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows="5"
                  placeholder="Tell me about your project, timeline, and how I can help..."
                  style={{
                    width: '100%',
                    padding: 'var(--space-md)',
                    border: '2px solid var(--neutral-300)',
                    borderRadius: 'var(--radius-md)',
                    fontSize: '1rem',
                    transition: 'border-color var(--transition-fast)',
                    outline: 'none',
                    resize: 'vertical',
                    minHeight: '120px'
                  }}
                  onFocus={(e) => e.target.style.borderColor = 'var(--primary-blue)'}
                  onBlur={(e) => e.target.style.borderColor = 'var(--neutral-300)'}
                />
              </div>

              <button 
                type="submit"
                disabled={isSubmitting}
                style={{
                  width: '100%',
                  padding: 'var(--space-md)',
                  background: isSubmitting ? 'var(--neutral-400)' : 'linear-gradient(135deg, var(--primary-blue), var(--primary-blue-dark))',
                  color: 'white',
                  border: 'none',
                  borderRadius: 'var(--radius-md)',
                  fontSize: '1.1rem',
                  fontWeight: '600',
                  cursor: isSubmitting ? 'not-allowed' : 'pointer',
                  transition: 'all var(--transition-normal)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: 'var(--space-sm)'
                }}
                onMouseEnter={(e) => {
                  if (!isSubmitting) {
                    e.target.style.transform = 'translateY(-2px)';
                    e.target.style.boxShadow = 'var(--shadow-lg)';
                  }
                }}
                onMouseLeave={(e) => {
                  e.target.style.transform = 'translateY(0)';
                  e.target.style.boxShadow = 'none';
                }}
              >
                {isSubmitting ? (
                  <>
                    <i className="fas fa-spinner fa-spin"></i>
                    Sending...
                  </>
                ) : (
                  <>
                    <i className="fas fa-paper-plane"></i>
                    Send Message
                  </>
                )}
              </button>

              {/* Status Messages */}
              {submitStatus === 'success' && (
                <div 
                  style={{
                    marginTop: 'var(--space-md)',
                    padding: 'var(--space-md)',
                    background: 'var(--accent-emerald)15',
                    color: 'var(--accent-emerald)',
                    borderRadius: 'var(--radius-md)',
                    border: '1px solid var(--accent-emerald)30',
                    textAlign: 'center'
                  }}
                >
                  ✅ Message sent successfully! I'll get back to you soon.
                </div>
              )}

              {submitStatus === 'error' && (
                <div 
                  style={{
                    marginTop: 'var(--space-md)',
                    padding: 'var(--space-md)',
                    background: '#fee',
                    color: '#c00',
                    borderRadius: 'var(--radius-md)',
                    border: '1px solid #fcc',
                    textAlign: 'center'
                  }}
                >
                  ❌ Something went wrong. Please try again or contact me directly.
                </div>
              )}
            </form>
          </div>

          {/* Contact Methods */}
          <div className="contact-methods">
            <h3 
              style={{
                fontSize: '1.5rem',
                fontWeight: '600',
                color: 'var(--text-primary)',
                marginBottom: 'var(--space-xl)',
                textAlign: 'center'
              }}
            >
              🚀 Other Ways to Connect
            </h3>

            <div 
              className="contact-methods-grid"
              style={{
                display: 'grid',
                gap: 'var(--space-lg)'
              }}
            >
              {contactMethods.map((method) => (
                <ContactMethodCard key={method.id} method={method} />
              ))}
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div 
          className="cta-section"
          style={{
            marginTop: 'var(--space-4xl)',
            textAlign: 'center',
            padding: 'var(--space-2xl)',
            background: 'linear-gradient(135deg, var(--primary-blue), var(--accent-purple))',
            borderRadius: 'var(--radius-xl)',
            color: 'white',
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
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M20 20c0 0 0-8 0-8s8 0 8 0 0 8 0 8-8 0-8 0Z'/%3E%3C/g%3E%3C/svg%3E")`,
              opacity: 0.3
            }}
          />

          <div style={{ position: 'relative', zIndex: 1 }}>
            <h3 
              style={{
                fontSize: '1.8rem',
                fontWeight: '700',
                marginBottom: 'var(--space-md)'
              }}
            >
              Ready to Build Something Amazing?
            </h3>
            <p 
              style={{
                fontSize: '1.1rem',
                marginBottom: 'var(--space-lg)',
                opacity: 0.9,
                maxWidth: '600px',
                margin: '0 auto var(--space-lg) auto'
              }}
            >
              Whether you need a custom AI solution, data pipeline, or machine learning model, 
              I'm here to turn your vision into reality. Let's create something extraordinary together.
            </p>
            
            <div 
              style={{
                display: 'flex',
                gap: 'var(--space-md)',
                justifyContent: 'center',
                flexWrap: 'wrap'
              }}
            >
              <a 
                href="mailto:soheil.mpg@gmail.com"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 'var(--space-sm)',
                  padding: 'var(--space-md) var(--space-xl)',
                  background: 'white',
                  color: 'var(--primary-blue)',
                  textDecoration: 'none',
                  borderRadius: 'var(--radius-lg)',
                  fontSize: '1.1rem',
                  fontWeight: '600',
                  transition: 'all var(--transition-normal)'
                }}
                onMouseEnter={(e) => {
                  e.target.style.transform = 'translateY(-2px)';
                  e.target.style.boxShadow = 'var(--shadow-xl)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.transform = 'translateY(0)';
                  e.target.style.boxShadow = 'none';
                }}
              >
                <i className="fas fa-envelope"></i>
                Start a Project
              </a>

              <a 
                href="/resume.pdf"
                download
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 'var(--space-sm)',
                  padding: 'var(--space-md) var(--space-xl)',
                  background: 'transparent',
                  color: 'white',
                  textDecoration: 'none',
                  borderRadius: 'var(--radius-lg)',
                  fontSize: '1.1rem',
                  fontWeight: '600',
                  border: '2px solid white',
                  transition: 'all var(--transition-normal)'
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
                <i className="fas fa-download"></i>
                Download Resume
              </a>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 768px) {
          .contact-content {
            grid-template-columns: 1fr !important;
            gap: var(--space-2xl) !important;
          }
          
          .contact-form-section {
            padding: var(--space-lg) !important;
          }
          
          .cta-section div {
            flex-direction: column !important;
          }
        }

        @media (max-width: 480px) {
          .contact-form-section {
            padding: var(--space-md) !important;
          }
          
          .contact-methods-grid {
            gap: var(--space-md) !important;
          }
          
          .contact-method {
            padding: var(--space-lg) !important;
          }
        }
      `}</style>
    </section>
  );
};

export default Contact;
