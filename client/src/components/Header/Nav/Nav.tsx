import React from 'react';
import styles from '../Header.module.css'; // Comparte estilos con el Header

const Nav: React.FC = () => {
  return (
    <nav className={styles.nav}>
      <ul>
        <li><a href="/login">Iniciar sesión</a></li>
        <li><a href="/register">Registrarse</a></li>
      </ul>
    </nav>
  );
};

export default Nav;