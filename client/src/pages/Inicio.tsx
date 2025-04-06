import React from 'react';
import styles from './Inicio.module.css';

const Inicio: React.FC = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Bienvenido a EcoHeroes</h1>
      <p className={styles.description}>
        Somos tu aliado en la gestión responsable de residuos. 
        Ayúdanos a hacer del mundo un lugar más limpio y sostenible.
      </p>
      <div className={styles.ctaContainer}>
        <a href="/solicitar-recojo" className={styles.ctaButton}>
          Solicitar Recojo
        </a>
      </div>
    </div>
  );
};

export default Inicio;
