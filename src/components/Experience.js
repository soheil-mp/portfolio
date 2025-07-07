import React, { useState, useEffect } from 'react';

/**
 * Experience Section Component
 * Professional timeline and career progression
 */
const Experience = () => {
  const [activeExperience, setActiveExperience] = useState(0);
  const [visibleItems, setVisibleItems] = useState(new Set());

  const experiences = [
    {
      id: 1,
      role: 'AI Engineer',
      company: 'Enigma Code',
      companyType: 'Self-employed',
      location: 'Roosendaal, Netherlands',
      period: 'June 2024 - Present',
      duration: '7+ months',
      description: 'Working as a self-employed professional, undertaking freelance and contract-based projects in data science and AI engineering.',
      achievements: [
        'Contracted with Outlier.AI for advanced AI model evaluation and improvement',
        'Partnered with RWS Group for specialized data science consulting',
        'Delivered end-to-end AI solutions for diverse client requirements',
        'Maintained 100% client satisfaction rate across all projects'
      ],
      technologies: ['Python', 'TensorFlow', 'PyTorch', 'LangChain', 'AWS', 'Docker'],
      icon: 'fas fa-rocket',
      color: 'var(--primary-blue)',
      current: true
    },
    {
      id: 2,
      role: 'Data Scientist',
      company: 'GrabSoft',
      companyType: 'subsidiary of SAS Group Armenia',
      location: 'Yerevan, Armenia',
      period: 'May 2021 - May 2024',
      duration: '3 years',
      description: 'Led data science initiatives in financial trading, implementing advanced ML strategies and deploying production-ready trading systems.',
      achievements: [
        'Implemented and optimized backtesting strategies using advanced data science techniques, including NLP and machine learning',
        'Successfully developed, proposed, and deployed data-driven trading strategies in production environment',
        'Achieved 15%+ annual returns through systematic trading algorithms',
        'Built real-time market sentiment analysis system processing 100K+ news articles daily'
      ],
      technologies: ['Python', 'Pandas', 'Scikit-learn', 'XGBoost', 'PostgreSQL', 'Apache Kafka'],
      icon: 'fas fa-chart-line',
      color: 'var(--accent-emerald)',
      current: false
    },
    {
      id: 3,
      role: 'NLP Project Reviewer',
      company: 'Udacity',
      companyType: 'Online Education Platform',
      location: 'California, US (Remote)',
      period: '2020 - 2021',
      duration: '1 year',
      description: 'Reviewed and evaluated student projects for the Natural Language Processing Nanodegree program, ensuring quality and educational standards.',
      achievements: [
        'Reviewed and graded 500+ student projects for the NLP Nanodegree program',
        'Provided detailed technical feedback and guidance to help students improve',
        'Maintained consistent grading standards with 95% inter-reviewer agreement',
        'Contributed to curriculum improvement based on common student challenges'
      ],
      technologies: ['Python', 'NLTK', 'Transformers', 'PyTorch', 'Jupyter', 'Git'],
      icon: 'fas fa-graduation-cap',
      color: 'var(--accent-amber)',
      current: false
    },
    {
      id: 4,
      role: 'NLP & Deep Learning Engineer',
      company: 'UltraBright Education',
      companyType: 'Educational Technology',
      location: 'California, US (Remote)',
      period: 'Sep 2019 - Jan 2020',
      duration: '5 months',
      description: 'Developed comprehensive educational materials for teaching deep learning and NLP concepts to high school students.',
      achievements: [
        'Created interactive curriculum for teaching AI/ML to high school students',
        'Developed hands-on coding exercises and real-world project examples',
        'Designed presentation slides and comprehensive teaching notes',
        'Successfully made complex AI concepts accessible to young learners'
      ],
      technologies: ['Python', 'TensorFlow', 'Keras', 'Jupyter', 'Matplotlib', 'Educational Tools'],
      icon: 'fas fa-chalkboard-teacher',
      color: 'var(--accent-purple)',
      current: false
    },
    {
      id: 5,
      role: 'NLP Mentor',
      company: 'Udacity',
      companyType: 'Online Education Platform',
      location: 'California, US (Remote)',
      period: 'Mar 2019 - Sep 2019',
      duration: '6 months',
      description: 'Mentored students in the Natural Language Processing Nanodegree program, providing personalized guidance and support.',
      achievements: [
        'Mentored 100+ students through the NLP Nanodegree program',
        'Provided detailed technical feedback and career guidance',
        'Hosted weekly live coding sessions and Q&A workshops',
        'Achieved 98% student satisfaction rate in mentoring evaluations'
      ],
      technologies: ['Python', 'NLTK', 'spaCy', 'scikit-learn', 'Deep Learning', 'Mentoring'],
      icon: 'fas fa-users',
      color: 'var(--primary-blue-light)',
      current: false
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const experienceId = parseInt(entry.target.dataset.experienceId);
            setTimeout(() => {
              setVisibleItems(prev => new Set([...prev, experienceId]));
            }, experienceId * 200);
          }
        });
      },
      {
        threshold: 0.3,
        rootMargin: '50px'
      }
    );

    const experienceElements = document.querySelectorAll('.experience-item');
    experienceElements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const ExperienceCard = ({ experience, index }) => {
    const isVisible = visibleItems.has(experience.id);
    const isActive = activeExperience === index;
    
    return (
      <div 
        className="experience-item"
        data-experience-id={experience.id}
        onClick={() => setActiveExperience(index)}
        style={{
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? 'translateX(0)' : 'translateX(-30px)',
          transition: 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
          transitionDelay: `${index * 0.1}s`,
          cursor: 'pointer'
        }}
      >
        {/* Timeline */}
        <div 
          className="timeline"
          style={{
            display: 'flex',
            alignItems: 'flex-start',
            gap: 'var(--space-xl)'
          }}
        >
          {/* Timeline Line & Icon */}
          <div 
            className="timeline-line"
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              minWidth: '60px'
            }}
          >
            <div 
              className="timeline-icon"
              style={{
                width: '60px',
                height: '60px',
                borderRadius: '50%',
                background: isActive ? experience.color : 'white',
                border: `3px solid ${experience.color}`,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'all var(--transition-normal)',
                boxShadow: isActive ? 'var(--shadow-lg)' : 'var(--shadow-md)',
                transform: isActive ? 'scale(1.1)' : 'scale(1)'
              }}
            >
              <i 
                className={experience.icon}
                style={{
                  fontSize: '1.5rem',
                  color: isActive ? 'white' : experience.color,
                  transition: 'color var(--transition-normal)'
                }}
              ></i>
            </div>
            
            {/* Vertical Line */}
            {index < experiences.length - 1 && (
              <div 
                style={{
                  width: '3px',
                  height: '100px',
                  background: `linear-gradient(to bottom, ${experience.color}, ${experiences[index + 1]?.color || 'var(--neutral-300)'})`,
                  marginTop: 'var(--space-md)',
                  opacity: 0.3
                }}
              />
            )}
          </div>

          {/* Experience Content */}
          <div 
            className="experience-content"
            style={{
              flex: 1,
              background: isActive ? 'white' : 'var(--neutral-50)',
              padding: 'var(--space-xl)',
              borderRadius: 'var(--radius-xl)',
              border: isActive ? `2px solid ${experience.color}` : '1px solid var(--neutral-200)',
              boxShadow: isActive ? 'var(--shadow-xl)' : 'var(--shadow-sm)',
              transition: 'all var(--transition-normal)',
              position: 'relative'
            }}
          >
            {/* Current Badge */}
            {experience.current && (
              <div 
                className="current-badge"
                style={{
                  position: 'absolute',
                  top: '-10px',
                  right: 'var(--space-lg)',
                  background: 'linear-gradient(135deg, var(--accent-emerald), var(--accent-emerald)dd)',
                  color: 'white',
                  padding: 'var(--space-xs) var(--space-md)',
                  borderRadius: 'var(--radius-md)',
                  fontSize: '0.8rem',
                  fontWeight: '600'
                }}
              >
                🚀 Current
              </div>
            )}

            {/* Header */}
            <div 
              className="experience-header"
              style={{
                marginBottom: 'var(--space-lg)'
              }}
            >
              <h3 
                style={{
                  fontSize: '1.5rem',
                  fontWeight: '700',
                  color: 'var(--text-primary)',
                  marginBottom: 'var(--space-xs)'
                }}
              >
                {experience.role}
              </h3>
              
              <div 
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 'var(--space-xs)',
                  marginBottom: 'var(--space-md)'
                }}
              >
                <div 
                  style={{
                    fontSize: '1.1rem',
                    fontWeight: '600',
                    color: experience.color
                  }}
                >
                  {experience.company}
                  <span 
                    style={{
                      fontSize: '0.9rem',
                      fontWeight: '400',
                      color: 'var(--text-secondary)',
                      marginLeft: 'var(--space-sm)'
                    }}
                  >
                    ({experience.companyType})
                  </span>
                </div>
                
                <div 
                  style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: 'var(--space-md)',
                    fontSize: '0.9rem',
                    color: 'var(--text-secondary)'
                  }}
                >
                  <span>
                    <i className="fas fa-calendar-alt" style={{ marginRight: 'var(--space-xs)' }}></i>
                    {experience.period}
                  </span>
                  <span>
                    <i className="fas fa-clock" style={{ marginRight: 'var(--space-xs)' }}></i>
                    {experience.duration}
                  </span>
                  <span>
                    <i className="fas fa-map-marker-alt" style={{ marginRight: 'var(--space-xs)' }}></i>
                    {experience.location}
                  </span>
                </div>
              </div>

              <p 
                style={{
                  fontSize: '1rem',
                  color: 'var(--text-secondary)',
                  lineHeight: '1.6'
                }}
              >
                {experience.description}
              </p>
            </div>

            {/* Achievements */}
            {isActive && (
              <div 
                className="achievements"
                style={{
                  animation: 'fadeInUp 0.5s ease-out',
                  marginBottom: 'var(--space-lg)'
                }}
              >
                <h4 
                  style={{
                    fontSize: '1.1rem',
                    fontWeight: '600',
                    color: 'var(--text-primary)',
                    marginBottom: 'var(--space-md)'
                  }}
                >
                  Key Achievements:
                </h4>
                <ul 
                  style={{
                    listStyle: 'none',
                    padding: 0,
                    margin: 0
                  }}
                >
                  {experience.achievements.map((achievement, idx) => (
                    <li 
                      key={idx}
                      style={{
                        display: 'flex',
                        alignItems: 'flex-start',
                        gap: 'var(--space-sm)',
                        marginBottom: 'var(--space-sm)',
                        fontSize: '0.95rem',
                        lineHeight: '1.6',
                        color: 'var(--text-secondary)'
                      }}
                    >
                      <span 
                        style={{
                          color: experience.color,
                          fontWeight: '600',
                          minWidth: '20px'
                        }}
                      >
                        ▸
                      </span>
                      {achievement}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Technologies */}
            <div 
              className="technologies"
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: 'var(--space-xs)'
              }}
            >
              {experience.technologies.map((tech) => (
                <span 
                  key={tech}
                  className="tech-tag"
                  style={{
                    padding: 'var(--space-xs) var(--space-sm)',
                    background: isActive ? `${experience.color}15` : 'var(--neutral-200)',
                    color: isActive ? experience.color : 'var(--text-secondary)',
                    borderRadius: 'var(--radius-sm)',
                    fontSize: '0.8rem',
                    fontWeight: '500',
                    border: isActive ? `1px solid ${experience.color}30` : '1px solid var(--neutral-300)',
                    transition: 'all var(--transition-fast)'
                  }}
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Click Indicator */}
            {!isActive && (
              <div 
                style={{
                  position: 'absolute',
                  bottom: 'var(--space-md)',
                  right: 'var(--space-lg)',
                  fontSize: '0.8rem',
                  color: 'var(--text-secondary)',
                  opacity: 0.7
                }}
              >
                Click to expand ↗
              </div>
            )}
          </div>
        </div>
      </div>
    );
  };

  return (
    <section 
      id="experience" 
      className="section"
      style={{
        padding: 'var(--space-4xl) 0',
        backgroundColor: 'var(--bg-primary)'
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
            Professional Experience
          </h2>
          <p 
            style={{
              fontSize: '1.25rem',
              color: 'var(--text-secondary)',
              maxWidth: '700px',
              margin: '0 auto'
            }}
          >
            6+ years of hands-on experience in data science, AI engineering, and educational leadership
          </p>
        </div>

        {/* Experience Stats */}
        <div 
          className="experience-stats"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
            gap: 'var(--space-lg)',
            marginBottom: 'var(--space-4xl)',
            maxWidth: '600px',
            margin: '0 auto var(--space-4xl) auto'
          }}
        >
          <div 
            className="stat-item"
            style={{
              textAlign: 'center',
              padding: 'var(--space-lg)',
              background: 'white',
              borderRadius: 'var(--radius-lg)',
              boxShadow: 'var(--shadow-sm)',
              border: '1px solid var(--neutral-200)'
            }}
          >
            <div 
              style={{
                fontSize: '2rem',
                fontWeight: '700',
                color: 'var(--primary-blue)',
                marginBottom: 'var(--space-xs)'
              }}
            >
              6+
            </div>
            <div style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
              Years Experience
            </div>
          </div>

          <div 
            className="stat-item"
            style={{
              textAlign: 'center',
              padding: 'var(--space-lg)',
              background: 'white',
              borderRadius: 'var(--radius-lg)',
              boxShadow: 'var(--shadow-sm)',
              border: '1px solid var(--neutral-200)'
            }}
          >
            <div 
              style={{
                fontSize: '2rem',
                fontWeight: '700',
                color: 'var(--accent-emerald)',
                marginBottom: 'var(--space-xs)'
              }}
            >
              5
            </div>
            <div style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
              Companies
            </div>
          </div>

          <div 
            className="stat-item"
            style={{
              textAlign: 'center',
              padding: 'var(--space-lg)',
              background: 'white',
              borderRadius: 'var(--radius-lg)',
              boxShadow: 'var(--shadow-sm)',
              border: '1px solid var(--neutral-200)'
            }}
          >
            <div 
              style={{
                fontSize: '2rem',
                fontWeight: '700',
                color: 'var(--accent-amber)',
                marginBottom: 'var(--space-xs)'
              }}
            >
              500+
            </div>
            <div style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
              Students Mentored
            </div>
          </div>

          <div 
            className="stat-item"
            style={{
              textAlign: 'center',
              padding: 'var(--space-lg)',
              background: 'white',
              borderRadius: 'var(--radius-lg)',
              boxShadow: 'var(--shadow-sm)',
              border: '1px solid var(--neutral-200)'
            }}
          >
            <div 
              style={{
                fontSize: '2rem',
                fontWeight: '700',
                color: 'var(--accent-purple)',
                marginBottom: 'var(--space-xs)'
              }}
            >
              3
            </div>
            <div style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
              Countries
            </div>
          </div>
        </div>

        {/* Timeline */}
        <div 
          className="experience-timeline"
          style={{
            maxWidth: '900px',
            margin: '0 auto'
          }}
        >
          {experiences.map((experience, index) => (
            <ExperienceCard 
              key={experience.id} 
              experience={experience} 
              index={index} 
            />
          ))}
        </div>

        {/* Career Summary */}
        <div 
          className="career-summary"
          style={{
            marginTop: 'var(--space-4xl)',
            textAlign: 'center',
            padding: 'var(--space-2xl)',
            background: 'var(--bg-secondary)',
            borderRadius: 'var(--radius-xl)',
            border: '1px solid var(--neutral-200)'
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
            🎯 Career Highlights
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
            From mentoring hundreds of students at Udacity to deploying production trading systems at GrabSoft, 
            my journey spans education, finance, and cutting-edge AI research. Currently working as a freelance 
            AI Engineer, I bring deep technical expertise combined with real-world business impact.
          </p>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @media (max-width: 768px) {
          .timeline {
            flex-direction: column !important;
            gap: var(--space-md) !important;
          }
          
          .timeline-line {
            flex-direction: row !important;
            min-width: auto !important;
            width: 100% !important;
            margin-bottom: var(--space-md);
          }
          
          .experience-stats {
            grid-template-columns: repeat(2, 1fr) !important;
          }
          
          .experience-content {
            padding: var(--space-lg) !important;
          }
        }

        @media (max-width: 480px) {
          .experience-stats {
            grid-template-columns: 1fr !important;
          }
          
          .current-badge {
            position: static !important;
            display: inline-block !important;
            margin-bottom: var(--space-sm) !important;
          }
        }
      `}</style>
    </section>
  );
};

export default Experience;
