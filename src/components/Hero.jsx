import React from 'react';
import { motion } from 'framer-motion';
import '../styles/components/Hero.css';

function Hero() {
  return (
    <section id="inicio" className="hero-section">
      <div className="hero-content">
        <motion.h1
          className="hero-title"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Potenciando marcas con <span>estrategias digitales</span>
        </motion.h1>
        <motion.p
          className="hero-subtitle"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Community Manager & Social Media Specialist. Ayudando a tu negocio a crecer con contenido que conecta y estrategias que convierten.
        </motion.p>
        <motion.button
          className="cta-button"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Impulsa tu marca
        </motion.button>
      </div>
      <motion.div
        className="background-shape"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2 }}
      />
    </section>
  );
}

export default Hero;