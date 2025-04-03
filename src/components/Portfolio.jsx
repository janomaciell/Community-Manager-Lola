import React, { useState } from 'react';
import { motion } from 'framer-motion';
import '../styles/components/Portfolio.css';

function Portfolio() {
  const [filter, setFilter] = useState('all');
  
  const projects = [
    {
      id: 1,
      title: 'Boutique de Moda',
      category: 'ecommerce',
      description: 'Gestión de redes sociales y estrategia de contenido para marca de moda.',
      image: '/images/portfolio-1.jpg'
    },
    {
      id: 2,
      title: 'Café Local',
      category: 'food',
      description: 'Desarrollo de identidad digital y contenidos para cafetería de especialidad.',
      image: '/images/portfolio-2.jpg'
    },
    {
      id: 3,
      title: 'Estudio de Yoga',
      category: 'service',
      description: 'Campañas publicitarias y contenido para estudio de bienestar y yoga.',
      image: '/images/portfolio-3.jpg'
    },
    {
      id: 4,
      title: 'Productos Orgánicos',
      category: 'ecommerce',
      description: 'Estrategia integral de marketing digital para marca de cosmética natural.',
      image: '/images/portfolio-4.jpg'
    },
    {
      id: 5,
      title: 'Consultora Financiera',
      category: 'service',
      description: 'Gestión de LinkedIn y estrategia de contenido profesional.',
      image: '/images/portfolio-5.jpg'
    },
    {
      id: 6,
      title: 'Restaurante Gourmet',
      category: 'food',
      description: 'Fotografía de producto y gestión de redes sociales.',
      image: '/images/portfolio-6.jpg'
    }
  ];
  
  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

  return (
    <section id="portfolio" className="portfolio-section">
      <h2 className="section-title">Portfolio</h2>
      <p className="section-subtitle">
        Algunos de los proyectos en los que he trabajado
      </p>
      
      <div className="filter-buttons">
        <button 
          className={`filter-button ${filter === 'all' ? 'active' : ''}`}
          onClick={() => setFilter('all')}
        >
          Todos
        </button>
        <button 
          className={`filter-button ${filter === 'ecommerce' ? 'active' : ''}`}
          onClick={() => setFilter('ecommerce')}
        >
          E-commerce
        </button>
        <button 
          className={`filter-button ${filter === 'service' ? 'active' : ''}`}
          onClick={() => setFilter('service')}
        >
          Servicios
        </button>
        <button 
          className={`filter-button ${filter === 'food' ? 'active' : ''}`}
          onClick={() => setFilter('food')}
        >
          Gastronomía
        </button>
      </div>
      
      <div className="projects-grid">
        {filteredProjects.map((project, index) => (
          <motion.div
            className="project-card"
            key={project.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <img src={project.image} alt={project.title} />
            <div className="project-overlay">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <button>Ver Proyecto</button>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Portfolio;