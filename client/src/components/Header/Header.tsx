import React from 'react';
import styles from './Header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <a href="/" className={styles.logo}>EcoHeroes</a>
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