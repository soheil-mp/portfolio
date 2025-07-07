import React, { useState, useEffect, useRef } from 'react';

/**
 * Skills Section Component
 * Interactive visualization of technical expertise
 */
const Skills = () => {
  const [visibleSkills, setVisibleSkills] = useState(new Set());
  const sectionRef = useRef(null);

  const skillCategories = [
    {
      title: 'Programming Languages',
      icon: 'fas fa-code',
      color: 'var(--primary-blue)',
      skills: [
        { name: 'Python', level: 95, years: '6+' },
        { name: 'SQL', level: 90, years: '5+' },
        { name: 'R', level: 80, years: '4+' },
        { name: 'C++', level: 75, years: '3+' },
        { name: 'JavaScript', level: 70, years: '2+' },
        { name: 'Shell/Bash', level: 85, years: '4+' }
      ]
    },
    {
      title: 'Machine Learning & Deep Learning',
      icon: 'fas fa-brain',
      color: 'var(--accent-purple)',
      skills: [
        { name: 'TensorFlow', level: 90, years: '5+' },
        { name: 'PyTorch', level: 88, years: '4+' },
        { name: 'Scikit-learn', level: 95, years: '6+' },
        { name: 'Keras', level: 85, years: '4+' },
        { name: 'XGBoost', level: 90, years: '4+' },
        { name: 'Hugging Face', level: 92, years: '3+' }
      ]
    },
    {
      title: 'Data Engineering & Analytics',
      icon: 'fas fa-database',
      color: 'var(--accent-emerald)',
      skills: [
        { name: 'Apache Spark', level: 85, years: '3+' },
        { name: 'Apache Airflow', level: 80, years: '2+' },
        { name: 'Pandas/NumPy', level: 95, years: '6+' },
        { name: 'Databricks', level: 75, years: '2+' },
        { name: 'Docker', level: 80, years: '3+' },
        { name: 'Kubernetes', level: 70, years: '2+' }
      ]
    },
    {
      title: 'Generative AI & NLP',
      icon: 'fas fa-comments',
      color: 'var(--accent-amber)',
      skills: [
        { name: 'LangChain', level: 90, years: '2+' },
        { name: 'OpenAI APIs', level: 88, years: '2+' },
        { name: 'NLTK/SpaCy', level: 92, years: '5+' },
        { name: 'Transformers', level: 90, years: '3+' },
        { name: 'Vector Databases', level: 85, years: '2+' },
        { name: 'RAG Systems', level: 88, years: '2+' }
      ]
    },
    {
      title: 'Cloud & Visualization',
      icon: 'fas fa-cloud',
      color: 'var(--primary-blue-light)',
      skills: [
        { name: 'AWS', level: 80, years: '3+' },
        { name: 'Azure', level: 75, years: '2+' },
        { name: 'Tableau', level: 85, years: '4+' },
        { name: 'Power BI', level: 90, years: '3+' },
        { name: 'Streamlit', level: 85, years: '3+' },
        { name: 'Plotly/Dash', level: 88, years: '4+' }
      ]
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const categoryIndex = parseInt(entry.target.dataset.categoryIndex);
            const skillIndex = parseInt(entry.target.dataset.skillIndex);
            
            setTimeout(() => {
              setVisibleSkills(prev => new Set([...prev, `${categoryIndex}-${skillIndex}`]));
            }, skillIndex * 100);
          }
        });
      },
      {
        threshold: 0.3,
        rootMargin: '-50px'
      }
    );

    const skillElements = sectionRef.current?.querySelectorAll('.skill-item');
    skillElements?.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const SkillBar = ({ skill, categoryIndex, skillIndex, color }) => {
    const isVisible = visibleSkills.has(`${categoryIndex}-${skillIndex}`);
    
    return (
      <div 
        className="skill-item"
        data-category-index={categoryIndex}
        data-skill-index={skillIndex}
        style={{
          marginBottom: 'var(--space-lg)'
        }}
      >
        <div 
          className="skill-header"
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: 'var(--space-sm)'
          }}
        >
          <span 
            style={{
              fontWeight: '600',
              color: 'var(--text-primary)',
              fontSize: '0.95rem'
            }}
          >
            {skill.name}
          </span>
          <div 
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 'var(--space-sm)',
              fontSize: '0.85rem',
              color: 'var(--text-secondary)'
            }}
          >
            <span>{skill.years} years</span>
            <span style={{ color: color, fontWeight: '600' }}>
              {skill.level}%
            </span>
          </div>
        </div>
        
        <div 
          className="skill-bar-container"
          style={{
            width: '100%',
            height: '8px',
            backgroundColor: 'var(--neutral-200)',
            borderRadius: '4px',
            overflow: 'hidden',
            position: 'relative'
          }}
        >
          <div 
            className="skill-bar-fill"
            style={{
              height: '100%',
              backgroundColor: color,
              borderRadius: '4px',
              width: isVisible ? `${skill.level}%` : '0%',
              transition: 'width 1.5s cubic-bezier(0.4, 0, 0.2, 1)',
              position: 'relative',
              overflow: 'hidden'
            }}
          >
            {/* Shimmer effect */}
            <div 
              style={{
                position: 'absolute',
                top: 0,
                left: '-100%',
                width: '100%',
                height: '100%',
                background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent)',
                animation: isVisible ? 'shimmer 2s ease-in-out' : 'none'
              }}
            />
          </div>
        </div>
      </div>
    );
  };

  const SkillCategory = ({ category, index }) => (
    <div 
      className="skill-category"
      style={{
        background: 'white',
        padding: 'var(--space-xl)',
        borderRadius: 'var(--radius-xl)',
        boxShadow: 'var(--shadow-md)',
        border: '1px solid var(--neutral-200)',
        transition: 'all var(--transition-normal)',
        height: 'fit-content'
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
      <div 
        className="category-header"
        style={{
          display: 'flex',
          alignItems: 'center',
          marginBottom: 'var(--space-xl)'
        }}
      >
        <div 
          className="category-icon"
          style={{
            width: '50px',
            height: '50px',
            borderRadius: '50%',
            background: `linear-gradient(135deg, ${category.color}, ${category.color}dd)`,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginRight: 'var(--space-md)'
          }}
        >
          <i 
            className={category.icon}
            style={{
              color: 'white',
              fontSize: '1.3rem'
            }}
          ></i>
        </div>
        <h3 
          style={{
            fontSize: '1.25rem',
            fontWeight: '600',
            color: 'var(--text-primary)',
            margin: 0
          }}
        >
          {category.title}
        </h3>
      </div>

      <div className="skills-list">
        {category.skills.map((skill, skillIndex) => (
          <SkillBar 
            key={skill.name}
            skill={skill}
            categoryIndex={index}
            skillIndex={skillIndex}
            color={category.color}
          />
        ))}
      </div>
    </div>
  );

  return (
    <section 
      id="skills" 
      ref={sectionRef}
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
            Technical Expertise
          </h2>
          <p 
            style={{
              fontSize: '1.25rem',
              color: 'var(--text-secondary)',
              maxWidth: '700px',
              margin: '0 auto'
            }}
          >
            6+ years of hands-on experience with cutting-edge technologies across the entire AI/ML stack
          </p>
        </div>

        {/* Skills Overview Stats */}
        <div 
          className="skills-stats"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: 'var(--space-lg)',
            marginBottom: 'var(--space-4xl)',
            maxWidth: '800px',
            margin: '0 auto var(--space-4xl) auto'
          }}
        >
          <div 
            className="stat-card"
            style={{
              textAlign: 'center',
              padding: 'var(--space-lg)',
              background: 'linear-gradient(135deg, var(--primary-blue), var(--primary-blue-dark))',
              borderRadius: 'var(--radius-lg)',
              color: 'white',
              transform: 'translateY(0)',
              transition: 'transform var(--transition-normal)'
            }}
            onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-4px)'}
            onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
          >
            <div style={{ fontSize: '2.5rem', fontWeight: '700', marginBottom: 'var(--space-sm)' }}>30+</div>
            <div style={{ fontSize: '0.9rem', opacity: 0.9 }}>Technologies Mastered</div>
          </div>

          <div 
            className="stat-card"
            style={{
              textAlign: 'center',
              padding: 'var(--space-lg)',
              background: 'linear-gradient(135deg, var(--accent-purple), var(--accent-purple)dd)',
              borderRadius: 'var(--radius-lg)',
              color: 'white',
              transform: 'translateY(0)',
              transition: 'transform var(--transition-normal)'
            }}
            onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-4px)'}
            onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
          >
            <div style={{ fontSize: '2.5rem', fontWeight: '700', marginBottom: 'var(--space-sm)' }}>20+</div>
            <div style={{ fontSize: '0.9rem', opacity: 0.9 }}>Certifications Earned</div>
          </div>

          <div 
            className="stat-card"
            style={{
              textAlign: 'center',
              padding: 'var(--space-lg)',
              background: 'linear-gradient(135deg, var(--accent-amber), var(--accent-amber)dd)',
              borderRadius: 'var(--radius-lg)',
              color: 'white',
              transform: 'translateY(0)',
              transition: 'transform var(--transition-normal)'
            }}
            onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-4px)'}
            onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
          >
            <div style={{ fontSize: '2.5rem', fontWeight: '700', marginBottom: 'var(--space-sm)' }}>5</div>
            <div style={{ fontSize: '0.9rem', opacity: 0.9 }}>AI Domains Covered</div>
          </div>

          <div 
            className="stat-card"
            style={{
              textAlign: 'center',
              padding: 'var(--space-lg)',
              background: 'linear-gradient(135deg, var(--accent-emerald), var(--accent-emerald)dd)',
              borderRadius: 'var(--radius-lg)',
              color: 'white',
              transform: 'translateY(0)',
              transition: 'transform var(--transition-normal)'
            }}
            onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-4px)'}
            onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
          >
            <div style={{ fontSize: '2.5rem', fontWeight: '700', marginBottom: 'var(--space-sm)' }}>6+</div>
            <div style={{ fontSize: '0.9rem', opacity: 0.9 }}>Years Experience</div>
          </div>
        </div>

        {/* Skills Grid */}
        <div 
          className="skills-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
            gap: 'var(--space-xl)',
            alignItems: 'start'
          }}
        >
          {skillCategories.map((category, index) => (
            <SkillCategory 
              key={category.title}
              category={category}
              index={index}
            />
          ))}
        </div>

        {/* Additional Skills Summary */}
        <div 
          className="additional-skills"
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
              marginBottom: 'var(--space-lg)',
              color: 'var(--text-primary)'
            }}
          >
            Also Experienced With
          </h3>
          
          <div 
            className="additional-skills-list"
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: 'var(--space-sm)',
              justifyContent: 'center',
              maxWidth: '800px',
              margin: '0 auto'
            }}
          >
            {[
              'Git/GitHub', 'MLflow', 'Apache Kafka', 'Redis', 'MongoDB', 'Snowflake',
              'Jupyter', 'Google Colab', 'VSCode', 'PyCharm', 'Linux/Unix',
              'OpenCV', 'FAISS', 'ChromaDB', 'Pinecone', 'Gradio', 'FastAPI'
            ].map((skill) => (
              <span 
                key={skill}
                className="additional-skill-tag"
                style={{
                  padding: 'var(--space-sm) var(--space-md)',
                  background: 'white',
                  borderRadius: 'var(--radius-md)',
                  border: '1px solid var(--neutral-300)',
                  fontSize: '0.9rem',
                  color: 'var(--text-primary)',
                  transition: 'all var(--transition-fast)',
                  cursor: 'default'
                }}
                onMouseEnter={(e) => {
                  e.target.style.background = 'var(--primary-blue)';
                  e.target.style.color = 'white';
                  e.target.style.borderColor = 'var(--primary-blue)';
                  e.target.style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.background = 'white';
                  e.target.style.color = 'var(--text-primary)';
                  e.target.style.borderColor = 'var(--neutral-300)';
                  e.target.style.transform = 'translateY(0)';
                }}
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes shimmer {
          0% { left: -100%; }
          100% { left: 100%; }
        }

        @media (max-width: 768px) {
          .skills-grid {
            grid-template-columns: 1fr !important;
          }
          
          .skills-stats {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }

        @media (max-width: 480px) {
          .skills-stats {
            grid-template-columns: 1fr !important;
          }
          
          .additional-skills-list {
            gap: var(--space-xs) !important;
          }
          
          .additional-skill-tag {
            font-size: 0.8rem !important;
            padding: var(--space-xs) var(--space-sm) !important;
          }
        }
      `}</style>
    </section>
  );
};

export default Skills;
