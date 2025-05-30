import React from 'react';
import { FiInstagram, FiFacebook, FiLinkedin, FiTwitter } from 'react-icons/fi';
import '../styles/components/Footer.css';

function Footer() {
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="footer-container">
      <div className="footer-content">
        <div className="footer-column">
          <div className="footer-logo">Lola Pavon</div>
          <p className="footer-description">
            Empowering brands with effective digital strategies. Your strategic partner in the digital marketing world.
          </p>
          <div className="social-links">
            <a
              className="social-link"
              href="https://instagram.com/lolapavon"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <FiInstagram />
            </a>
          </div>
        </div>

        <div className="footer-column">
          <h4 className="footer-title">Quick Links</h4>
          <ul className="footer-links">
            {[
              { id: 'home', label: 'Home' },
              { id: 'about-Me', label: 'Services' },
              { id: 'sobre-mi', label: 'About Me' },
              { id: 'portfolio', label: 'Portfolio' },
              { id: 'testimonials', label: 'Testimonials' },
              { id: 'contact', label: 'Contact' },
            ].map((link) => (
              <li key={link.id} className="footer-link">
                <button
                  onClick={() => scrollToSection(link.id)}
                  className="footer-button"
                  aria-label={`Go to ${link.label}`}
                >
                  {link.label}
                </button>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer-column">
          <h4 className="footer-title">Services</h4>
          <ul className="footer-links">
            {[
              'Social Media Management',
              'Content Design',
              'Digital Strategy',
              'Advertising Campaigns',
              'Analytics & Optimization',
            ].map((service) => (
              <li key={service} className="footer-link">
                <button
                  onClick={() => scrollToSection('servicios')}
                  className="footer-button"
                  aria-label={`Learn more about ${service}`}
                >
                  {service}
                </button>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer-column">
          <h4 className="footer-title">Contact</h4>
          <ul className="footer-links">
            <li className="footer-link">
              <a href="mailto:Lolapavonn@gmail.com" aria-label="Send email">
                Lolapavonn@gmail.com
              </a>
            </li>
            <li className="footer-link">
              <a href="tel:+5492255508535" aria-label="Call Me">
                +54 9 2255-508535
              </a>
            </li>
            <li className="footer-link" aria-label="Location">
              Pinamar, Buenos Aires, Argentina
            </li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Lola Pavon. All rights reserved. Designed by <a href="https://www.linkedin.com/in/jano-maciel-a44578226/">Jano Maciel.</a></p>
      </div>
    </footer>
  );
}

export default Footer;
