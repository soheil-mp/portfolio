import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

/**
 * Projects Section Component
 * Showcases portfolio projects with filtering and interactive cards
 */
const Projects = () => {
  const navigate = useNavigate();
  const [activeFilter, setActiveFilter] = useState('all');
  const [visibleProjects, setVisibleProjects] = useState(new Set());

  const projectCategories = [
    { id: 'all', label: 'All Projects', icon: 'fas fa-th' },
    { id: 'reinforcement-learning', label: 'RL & Robotics', icon: 'fas fa-robot' },
    { id: 'generative-ai', label: 'Generative AI', icon: 'fas fa-magic' },
    { id: 'computer-vision', label: 'Computer Vision', icon: 'fas fa-eye' },
    { id: 'data-engineering', label: 'Data Engineering', icon: 'fas fa-database' },
    { id: 'nlp', label: 'NLP & Audio', icon: 'fas fa-comments' }
  ];

  const projects = [
    // Reinforcement Learning & Robotics
    {
      id: 1,
      title: 'Automated Plant Inoculation',
      category: 'reinforcement-learning',
      description: 'Automated system combining root image analysis and robotic precision for targeted plant inoculation, revolutionizing agricultural processes.',
      technologies: ['Python', 'OpenCV', 'TensorFlow', 'Robotics', 'Computer Vision', 'IoT'],
      githubUrl: 'https://github.com/soheil-mp/Plant-Inoculation-AI',
      demoUrl: null,
      image: '/assets/plant_inoculation.jpg',
      featured: true,
      impact: 'Automated agricultural process with 95% accuracy'
    },
    {
      id: 2,
      title: 'Auto Pilot Gaming',
      category: 'reinforcement-learning',
      description: 'A deep reinforcement learning framework for training AI agents in classic control and Atari environments using state-of-the-art algorithms.',
      technologies: ['Python', 'PyTorch', 'OpenAI Gym', 'DQN', 'PPO', 'A3C'],
      githubUrl: 'https://github.com/soheil-mp/Auto-Pilot-Gaming',
      demoUrl: null,
      image: '/assets/autopilot_gaming.jpg',
      featured: false,
      impact: 'Achieved superhuman performance in multiple games'
    },
    {
      id: 3,
      title: 'Sky Pilot',
      category: 'reinforcement-learning',
      description: 'An autonomous drone navigation system combining classical approaches with cutting-edge reinforcement learning for real-world flight scenarios.',
      technologies: ['Python', 'ROS', 'Gazebo', 'SLAM', 'Deep RL', 'Computer Vision'],
      githubUrl: 'https://github.com/soheil-mp/SkyPilot',
      demoUrl: null,
      image: '/assets/skypilot.jpg',
      featured: false,
      impact: 'Safe autonomous navigation in complex environments'
    },

    // Generative AI
    {
      id: 4,
      title: 'Game Asset Lab',
      category: 'generative-ai',
      description: 'AI-powered game asset generation studio that transforms creative prompts into professional, production-ready game assets using advanced Stable Diffusion techniques.',
      technologies: ['Python', 'Stable Diffusion', 'CLIP', 'FastAPI', 'React', 'Docker'],
      githubUrl: 'https://github.com/soheil-mp/GameAssetLab',
      demoUrl: null,
      image: '/assets/game_asset_lab.jpg',
      featured: true,
      impact: 'Generated 1000+ high-quality game assets'
    },
    {
      id: 5,
      title: 'AI Therapist Assistant',
      category: 'generative-ai',
      description: 'Fine-tuned Llama-3.2 1B offering mental health conversations through a secure, local-first approach for privacy-focused therapeutic support.',
      technologies: ['Python', 'Llama', 'Fine-tuning', 'Gradio', 'Transformers', 'PEFT'],
      githubUrl: 'https://github.com/soheil-mp/AI-Therapist-Assistant',
      demoUrl: null,
      image: '/assets/ai_therapist.jpg',
      featured: true,
      impact: 'Providing accessible mental health support'
    },
    {
      id: 6,
      title: 'Doc Chat',
      category: 'generative-ai',
      description: 'Intelligent document Q&A interface powered by Retrieval-Augmented Generation (RAG), transforming static documents into dynamic, interactive knowledge bases.',
      technologies: ['Python', 'LangChain', 'ChromaDB', 'Streamlit', 'OpenAI', 'FAISS'],
      githubUrl: 'https://github.com/soheil-mp/DocChat',
      demoUrl: null,
      image: '/assets/doc_chat.jpg',
      featured: false,
      impact: 'Improved document search efficiency by 80%'
    },

    // Computer Vision
    {
      id: 7,
      title: 'Skin Cancer Detection',
      category: 'computer-vision',
      description: 'Advanced deep learning image classification and segmentation for precise skin lesion analysis, utilizing state-of-the-art neural network architectures.',
      technologies: ['Python', 'TensorFlow', 'U-Net', 'ResNet', 'Medical Imaging', 'DICOM'],
      githubUrl: 'https://github.com/soheil-mp/Skin-cancer-recoginition',
      demoUrl: null,
      image: '/assets/skin_cancer.jpg',
      featured: true,
      impact: '92% accuracy in early cancer detection'
    },
    {
      id: 8,
      title: 'Plant Health Detector',
      category: 'computer-vision',
      description: 'Sophisticated system for automated plant disease identification through leaf image analysis and machine learning techniques for precision agriculture.',
      technologies: ['Python', 'PyTorch', 'OpenCV', 'CNN', 'Data Augmentation', 'Mobile App'],
      githubUrl: 'https://github.com/soheil-mp/Plant-Health-Detector',
      demoUrl: null,
      image: '/assets/plant_health.jpg',
      featured: false,
      impact: 'Helped farmers reduce crop loss by 30%'
    },
    {
      id: 9,
      title: 'CV for Autonomous Driving',
      category: 'computer-vision',
      description: 'Implementation of object detection and road segmentation algorithms for autonomous vehicles using cutting-edge computer vision techniques.',
      technologies: ['Python', 'YOLO', 'Semantic Segmentation', 'ROS', 'LiDAR', 'Sensor Fusion'],
      githubUrl: 'https://github.com/soheil-mp/cv-for-autonomous-driving',
      demoUrl: null,
      image: '/assets/autonomous_driving.jpg',
      featured: false,
      impact: 'Real-time object detection at 60 FPS'
    },

    // Data Engineering & Analytics
    {
      id: 10,
      title: 'Crypto Price Monitoring',
      category: 'data-engineering',
      description: 'Sophisticated real-time cryptocurrency tracking system with advanced analytics, alerting, and comprehensive market insights for traders.',
      technologies: ['Python', 'Apache Kafka', 'InfluxDB', 'Grafana', 'Docker', 'WebSocket'],
      githubUrl: 'https://github.com/soheil-mp/Crypto-Price-Monitoring-System',
      demoUrl: null,
      image: '/assets/crypto_monitoring.jpg',
      featured: true,
      impact: 'Processing 1M+ price updates per day'
    },
    {
      id: 11,
      title: 'IoT Smart Home Dashboard',
      category: 'data-engineering',
      description: 'Advanced real-time data pipeline for smart home sensor analytics, featuring stream processing, efficient data storage, and intuitive visualization.',
      technologies: ['Python', 'Apache Spark', 'TimescaleDB', 'MQTT', 'Tableau', 'AWS IoT'],
      githubUrl: 'https://github.com/soheil-mp/IoT-Smart-Home-Data-Pipeline',
      demoUrl: null,
      image: '/assets/iot_dashboard.jpg',
      featured: false,
      impact: 'Reduced energy consumption by 25%'
    },
    {
      id: 12,
      title: 'Employment Monitoring',
      category: 'data-engineering',
      description: 'Comprehensive employment analytics dashboard leveraging PowerBI to provide deep insights into labor market trends and unemployment dynamics.',
      technologies: ['Python', 'Power BI', 'SQL Server', 'ETL', 'DAX', 'Power Query'],
      githubUrl: 'https://github.com/soheil-mp/unemployment-dashboard-powerbi',
      demoUrl: null,
      image: '/assets/employment_dashboard.jpg',
      featured: false,
      impact: 'Insights for 500K+ employment records'
    },

    // NLP & Audio Processing
    {
      id: 13,
      title: 'Text-to-Speech / Voice Cloning',
      category: 'nlp',
      description: 'State-of-the-art end-to-end Text-to-Speech model utilizing advanced deep learning techniques to generate natural, high-fidelity audio waveforms.',
      technologies: ['Python', 'VITS', 'VAE', 'GAN', 'Mel Spectrograms', 'WaveNet'],
      githubUrl: 'https://github.com/soheil-mp/VITS-Conditional-Variational-Autoencoder-with-Adversarial-Learning-',
      demoUrl: null,
      image: '/assets/voice_cloning.jpg',
      featured: true,
      impact: 'Generated human-like speech with 95% quality'
    },
    {
      id: 14,
      title: 'Speech Recognition',
      category: 'nlp',
      description: 'Advanced speech-to-text system implementing cutting-edge machine learning algorithms for accurate and robust audio transcription in multiple languages.',
      technologies: ['Python', 'Wav2Vec2', 'CTC', 'Transformer', 'LibriSpeech', 'Kaldi'],
      githubUrl: 'https://github.com/soheil-mp/Speech-Recognition',
      demoUrl: null,
      image: '/assets/speech_recognition.jpg',
      featured: false,
      impact: '98% accuracy on diverse audio inputs'
    },
    {
      id: 15,
      title: 'News Trading Signal',
      category: 'nlp',
      description: 'NLP-based solution for extracting market sentiment and generating trading insights from news data using advanced sentiment analysis and financial modeling.',
      technologies: ['Python', 'BERT', 'FinBERT', 'Sentiment Analysis', 'Time Series', 'Alpha Research'],
      githubUrl: 'https://github.com/soheil-mp/news-trading-signal',
      demoUrl: null,
      image: '/assets/trading_signal.jpg',
      featured: false,
      impact: 'Generated 15% annual returns'
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const projectId = parseInt(entry.target.dataset.projectId);
            setTimeout(() => {
              setVisibleProjects(prev => new Set([...prev, projectId]));
            }, Math.random() * 500);
          }
        });
      },
      {
        threshold: 0.2,
        rootMargin: '50px'
      }
    );

    const projectElements = document.querySelectorAll('.project-card');
    projectElements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, [activeFilter]);

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  const ProjectCard = ({ project }) => {
    const isVisible = visibleProjects.has(project.id);
    
    return (
      <div 
        className="project-card"
        data-project-id={project.id}
        style={{
          background: 'white',
          borderRadius: 'var(--radius-xl)',
          overflow: 'hidden',
          boxShadow: project.featured ? 'var(--shadow-xl)' : 'var(--shadow-md)',
          border: project.featured ? '2px solid var(--primary-blue)' : '1px solid var(--neutral-200)',
          transition: 'all var(--transition-normal)',
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
          position: 'relative'
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = 'translateY(-8px)';
          e.currentTarget.style.boxShadow = 'var(--shadow-2xl)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = 'translateY(0)';
          e.currentTarget.style.boxShadow = project.featured ? 'var(--shadow-xl)' : 'var(--shadow-md)';
        }}
      >
        {/* Featured Badge */}
        {project.featured && (
          <div 
            className="featured-badge"
            style={{
              position: 'absolute',
              top: 'var(--space-md)',
              right: 'var(--space-md)',
              background: 'linear-gradient(135deg, var(--accent-amber), var(--accent-amber)dd)',
              color: 'white',
              padding: 'var(--space-xs) var(--space-md)',
              borderRadius: 'var(--radius-md)',
              fontSize: '0.8rem',
              fontWeight: '600',
              zIndex: 2
            }}
          >
            ⭐ Featured
          </div>
        )}

        {/* Project Image/Icon */}
        <div 
          className="project-image"
          style={{
            height: '200px',
            background: `linear-gradient(135deg, ${getCategoryColor(project.category)}, ${getCategoryColor(project.category)}dd)`,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'relative',
            overflow: 'hidden'
          }}
        >
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
          <i 
            className={getCategoryIcon(project.category)}
            style={{
              fontSize: '4rem',
              color: 'white',
              zIndex: 1
            }}
          ></i>
        </div>

        {/* Project Content */}
        <div 
          className="project-content"
          style={{
            padding: 'var(--space-xl)'
          }}
        >
          <h3 
            style={{
              fontSize: '1.5rem',
              fontWeight: '600',
              color: 'var(--text-primary)',
              marginBottom: 'var(--space-md)',
              lineHeight: '1.3'
            }}
          >
            {project.title}
          </h3>

          <p 
            style={{
              color: 'var(--text-secondary)',
              fontSize: '1rem',
              lineHeight: '1.6',
              marginBottom: 'var(--space-lg)'
            }}
          >
            {project.description}
          </p>

          {/* Impact Metric */}
          {project.impact && (
            <div 
              className="project-impact"
              style={{
                background: 'var(--neutral-50)',
                padding: 'var(--space-sm) var(--space-md)',
                borderRadius: 'var(--radius-md)',
                marginBottom: 'var(--space-lg)',
                border: '1px solid var(--neutral-200)'
              }}
            >
              <span 
                style={{
                  fontSize: '0.9rem',
                  color: 'var(--primary-blue)',
                  fontWeight: '600'
                }}
              >
                💡 Impact: {project.impact}
              </span>
            </div>
          )}

          {/* Technologies */}
          <div 
            className="project-technologies"
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: 'var(--space-xs)',
              marginBottom: 'var(--space-lg)'
            }}
          >
            {project.technologies.slice(0, 4).map((tech) => (
              <span 
                key={tech}
                className="tech-tag"
                style={{
                  padding: 'var(--space-xs) var(--space-sm)',
                  background: 'var(--neutral-100)',
                  color: 'var(--text-primary)',
                  borderRadius: 'var(--radius-sm)',
                  fontSize: '0.8rem',
                  fontWeight: '500',
                  border: '1px solid var(--neutral-200)'
                }}
              >
                {tech}
              </span>
            ))}
            {project.technologies.length > 4 && (
              <span 
                style={{
                  padding: 'var(--space-xs) var(--space-sm)',
                  background: 'var(--primary-blue)',
                  color: 'white',
                  borderRadius: 'var(--radius-sm)',
                  fontSize: '0.8rem',
                  fontWeight: '500'
                }}
              >
                +{project.technologies.length - 4} more
              </span>
            )}
          </div>

          {/* Project Links */}
          <div 
            className="project-links"
            style={{
              display: 'flex',
              gap: 'var(--space-md)'
            }}
          >
            <a 
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 'var(--space-sm)',
                padding: 'var(--space-sm) var(--space-md)',
                background: 'var(--neutral-900)',
                color: 'white',
                textDecoration: 'none',
                borderRadius: 'var(--radius-md)',
                fontSize: '0.9rem',
                fontWeight: '500',
                transition: 'all var(--transition-fast)',
                flex: 1,
                justifyContent: 'center'
              }}
              onMouseEnter={(e) => {
                e.target.style.background = 'var(--neutral-700)';
                e.target.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={(e) => {
                e.target.style.background = 'var(--neutral-900)';
                e.target.style.transform = 'translateY(0)';
              }}
            >
              <i className="fab fa-github"></i>
              GitHub
            </a>

            {project.demoUrl && (
              <a 
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="project-link"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 'var(--space-sm)',
                  padding: 'var(--space-sm) var(--space-md)',
                  background: 'var(--primary-blue)',
                  color: 'white',
                  textDecoration: 'none',
                  borderRadius: 'var(--radius-md)',
                  fontSize: '0.9rem',
                  fontWeight: '500',
                  transition: 'all var(--transition-fast)',
                  flex: 1,
                  justifyContent: 'center'
                }}
                onMouseEnter={(e) => {
                  e.target.style.background = 'var(--primary-blue-dark)';
                  e.target.style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.background = 'var(--primary-blue)';
                  e.target.style.transform = 'translateY(0)';
                }}
              >
                <i className="fas fa-external-link-alt"></i>
                Demo
              </a>
            )}
          </div>
        </div>
      </div>
    );
  };

  const getCategoryColor = (category) => {
    const colors = {
      'reinforcement-learning': 'var(--accent-purple)',
      'generative-ai': 'var(--accent-amber)',
      'computer-vision': 'var(--accent-emerald)',
      'data-engineering': 'var(--primary-blue)',
      'nlp': 'var(--primary-blue-light)'
    };
    return colors[category] || 'var(--neutral-600)';
  };

  const getCategoryIcon = (category) => {
    const icons = {
      'reinforcement-learning': 'fas fa-robot',
      'generative-ai': 'fas fa-magic',
      'computer-vision': 'fas fa-eye',
      'data-engineering': 'fas fa-database',
      'nlp': 'fas fa-comments'
    };
    return icons[category] || 'fas fa-code';
  };

  return (
    <section 
      id="projects" 
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
            Featured Projects
          </h2>
          <p 
            style={{
              fontSize: '1.25rem',
              color: 'var(--text-secondary)',
              maxWidth: '700px',
              margin: '0 auto'
            }}
          >
            15+ diverse AI/ML projects spanning 5 domains—from autonomous systems to generative AI
          </p>
        </div>

        {/* Filter Buttons */}
        <div 
          className="project-filters"
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: 'var(--space-sm)',
            justifyContent: 'center',
            marginBottom: 'var(--space-4xl)'
          }}
        >
          {projectCategories.map((category) => (
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
                fontSize: '0.95rem',
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

        {/* Projects Grid */}
        <div 
          className="projects-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(380px, 1fr))',
            gap: 'var(--space-xl)',
            alignItems: 'start'
          }}
        >
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {/* Projects Summary */}
        <div 
          className="projects-summary"
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
            🚀 Ready to Build Something Amazing?
          </h3>
          <p 
            style={{
              fontSize: '1.1rem',
              color: 'var(--text-secondary)',
              marginBottom: 'var(--space-lg)',
              maxWidth: '600px',
              margin: '0 auto var(--space-lg) auto'
            }}
          >
            Each project represents real-world problem-solving using cutting-edge AI/ML techniques. 
            Let's discuss how we can tackle your next challenge together.
          </p>
          <button 
            className="btn btn--primary"
            onClick={() => navigate('/contact')}
            style={{
              padding: 'var(--space-md) var(--space-xl)',
              fontSize: '1.1rem',
              fontWeight: '600',
              background: 'linear-gradient(135deg, var(--primary-blue), var(--primary-blue-dark))',
              color: 'white',
              border: 'none',
              borderRadius: 'var(--radius-lg)',
              cursor: 'pointer',
              transition: 'all var(--transition-normal)',
              boxShadow: 'var(--shadow-md)'
            }}
            onMouseEnter={(e) => {
              e.target.style.transform = 'translateY(-2px)';
              e.target.style.boxShadow = 'var(--shadow-lg)';
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = 'translateY(0)';
              e.target.style.boxShadow = 'var(--shadow-md)';
            }}
          >
            <i className="fas fa-handshake" style={{ marginRight: 'var(--space-sm)' }}></i>
            Let's Work Together
          </button>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 768px) {
          .projects-grid {
            grid-template-columns: 1fr !important;
          }
          
          .project-filters {
            justify-content: flex-start !important;
            overflow-x: auto;
            padding-bottom: var(--space-sm);
          }
          
          .filter-btn {
            flex-shrink: 0;
          }
        }

        @media (max-width: 480px) {
          .project-content {
            padding: var(--space-lg) !important;
          }
          
          .project-technologies {
            gap: var(--space-xs) !important;
          }
          
          .tech-tag {
            font-size: 0.75rem !important;
          }
        }
      `}</style>
    </section>
  );
};

export default Projects;
