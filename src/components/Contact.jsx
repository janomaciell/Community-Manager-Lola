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

    emailjs
      .send(
        'service_7a52up1',
        'template_afshotn',
        {
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
        },
        'njKaLQvBNkUWF0QtR'
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
          alert('Message sent! I will get back to you soon.');
          setIsSending(false);
        },
        (error) => {
          console.error('Error sending email:', error.text);
          setError('There was an error sending your message. Please try again.');
          setIsSending(false);
        }
      );
  };

  return (
    <section id="contact" className="contact-section">
      <h2 className="section-title">Contact</h2>
      <p className="section-subtitle">
        Ready to elevate your brand? Get in touch with me.
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
                <a href="mailto:Lolapavonn@gmail.com">Lolapavonn@gmail.com</a>
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
              <h4>Phone</h4>
              <p>
                <a href="tel:+5492255508535">+54 9 2255-508535</a>
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
              <h4>Location</h4>
              <p>Pinamar, Buenos Aires, Argentina</p>
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
                  href="https://instagram.com/Lolaapavon"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  @Lolaapavon
                </a>
              </p>
            </div>
          </motion.div>
        </div>

        <div className="contact-form">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label className="form-label">Name</label>
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
              <label className="form-label">Subject</label>
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
              <label className="form-label">Message</label>
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
              {isSending ? 'Sending...' : 'Send Message'}
            </motion.button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
