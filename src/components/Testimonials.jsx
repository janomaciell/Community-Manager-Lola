import React from 'react';
import { motion } from 'framer-motion';
import { FiStar } from 'react-icons/fi';
import '../styles/components/Testimonials.css';

function Testimonials() {
  const testimonials = [
    {
      id: 1,
      text: "Trabajar con Laura fue una experiencia increíble. Su atención al detalle y creatividad superaron nuestras expectativas.",
      stars: 5,
      client: {
        name: "María González",
        role: "Gerente de Marketing",
        image: "https://via.placeholder.com/50"
      }
    },
    {
      id: 2,
      text: "El equipo de NetStudio es excepcional. Entendieron perfectamente nuestra visión y la llevaron a cabo con gran profesionalismo.",
      stars: 5,
      client: {
        name: "Carlos Pérez",
        role: "CEO de TechCorp",
        image: "https://via.placeholder.com/50"
      }
    },
    {
      id: 3,
      text: "Recomiendo encarecidamente a NetStudio. Su trabajo es de alta calidad y cumplen con los plazos establecidos.",
      stars: 4,
      client: {
        name: "Ana López",
        role: "Fundadora de EcoFriendly",
        image: "https://via.placeholder.com/50"
      }
    }
    // Add more testimonials as needed
    // Each testimonial object should have the following properties:
    // - id (unique identifier for the testimonial)
    // - text (the text of the testimonial)
    // - stars (the number of stars given to the testimonial)
    // - client (an object containing the client's name, role, and image URL)
  ];

  return (
    <section id="testimonios" className="testimonials-section">
      <h2 className="section-title">Lo que dicen nuestros clientes</h2>
      <p className="section-subtitle">La satisfacción de nuestros clientes es nuestra mayor recompensa.</p>
      <div className="testimonials-grid">
        {testimonials.map((testimonial) => (
          <motion.div 
            className="testimonial-card"
            key={testimonial.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="quote-mark">"</div>
            <p className="testimonial-text">{testimonial.text}</p>
            <div className="stars">
              {[...Array(testimonial.stars)].map((_, index) => (
                <FiStar key={index} />
              ))}
            </div>
            <div className="client-info">
              <div className="client-image">
                <img src={testimonial.client.image} alt={testimonial.client.name} />
              </div>
              <div>
                <h4 className="client-name">{testimonial.client.name}</h4>
                <p className="client-role">{testimonial.client.role}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Testimonials;