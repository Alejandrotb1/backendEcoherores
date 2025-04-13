import { Link } from 'react-router-dom';
import styles from './Footer.module.css';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.section}>
          <div className={styles.copyright}>
            <p>Copyright © 2025 ActualizacionII</p>
            <p>Todos los derechos reservados</p>
            <div className={styles.socialLinks}>
              <a href="#" aria-label="Facebook"><FaFacebook /></a>
              <a href="#" aria-label="Twitter"><FaTwitter /></a>
              <a href="#" aria-label="Instagram"><FaInstagram /></a>
              <a href="#" aria-label="LinkedIn"><FaLinkedin /></a>
            </div>
          </div>
        </div>

        <div className={styles.section}>
          <h3>Company</h3>
          <ul>
            <li><Link to="/about">About us</Link></li>
            <li><Link to="/blog">Blog</Link></li>
            <li><Link to="/contact">Contact us</Link></li>
            <li><Link to="/photos">Photos</Link></li>
            <li><Link to="/terminals">Terminals</Link></li>
          </ul>
        </div>

        <div className={styles.section}>
          <h3>Soporte</h3>
          <ul>
            <li><Link to="/help">Help owner</Link></li>
            <li><Link to="/terms">Terms of service</Link></li>
            <li><Link to="/legal">Legal</Link></li>
            <li><Link to="/privacy">Privacy policy</Link></li>
            <li><Link to="/status">Status</Link></li>
          </ul>
        </div>

        <div className={styles.section}>
          <h3>Contáctanos</h3>
          <div className={styles.contactForm}>
            <input
              type="email"
              placeholder="Tu email"
              className={styles.input}
            />
            <button className={styles.submitButton}>
              <span>➔</span>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;