import React from 'react';
import './styles/globals.css';

// Import components
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Footer from './components/Footer';

/**
 * Main App component that renders the entire portfolio website
 * Follows modern React patterns with functional components
 */
function App() {
  return (
    <div className="App">
      {/* Navigation Header */}
      <Header />
      
      {/* Main Content Sections */}
      <main>
        {/* Hero Section - Introduction and CTA */}
        <Hero />
        
        {/* About Section - Personal introduction */}
        <About />
        
        {/* Skills Section - Technical expertise */}
        <Skills />
        
        {/* Projects Section - Featured work */}
        <Projects />
        
        {/* Experience Section - Professional timeline */}
        <Experience />
        
        {/* Certifications Section - Key certifications */}
        <Certifications />
        
        {/* Contact Section - Get in touch */}
        <Contact />
      </main>
      
      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
