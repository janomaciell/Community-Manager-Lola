import React from 'react';
import { motion } from 'framer-motion';
import { FiInstagram, FiLayout, FiTrendingUp, FiTarget, FiBarChart2 } from 'react-icons/fi';
import '../styles/components/Services.css';

function Services() {
  const services = [
    {
      icon: <FiInstagram />,
      title: 'Gestión de Redes Sociales',
      description: 'Creación y administración completa de tus redes sociales para maximizar tu presencia digital y conectar con tu audiencia.'
    },
    {
      icon: <FiLayout />,
      title: 'Diseño de Contenido',
      description: 'Diseño visual atractivo y coherente que refleja la identidad de tu marca y capta la atención de tus seguidores.'
    },
    {
      icon: <FiTrendingUp />,
      title: 'Estrategia Digital',
      description: 'Desarrollo de estrategias personalizadas para alcanzar tus objetivos de negocio a través de los canales digitales.'
    },
    {
      icon: <FiTarget />,
      title: 'Campañas Publicitarias',
      description: 'Creación y gestión de campañas efectivas para aumentar el alcance y conversión de tus productos o servicios.'
    },
    {
      icon: <FiBarChart2 />,
      title: 'Análisis y Optimización',
      description: 'Monitoreo constante de resultados para optimizar estrategias y maximizar el retorno de inversión.'
    }
  ];

  return (
    <section id="servicios" className="services-section">
      <h2 className="services-section__title">Nuestros Servicios</h2>
      <p className="services-section__subtitle">
        Soluciones completas para potenciar tu marca en el mundo digital
      </p>
      <div className="services-grid">
        {services.map((service, index) => (
          <motion.div
            className="service-card"
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <div className="service-icon">{service.icon}</div>
            <h3 className="service-title">{service.title}</h3>
            <p className="service-description">{service.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Services;