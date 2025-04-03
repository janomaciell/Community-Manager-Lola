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
        onClick={() => scrollToSection('inicio')}
        style={{ border: 'none', background: 'none', cursor: 'pointer' }}
      >
        NetStudio
      </button>
      <div className="nav-links">
        <button onClick={() => scrollToSection('inicio')} className="nav-link">Inicio</button>
        <button onClick={() => scrollToSection('servicios')} className="nav-link">Servicios</button>
        <button onClick={() => scrollToSection('sobre-mi')} className="nav-link">Sobre mí</button>
        <button onClick={() => scrollToSection('portfolio')} className="nav-link">Portfolio</button>
        <button onClick={() => scrollToSection('testimonios')} className="nav-link">Testimonios</button>
        <button onClick={() => scrollToSection('contacto')} className="nav-link">Contacto</button>
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
          <button onClick={() => scrollToSection('inicio')} className="mobile-nav-link">Inicio</button>
          <button onClick={() => scrollToSection('servicios')} className="mobile-nav-link">Servicios</button>
          <button onClick={() => scrollToSection('sobre-mi')} className="mobile-nav-link">Sobre mí</button>
          <button onClick={() => scrollToSection('portfolio')} className="mobile-nav-link">Portfolio</button>
          <button onClick={() => scrollToSection('testimonios')} className="mobile-nav-link">Testimonios</button>
          <button onClick={() => scrollToSection('contacto')} className="mobile-nav-link">Contacto</button>
        </motion.div>
      )}
    </nav>
  );
}

export default Navbar;