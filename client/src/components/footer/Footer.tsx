import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaPaperPlane } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="final-footer">
      {/* Sección izquierda: Copyright + íconos */}
      <div className="footer-section">
        <div className="copyright">
          <p>Copyright © 2015 Charlatanthus</p>
          <p>All rights reserved</p>
        </div>
        <div className="social-icons">
          <FaFacebook className="icon" />
          <FaTwitter className="icon" />
          <FaInstagram className="icon" />
          <FaLinkedin className="icon" />
        </div>
      </div>

      {/* Company */}
      <div className="footer-section">
        <div className="footer-col">
          <h3>Company</h3>
          <ul>
            <li>About us</li>
            <li>Blog</li>
            <li>Contact us</li>
            <li>Photos</li>
            <li>Terminicals</li>
          </ul>
        </div>
      </div>

      {/* Soporte */}
      <div className="footer-section">
        <div className="footer-col">
          <h3>Soporte</h3>
          <ul>
            <li>Help owner</li>
            <li>Terms of service</li>
            <li>Legal</li>
            <li>Privacy policy</li>
            <li>Status</li>
          </ul>
        </div>
      </div>

      <div className="footer-section">
        <div className="footer-col">
          <h3>Contactanos</h3>
          <div className="contact-input">
            <input 
              type="email" 
              placeholder="Tu email" 
              aria-label="Ingresa tu email"
            />
            <FaPaperPlane className="telegram-icon" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;