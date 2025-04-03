import React from 'react';
import { motion } from 'framer-motion';
import '../styles/components/About.css';

function About() {
  return (
    <section id="sobre-mi" className="about-section">
      <motion.div
        className="about-image"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, margin: "-100px" }}
      >
        <img src="/images/lola-pavon.jpg" alt="Lola Pavon - Community Manager" />
      </motion.div>
      <div className="about-content">
        <h2 className="section-title">Sobre mí</h2>
        <motion.p
          className="about-text"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          Soy Lola Pavon, apasionada por la comunicación digital y el marketing estratégico. Me especializo en ayudar a marcas y emprendedores a destacarse en el mundo digital mediante estrategias personalizadas y contenido de valor.
        </motion.p>
        <motion.p
          className="about-text"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          En NetStudio, mi objetivo es convertir tu presencia digital en una herramienta efectiva para tu negocio, creando conexiones auténticas con tu audiencia y generando resultados tangibles.
        </motion.p>
        <motion.p
          className="about-text"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          Con experiencia en diversos sectores, desde moda y belleza hasta servicios profesionales y productos de consumo, mi enfoque se basa en entender profundamente cada negocio para crear estrategias que realmente funcionen.
        </motion.p>
        <motion.h3
          className="about-signature"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          Lola Pavon
        </motion.h3>
      </div>
    </section>
  );
}

export default About;