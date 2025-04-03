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
          <div className="footer-logo">Net Studio</div>
          <p className="footer-description">
            Potenciando marcas con estrategias digitales efectivas. Tu socio estratégico en el mundo del marketing digital.
          </p>
          <div className="social-links">
            <a
              className="social-link"
              href="https://instagram.com/netstudio.ar"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <FiInstagram />
            </a>
            <a
              className="social-link"
              href="https://facebook.com/netstudio.ar"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
            >
              <FiFacebook />
            </a>
            <a
              className="social-link"
              href="https://linkedin.com/company/netstudio-ar"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <FiLinkedin />
            </a>
            <a
              className="social-link"
              href="https://twitter.com/netstudio_ar"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
            >
              <FiTwitter />
            </a>
          </div>
        </div>

        <div className="footer-column">
          <h4 className="footer-title">Enlaces Rápidos</h4>
          <ul className="footer-links">
            {[
              { id: 'inicio', label: 'Inicio' },
              { id: 'servicios', label: 'Servicios' },
              { id: 'sobre-mi', label: 'Sobre mí' },
              { id: 'portfolio', label: 'Portfolio' },
              { id: 'testimonios', label: 'Testimonios' },
              { id: 'contacto', label: 'Contacto' },
            ].map((link) => (
              <li key={link.id} className="footer-link">
                <button
                  onClick={() => scrollToSection(link.id)}
                  className="footer-button"
                  aria-label={`Ir a ${link.label}`}
                >
                  {link.label}
                </button>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer-column">
          <h4 className="footer-title">Servicios</h4>
          <ul className="footer-links">
            {[
              'Gestión de Redes Sociales',
              'Diseño de Contenido',
              'Estrategia Digital',
              'Campañas Publicitarias',
              'Análisis y Optimización',
            ].map((service) => (
              <li key={service} className="footer-link">
                <button
                  onClick={() => scrollToSection('servicios')}
                  className="footer-button"
                  aria-label={`Ver más sobre ${service}`}
                >
                  {service}
                </button>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer-column">
          <h4 className="footer-title">Contacto</h4>
          <ul className="footer-links">
            <li className="footer-link">
              <a href="mailto:netstudio.lp@gmail.com" aria-label="Enviar correo a Net Studio">
                netstudio.lp@gmail.com
              </a>
            </li>
            <li className="footer-link">
              <a href="tel:+5491123456789" aria-label="Llamar a Net Studio">
                +54 9 11 2345-6789
              </a>
            </li>
            <li className="footer-link" aria-label="Ubicación de Net Studio">
              Buenos Aires, Argentina
            </li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Net Studio. Todos los derechos reservados. Diseñado por Lola Pavon.</p>
      </div>
    </footer>
  );
}

export default Footer;