import React from 'react';
import { motion } from 'framer-motion';
import '../styles/components/About.css';

function About() {
  return (
    

    <section id="about" className="about-section">
      <motion.div
        className="about-image"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, margin: "-100px" }}
      >
        <img src="/images/lola-pavon.jpeg" alt="Lola Pavon - Community Manager" />
      </motion.div>
      <div className="about-content">
        <h2 className="section-title">About Me</h2>
        <motion.p
          className="about-text"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          I’m a dedicated Community Manager passionate about building authentic digital connections. I focus on crafting personalized strategies that help brands grow and engage meaningfully with their audience.
        </motion.p>
        <motion.p
          className="about-text"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          With a creative and strategic mindset, I leverage my knowledge of social media trends and digital marketing tools to elevate brands and foster loyal communities.
        </motion.p>
        <motion.p
          className="about-text"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          My commitment to understanding each brand's unique voice allows me to design campaigns that resonate and create lasting impact in the digital space.
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
