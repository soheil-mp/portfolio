import React, { useState, useEffect } from 'react';

/**
 * Certifications Section Component
 * Showcases professional certifications and achievements
 */
const Certifications = () => {
  const [visibleCerts, setVisibleCerts] = useState(new Set());
  const [activeFilter, setActiveFilter] = useState('all');

  const certificationCategories = [
    { id: 'all', label: 'All Certifications', icon: 'fas fa-certificate' },
    { id: 'ai-ml', label: 'AI & Machine Learning', icon: 'fas fa-brain' },
    { id: 'data', label: 'Data Engineering', icon: 'fas fa-database' },
    { id: 'cloud', label: 'Cloud & Infrastructure', icon: 'fas fa-cloud' },
    { id: 'specialization', label: 'Specializations', icon: 'fas fa-star' }
  ];

  const certifications = [
    // Recent & Featured Certifications
    {
      id: 1,
      title: 'Database Engineer Professional Certificate',
      provider: 'Meta',
      year: '2024',
      category: 'data',
      credentialUrl: 'https://coursera.org/share/1d4db1480bde9dbc903722258a0b910a',
      description: 'Comprehensive database design, optimization, and administration across multiple database systems.',
      featured: true,
      skills: ['PostgreSQL', 'MySQL', 'Database Design', 'Performance Tuning', 'SQL Optimization']
    },
    {
      id: 2,
      title: 'Introduction to Generative AI',
      provider: 'Google',
      year: '2024',
      category: 'ai-ml',
      credentialUrl: 'https://coursera.org/share/c83b06161241a5ba5b6e323fa779cb13',
      description: 'Latest developments in generative AI, large language models, and their applications.',
      featured: true,
      skills: ['Generative AI', 'LLMs', 'Prompt Engineering', 'AI Ethics', 'Model Architecture']
    },
    {
      id: 3,
      title: 'Deep Learning Specialization',
      provider: 'DeepLearning.AI',
      year: '2023',
      category: 'ai-ml',
      credentialUrl: 'https://coursera.org/verify/specialization/S3HPHUCFHX2G',
      description: '5-course specialization covering neural networks, CNNs, RNNs, and sequence models.',
      featured: true,
      skills: ['Neural Networks', 'CNN', 'RNN', 'Deep Learning', 'TensorFlow']
    },
    {
      id: 4,
      title: 'Machine Learning Specialization',
      provider: 'Stanford University',
      year: '2022',
      category: 'ai-ml',
      credentialUrl: 'https://coursera.org/share/cd0ea00e30ac083a2e5536fefa0ebfc4',
      description: 'Comprehensive machine learning foundations by Andrew Ng covering supervised and unsupervised learning.',
      featured: true,
      skills: ['Machine Learning', 'Supervised Learning', 'Unsupervised Learning', 'Neural Networks']
    },

    // Nanodegrees & Specialized Programs
    {
      id: 5,
      title: 'Artificial Intelligence Nanodegree',
      provider: 'Udacity',
      year: '2020',
      category: 'ai-ml',
      credentialUrl: 'https://www.udacity.com/certificate/3RN5THRE',
      description: 'Advanced AI concepts including search algorithms, game playing, and constraint satisfaction.',
      featured: false,
      skills: ['Search Algorithms', 'Game Playing', 'CSP', 'Logic', 'Planning']
    },
    {
      id: 6,
      title: 'AI in Trading Nanodegree',
      provider: 'Udacity',
      year: '2020',
      category: 'specialization',
      credentialUrl: 'https://www.udacity.com/certificate/e/407d8a12-7067-11ea-964e-dfdb7eeaf6f1',
      description: 'Application of AI and ML techniques to financial markets and algorithmic trading.',
      featured: false,
      skills: ['Algorithmic Trading', 'Financial ML', 'Risk Management', 'Alpha Research']
    },
    {
      id: 7,
      title: 'Robotics Nanodegree',
      provider: 'Udacity',
      year: '2020',
      category: 'specialization',
      credentialUrl: 'https://www.udacity.com/certificate/DFERED7P',
      description: 'Robotics foundations including kinematics, path planning, and control systems.',
      featured: false,
      skills: ['Robotics', 'Path Planning', 'SLAM', 'Control Systems', 'ROS']
    },
    {
      id: 8,
      title: 'Reinforcement Learning Nanodegree',
      provider: 'Udacity',
      year: '2020',
      category: 'ai-ml',
      credentialUrl: 'https://www.udacity.com/certificate/E7GALH2',
      description: 'Deep reinforcement learning algorithms and applications to real-world problems.',
      featured: false,
      skills: ['Q-Learning', 'Policy Gradient', 'Actor-Critic', 'Deep RL', 'Multi-Agent RL']
    },

    // Data Science Specializations
    {
      id: 9,
      title: 'IBM Data Science Specialization',
      provider: 'IBM',
      year: '2019',
      category: 'data',
      credentialUrl: 'https://www.coursera.org/account/accomplishments/professional-cert/ZB3TL8WUV5ZQ',
      description: '9-course professional certificate covering the full data science lifecycle.',
      featured: false,
      skills: ['Data Science', 'Python', 'SQL', 'Data Visualization', 'Machine Learning']
    },
    {
      id: 10,
      title: 'Natural Language Processing Nanodegree',
      provider: 'Udacity',
      year: '2018',
      category: 'ai-ml',
      credentialUrl: 'https://www.udacity.com/certificate/XTGAYHSL',
      description: 'Advanced NLP techniques including sentiment analysis, machine translation, and chatbots.',
      featured: false,
      skills: ['NLP', 'NLTK', 'spaCy', 'Transformers', 'Text Processing']
    },
    {
      id: 11,
      title: 'Computer Vision Nanodegree',
      provider: 'Udacity',
      year: '2018',
      category: 'ai-ml',
      credentialUrl: 'https://www.udacity.com/certificate/ETMG4GSV',
      description: 'Computer vision techniques using OpenCV and deep learning for image analysis.',
      featured: false,
      skills: ['Computer Vision', 'OpenCV', 'Image Processing', 'Object Detection', 'CNN']
    },
    {
      id: 12,
      title: 'Power BI Skill Track',
      provider: 'DataCamp',
      year: '2023',
      category: 'data',
      credentialUrl: 'https://www.datacamp.com/statement-of-accomplishment/track/023d8e897cce721abc2c17ffe829484e2ee40ef0',
      description: 'Comprehensive Power BI training for data visualization and business intelligence.',
      featured: false,
      skills: ['Power BI', 'DAX', 'Data Modeling', 'Business Intelligence', 'Data Visualization']
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const certId = parseInt(entry.target.dataset.certId);
            setTimeout(() => {
              setVisibleCerts(prev => new Set([...prev, certId]));
            }, Math.random() * 300);
          }
        });
      },
      {
        threshold: 0.3,
        rootMargin: '50px'
      }
    );

    const certElements = document.querySelectorAll('.cert-card');
    certElements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, [activeFilter]);

  const filteredCertifications = activeFilter === 'all' 
    ? certifications 
    : certifications.filter(cert => cert.category === activeFilter);

  const featuredCertifications = certifications.filter(cert => cert.featured);

  const CertificationCard = ({ cert, featured = false }) => {
    const isVisible = visibleCerts.has(cert.id);
    
    return (
      <div 
        className="cert-card"
        data-cert-id={cert.id}
        style={{
          background: 'white',
          borderRadius: 'var(--radius-xl)',
          padding: featured ? 'var(--space-xl)' : 'var(--space-lg)',
          boxShadow: featured ? 'var(--shadow-xl)' : 'var(--shadow-md)',
          border: featured ? '2px solid var(--accent-amber)' : '1px solid var(--neutral-200)',
          transition: 'all var(--transition-normal)',
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? 'translateY(0) scale(1)' : 'translateY(20px) scale(0.95)',
          position: 'relative',
          height: 'fit-content'
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = 'translateY(-4px) scale(1.02)';
          e.currentTarget.style.boxShadow = 'var(--shadow-2xl)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = 'translateY(0) scale(1)';
          e.currentTarget.style.boxShadow = featured ? 'var(--shadow-xl)' : 'var(--shadow-md)';
        }}
      >
        {/* Featured Badge */}
        {featured && (
          <div 
            className="featured-badge"
            style={{
              position: 'absolute',
              top: '-8px',
              right: 'var(--space-lg)',
              background: 'linear-gradient(135deg, var(--accent-amber), var(--accent-amber)dd)',
              color: 'white',
              padding: 'var(--space-xs) var(--space-md)',
              borderRadius: 'var(--radius-md)',
              fontSize: '0.8rem',
              fontWeight: '600'
            }}
          >
            ⭐ Featured
          </div>
        )}

        {/* Provider Logo/Icon */}
        <div 
          className="cert-provider"
          style={{
            display: 'flex',
            alignItems: 'center',
            marginBottom: 'var(--space-md)'
          }}
        >
          <div 
            className="provider-icon"
            style={{
              width: '50px',
              height: '50px',
              borderRadius: '50%',
              background: getProviderColor(cert.provider),
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginRight: 'var(--space-md)'
            }}
          >
            <i 
              className={getProviderIcon(cert.provider)}
              style={{
                color: 'white',
                fontSize: '1.3rem'
              }}
            ></i>
          </div>
          <div>
            <div 
              style={{
                fontWeight: '600',
                color: 'var(--text-primary)',
                fontSize: '0.9rem'
              }}
            >
              {cert.provider}
            </div>
            <div 
              style={{
                fontSize: '0.8rem',
                color: 'var(--text-secondary)'
              }}
            >
              {cert.year}
            </div>
          </div>
        </div>

        {/* Certification Title */}
        <h3 
          style={{
            fontSize: featured ? '1.3rem' : '1.1rem',
            fontWeight: '600',
            color: 'var(--text-primary)',
            marginBottom: 'var(--space-sm)',
            lineHeight: '1.3'
          }}
        >
          {cert.title}
        </h3>

        {/* Description */}
        <p 
          style={{
            color: 'var(--text-secondary)',
            fontSize: '0.95rem',
            lineHeight: '1.6',
            marginBottom: 'var(--space-md)'
          }}
        >
          {cert.description}
        </p>

        {/* Skills */}
        <div 
          className="cert-skills"
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: 'var(--space-xs)',
            marginBottom: 'var(--space-lg)'
          }}
        >
          {cert.skills.slice(0, featured ? 5 : 3).map((skill) => (
            <span 
              key={skill}
              style={{
                padding: 'var(--space-xs) var(--space-sm)',
                background: `${getProviderColor(cert.provider)}15`,
                color: getProviderColor(cert.provider),
                borderRadius: 'var(--radius-sm)',
                fontSize: '0.75rem',
                fontWeight: '500',
                border: `1px solid ${getProviderColor(cert.provider)}30`
              }}
            >
              {skill}
            </span>
          ))}
          {cert.skills.length > (featured ? 5 : 3) && (
            <span 
              style={{
                padding: 'var(--space-xs) var(--space-sm)',
                background: 'var(--neutral-100)',
                color: 'var(--text-secondary)',
                borderRadius: 'var(--radius-sm)',
                fontSize: '0.75rem',
                fontWeight: '500'
              }}
            >
              +{cert.skills.length - (featured ? 5 : 3)} more
            </span>
          )}
        </div>

        {/* Verify Button */}
        <a 
          href={cert.credentialUrl}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 'var(--space-sm)',
            padding: 'var(--space-sm) var(--space-md)',
            background: getProviderColor(cert.provider),
            color: 'white',
            textDecoration: 'none',
            borderRadius: 'var(--radius-md)',
            fontSize: '0.9rem',
            fontWeight: '500',
            transition: 'all var(--transition-fast)',
            width: '100%'
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
          <i className="fas fa-external-link-alt"></i>
          Verify Certificate
        </a>
      </div>
    );
  };

  const getProviderColor = (provider) => {
    const colors = {
      'Meta': '#1877f2',
      'Google': '#4285f4',
      'DeepLearning.AI': '#ff6b35',
      'Stanford University': '#8c1515',
      'Udacity': '#02b3e4',
      'IBM': '#054ada',
      'DataCamp': '#03ef62'
    };
    return colors[provider] || 'var(--primary-blue)';
  };

  const getProviderIcon = (provider) => {
    const icons = {
      'Meta': 'fab fa-meta',
      'Google': 'fab fa-google',
      'DeepLearning.AI': 'fas fa-brain',
      'Stanford University': 'fas fa-university',
      'Udacity': 'fas fa-graduation-cap',
      'IBM': 'fab fa-docker',
      'DataCamp': 'fas fa-chart-bar'
    };
    return icons[provider] || 'fas fa-certificate';
  };

  return (
    <section 
      id="certifications" 
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
            Certifications & Achievements
          </h2>
          <p 
            style={{
              fontSize: '1.25rem',
              color: 'var(--text-secondary)',
              maxWidth: '700px',
              margin: '0 auto'
            }}
          >
            20+ professional certifications from top institutions and industry leaders
          </p>
        </div>

        {/* Featured Certifications */}
        <div className="featured-section mb-2xl">
          <h3 
            style={{
              fontSize: '1.5rem',
              fontWeight: '600',
              color: 'var(--text-primary)',
              marginBottom: 'var(--space-xl)',
              textAlign: 'center'
            }}
          >
            🏆 Featured Certifications
          </h3>
          
          <div 
            className="featured-certs-grid"
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: 'var(--space-xl)',
              marginBottom: 'var(--space-4xl)'
            }}
          >
            {featuredCertifications.map((cert) => (
              <CertificationCard key={cert.id} cert={cert} featured={true} />
            ))}
          </div>
        </div>

        {/* Filter Buttons */}
        <div 
          className="cert-filters"
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: 'var(--space-sm)',
            justifyContent: 'center',
            marginBottom: 'var(--space-4xl)'
          }}
        >
          {certificationCategories.map((category) => (
            <button 
              key={category.id}
              onClick={() => setActiveFilter(category.id)}
              className={`filter-btn ${activeFilter === category.id ? 'active' : ''}`}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 'var(--space-sm)',
                padding: 'var(--space-md) var(--space-lg)',
                border: activeFilter === category.id ? '2px solid var(--primary-blue)' : '2px solid var(--neutral-300)',
                background: activeFilter === category.id ? 'var(--primary-blue)' : 'white',
                color: activeFilter === category.id ? 'white' : 'var(--text-primary)',
                borderRadius: 'var(--radius-lg)',
                fontSize: '0.9rem',
                fontWeight: '500',
                cursor: 'pointer',
                transition: 'all var(--transition-normal)'
              }}
              onMouseEnter={(e) => {
                if (activeFilter !== category.id) {
                  e.target.style.borderColor = 'var(--primary-blue)';
                  e.target.style.color = 'var(--primary-blue)';
                }
              }}
              onMouseLeave={(e) => {
                if (activeFilter !== category.id) {
                  e.target.style.borderColor = 'var(--neutral-300)';
                  e.target.style.color = 'var(--text-primary)';
                }
              }}
            >
              <i className={category.icon}></i>
              {category.label}
            </button>
          ))}
        </div>

        {/* All Certifications Grid */}
        <div 
          className="certifications-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: 'var(--space-lg)',
            alignItems: 'start'
          }}
        >
          {filteredCertifications.filter(cert => !cert.featured).map((cert) => (
            <CertificationCard key={cert.id} cert={cert} featured={false} />
          ))}
        </div>

        {/* Certification Summary */}
        <div 
          className="cert-summary"
          style={{
            marginTop: 'var(--space-4xl)',
            textAlign: 'center',
            padding: 'var(--space-2xl)',
            background: 'white',
            borderRadius: 'var(--radius-xl)',
            border: '1px solid var(--neutral-200)',
            boxShadow: 'var(--shadow-md)'
          }}
        >
          <h3 
            style={{
              fontSize: '1.5rem',
              fontWeight: '600',
              marginBottom: 'var(--space-md)',
              color: 'var(--text-primary)'
            }}
          >
            🎓 Continuous Learning Journey
          </h3>
          <p 
            style={{
              fontSize: '1.1rem',
              color: 'var(--text-secondary)',
              maxWidth: '800px',
              margin: '0 auto',
              lineHeight: '1.7'
            }}
          >
            From foundational machine learning to cutting-edge generative AI, my certification journey reflects 
            a commitment to staying at the forefront of technology. Each certification represents hands-on 
            projects, real-world applications, and deep technical understanding across the AI/ML spectrum.
          </p>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 768px) {
          .featured-certs-grid {
            grid-template-columns: 1fr !important;
          }
          
          .certifications-grid {
            grid-template-columns: 1fr !important;
          }
          
          .cert-filters {
            justify-content: flex-start !important;
            overflow-x: auto;
            padding-bottom: var(--space-sm);
          }
          
          .filter-btn {
            flex-shrink: 0;
          }
        }

        @media (max-width: 480px) {
          .cert-card {
            padding: var(--space-md) !important;
          }
          
          .cert-skills {
            gap: var(--space-xs) !important;
          }
          
          .cert-skills span {
            font-size: 0.7rem !important;
          }
        }
      `}</style>
    </section>
  );
};

export default Certifications;
