import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiPhone, FiMapPin, FiInstagram } from 'react-icons/fi';
import emailjs from '@emailjs/browser'; // Import EmailJS
import '../styles/components/Contact.css';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSending, setIsSending] = useState(false); // To show a loading state
  const [error, setError] = useState(''); // To handle errors

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSending(true);
    setError('');

    // EmailJS send function
    emailjs
      .send(
        'service_7a52up1', // Replace with your EmailJS Service ID
        'template_afshotn', // Replace with your EmailJS Template ID
        {
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
        },
        'njKaLQvBNkUWF0QtR' // Replace with your EmailJS User ID
      )
      .then(
        (result) => {
          console.log('Email sent successfully:', result.text);
          setFormData({
            name: '',
            email: '',
            subject: '',
            message: '',
          });
          alert('¡Mensaje enviado! Nos pondremos en contacto contigo pronto.');
          setIsSending(false);
        },
        (error) => {
          console.error('Error sending email:', error.text);
          setError('Hubo un error al enviar el mensaje. Por favor, intenta de nuevo.');
          setIsSending(false);
        }
      );
  };

  return (
    <section id="contacto" className="contact-section">
      <h2 className="section-title">Contacto</h2>
      <p className="section-subtitle">
        ¿Listo para potenciar tu marca? Ponte en contacto conmigo
      </p>

      <div className="contact-wrapper">
        <div className="contact-info">
          <motion.div
            className="info-item"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, margin: '-100px' }}
          >
            <div className="info-icon">
              <FiMail />
            </div>
            <div className="info-content">
              <h4>Email</h4>
              <p>
                <a href="mailto:janomaciel1@gmail.com">netstudio.lp@gmail.com</a>
              </p>
            </div>
          </motion.div>

          <motion.div
            className="info-item"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true, margin: '-100px' }}
          >
            <div className="info-icon">
              <FiPhone />
            </div>
            <div className="info-content">
              <h4>Teléfono</h4>
              <p>
                <a href="tel:+5492267405599">+54 9 2267-405599</a>
              </p>
            </div>
          </motion.div>

          <motion.div
            className="info-item"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true, margin: '-100px' }}
          >
            <div className="info-icon">
              <FiMapPin />
            </div>
            <div className="info-content">
              <h4>Ubicación</h4>
              <p>Pinamar , Buenos Aires, Argentina</p>
            </div>
          </motion.div>

          <motion.div
            className="info-item"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true, margin: '-100px' }}
          >
            <div className="info-icon">
              <FiInstagram />
            </div>
            <div className="info-content">
              <h4>Instagram</h4>
              <p>
                <a
                  href="https://instagram.com/netstudio.ar"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  @netstudio.ar
                </a>
              </p>
            </div>
          </motion.div>
        </div>

        <div className="contact-form">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label className="form-label">Nombre</label>
              <input
                className="form-input"
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label className="form-label">Email</label>
              <input
                className="form-input"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label className="form-label">Asunto</label>
              <input
                className="form-input"
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label className="form-label">Mensaje</label>
              <textarea
                className="form-textarea"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
              />
            </div>

            {error && <p className="form-error">{error}</p>}

            <motion.button
              className="submit-button"
              type="submit"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              disabled={isSending}
            >
              {isSending ? 'Enviando...' : 'Enviar Mensaje'}
            </motion.button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;