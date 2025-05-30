import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FiMenu, FiX } from 'react-icons/fi';
import '../styles/components/Navbar.css';

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  return (
    <nav className={`nav-container ${scrolled ? 'scrolled' : ''}`}>
      <button 
        className="logo" 
        onClick={() => scrollToSection('home')}
        style={{ border: 'none', background: 'none', cursor: 'pointer' }}
      >
        LP
      </button>
      <div className="nav-links">
        <button onClick={() => scrollToSection('home')} className="nav-link">Home</button>
        <button onClick={() => scrollToSection('services')} className="nav-link">Services</button>
        <button onClick={() => scrollToSection('about')} className="nav-link">About Me</button>
        <button onClick={() => scrollToSection('portfolio')} className="nav-link">Portfolio</button>
        <button onClick={() => scrollToSection('testimonials')} className="nav-link">Testimonials</button>
        <button onClick={() => scrollToSection('contact')} className="nav-link">Contact</button>
      </div>
      <div className="mobile-menu-icon" onClick={() => setMobileMenuOpen(true)}>
        <FiMenu />
      </div>
      
      {mobileMenuOpen && (
        <motion.div
          className="mobile-menu"
          initial={{ x: '100%' }}
          animate={{ x: 0 }}
          transition={{ type: 'tween' }}
        >
          <div className="close-icon" onClick={() => setMobileMenuOpen(false)}>
            <FiX />
          </div>
          <button onClick={() => scrollToSection('home')} className="mobile-nav-link">Home</button>
          <button onClick={() => scrollToSection('services')} className="mobile-nav-link">Services</button>
          <button onClick={() => scrollToSection('about-me')} className="mobile-nav-link">About Me</button>
          <button onClick={() => scrollToSection('portfolio')} className="mobile-nav-link">Portfolio</button>
          <button onClick={() => scrollToSection('testimonials')} className="mobile-nav-link">Testimonials</button>
          <button onClick={() => scrollToSection('contact')} className="mobile-nav-link">Contact</button>
        </motion.div>
      )}
    </nav>
  );
}

export default Navbar;
