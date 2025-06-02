import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { X } from 'lucide-react';
import '../styles/components/Portfolio.css';

function Portfolio() {
  const [filter, setFilter] = useState('all');
  const [selectedImage, setSelectedImage] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const projects = [
    {
      id: 1,
      title: 'Breakfast Experience',
      category: 'hotel',
      description: 'Guest enjoying a peaceful morning breakfast in our elegant dining area, showcasing our commitment to exceptional hospitality.',
      image: '/images/soleado-desayuno.jpg'
    },
    {
      id: 2,
      title: 'Social Dining',
      category: 'hotel',
      description: 'A group of guests sharing stories and laughter during breakfast, highlighting our welcoming communal spaces.',
      image: '/images/soleado-desayuno2.jpg'
    },
    {
      id: 3,
      title: 'Breakfast Buffet',
      category: 'hotel',
      description: 'Guest selecting from our diverse breakfast buffet, featuring fresh and locally sourced ingredients.',
      image: '/images/soleado-desayuno3.JPEG'
    },
    {
      id: 4,
      title: 'Luxury Accommodation',
      category: 'hotel',
      description: 'Premium room featuring plush bedding and modern amenities for the ultimate comfort.',
      image: '/images/soleado-habitacion.JPEG'
    },
    {
      id: 5,
      title: 'Scenic Views',
      category: 'hotel',
      description: 'Breathtaking views from our guest rooms, offering a perfect blend of comfort and natural beauty.',
      image: '/images/soleado1.JPEG'
    },
    {
      id: 6,
      title: 'Smart Access',
      category: 'hotel',
      description: 'Modern digital door lock system for enhanced security and convenience.',
      image: '/images/soleado-puerta.JPEG'
    },
    {
      id: 7,
      title: 'Keycard Access',
      category: 'hotel',
      description: 'Secure and easy room access with our advanced keycard system.',
      image: '/images/soleado-puerta2.jpg'
    },
    {
      id: 8,
      title: 'beach resort',
      category: 'balneario',
      description: 'Aerial view of our exclusive beach resort and wellness center.',
      image: '/images/balneario-dron2.jpg'
    },
    {
      id: 9,
      title: 'Room Service',
      category: 'hotel',
      description: 'Meticulously prepared room with premium linens and thoughtful touches.',
      image: '/images/soleado-habitacion-3.jpg'
    },
    {
      id: 10,
      title: 'Beach Resort Aerial View',
      category: 'balneario',
      description: 'A breathtaking aerial view of the beach resort captured by drone, highlighting the full layout, modern architecture, and its stunning location by the shoreline.',
      image: '/images/balneario-dron.jpg'
    },
    {
      id: 11,
      title: 'Beach Resort Exterior',
      category: 'balneario',
      description: 'Elegant exterior of the beach resort featuring contemporary design, expansive glass facades, and soft ambient lighting, nestled within a scenic coastal setting.',
      image: '/images/balneario.jpg'
    }
  ];

  const filteredProjects = filter === 'all'
    ? projects
    : projects.filter(project => project.category === filter);

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedImage(null);
  };

  return (
    <section id="portfolio" className="portfolio-section">
      <h2 className="section-title">Our Hotel Gallery</h2>
      <p className="section-subtitle">
        Experience luxury and comfort through our carefully curated spaces
      </p>

      <div className="filter-buttons">
        <button 
          className={`filter-button ${filter === 'all' ? 'active' : ''}`}
          onClick={() => setFilter('all')}
        >
          All
        </button>
        <button 
          className={`filter-button ${filter === 'balneario' ? 'active' : ''}`}
          onClick={() => setFilter('balneario')}
        >
          beach resort
        </button>
        <button 
          className={`filter-button ${filter === 'hotel' ? 'active' : ''}`}
          onClick={() => setFilter('hotel')}
        >
          hotel
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
              <button onClick={() => {
                setSelectedImage(project.image);
                setIsModalOpen(true);
              }}>
                View Larger
              </button>
            </div>
          </motion.div>
        ))}
      </div>

      {isModalOpen && (
        <motion.div 
          className="modal-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          onClick={closeModal}
        >
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close-button" onClick={closeModal}>
              <X size={24} />
            </button>
            <img src={selectedImage} alt="Project preview" />
          </div>
        </motion.div>
      )}
    </section>
  );
}

export default Portfolio;