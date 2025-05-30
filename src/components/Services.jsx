import React from 'react';
import { motion } from 'framer-motion';
import { FiInstagram, FiLayout, FiTrendingUp, FiTarget, FiBarChart2 } from 'react-icons/fi';
import '../styles/components/Services.css';

function Services() {
  const services = [
    {
      icon: <FiInstagram />,
      title: 'Social Media Management',
      description: 'Complete creation and management of your social media to maximize your digital presence and connect with your audience.'
    },
    {
      icon: <FiLayout />,
      title: 'Content Design',
      description: 'Attractive and consistent visual design that reflects your brand identity and captures your audience’s attention.'
    },
    {
      icon: <FiTrendingUp />,
      title: 'Digital Strategy',
      description: 'Development of personalized strategies to achieve your business goals through digital channels.'
    },
    {
      icon: <FiTarget />,
      title: 'Advertising Campaigns',
      description: 'Creation and management of effective campaigns to increase the reach and conversion of your products or services.'
    },
    {
      icon: <FiBarChart2 />,
      title: 'Analytics & Optimization',
      description: 'Constant performance monitoring to optimize strategies and maximize return on investment.'
    }
  ];

  return (
    <section id="services" className="services-section">
      <h2 className="services-section__title">Our Services</h2>
      <p className="services-section__subtitle">
        Complete solutions to boost your brand in the digital world
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
