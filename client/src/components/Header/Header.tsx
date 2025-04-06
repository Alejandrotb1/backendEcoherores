import { Link } from 'react-router-dom';
import styles from './Header.module.css';
import logo from '../../assets/logo-imagen.webp';

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link to="/" className={styles.logoContainer}>
          <img src={logo} alt="EcoHeroes Logo" className={styles.logoImage} />
          <span className={styles.logoText}>EcoHeroes</span>
        </Link>
        <nav className={styles.nav}>
          <Link to="/">Inicio</Link>
          <Link to="/solicitar-recojo">Solicitar Recojo</Link>
          <Link to="/ecoheroes">EcoHeroes</Link>
          <Link to="/contacto">Contacto</Link>
        </nav>
      </div>
    </header>
  );
}