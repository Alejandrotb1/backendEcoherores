import React, { useState } from 'react';
import styles from './Contacto.module.css';
import { FaEnvelope, FaMapMarkerAlt, FaPhone } from 'react-icons/fa';

const Contacto: React.FC = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    mensaje: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aquí iría la lógica para enviar el formulario
    console.log('Formulario enviado:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Contáctanos</h1>
      <p className={styles.subtitle}>
        Estamos aquí para ayudarte. Envíanos tus preguntas o comentarios.
      </p>
      
      <div className={styles.content}>
        <div className={styles.infoSection}>
          <div className={styles.infoCard}>
            <FaPhone className={styles.icon} />
            <h3>Teléfono</h3>
            <p>+51 123 456 789</p>
          </div>
          <div className={styles.infoCard}>
            <FaEnvelope className={styles.icon} />
            <h3>Email</h3>
            <p>contacto@ecoheroes.com</p>
          </div>
          <div className={styles.infoCard}>
            <FaMapMarkerAlt className={styles.icon} />
            <h3>Dirección</h3>
            <p>Av. Principal 123, Lima</p>
          </div>
        </div>

        <div className={styles.formSection}>
          <h2>Envíanos un mensaje</h2>
          <form className={styles.form} onSubmit={handleSubmit}>
            <div className={styles.formGroup}>
              <label htmlFor="nombre">Nombre completo</label>
              <input
                type="text"
                id="nombre"
                name="nombre"
                value={formData.nombre}
                onChange={handleChange}
                placeholder="Ingresa tu nombre"
                required
              />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="email">Correo electrónico</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="ejemplo@correo.com"
                required
              />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="mensaje">Mensaje</label>
              <textarea
                id="mensaje"
                name="mensaje"
                value={formData.mensaje}
                onChange={handleChange}
                placeholder="¿En qué podemos ayudarte?"
                required
              ></textarea>
            </div>
            <button type="submit" className={styles.submitButton}>
              Enviar Mensaje
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contacto;
