import styles from './Header.module.css';
import logoImage from '../../assets/logo-imagen.webp'; // Ajusta la ruta de tu imagen

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        {/* Contenedor del logo (texto + imagen) */}
        <a href="/" className={styles.logoContainer}>
          <img 
            src={logoImage} 
            alt="Logo EcoHeroes" 
            className={styles.logoImage}
          />
          <span className={styles.logoText}>EcoHeroes</span>
        </a>

        <nav className={styles.nav}>
          <a href="/">Inicio</a>
          <a href="/solicitar-recojo">Solicitar Recojo</a>
          <a href="/ecoheroes">EcoHeroes</a>
          <a href="/contacto">Contacto</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;