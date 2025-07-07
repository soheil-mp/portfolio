import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import './styles/globals.css';
import './styles/page-transitions.css';

// Import components
import Header from './components/Header';
import TabNavigation from './components/TabNavigation';
import Footer from './components/Footer';

// Import pages
import {
  HomePage,
  AboutPage,
  SkillsPage,
  ProjectsPage,
  ExperiencePage,
  CertificationsPage,
  ContactPage
} from './pages';

/**
 * Main App component with React Router for tab-based navigation
 * Features separate pages for each portfolio section with smooth transitions
 */
function App() {
  return (
    <Router>
      <div className="App">
        {/* Navigation Header */}
        <Header />
        
        {/* Tab Navigation */}
        <TabNavigation />
        
        {/* Main Content with Routes */}
        <main 
          className="main-content"
          style={{
            minHeight: 'calc(100vh - 160px)', // Account for header and tab nav
            background: 'var(--bg-primary)'
          }}
        >
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/skills" element={<SkillsPage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/experience" element={<ExperiencePage />} />
            <Route path="/certifications" element={<CertificationsPage />} />
            <Route path="/contact" element={<ContactPage />} />
            {/* Fallback route */}
            <Route path="*" element={<HomePage />} />
          </Routes>
        </main>
        
        {/* Footer */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
