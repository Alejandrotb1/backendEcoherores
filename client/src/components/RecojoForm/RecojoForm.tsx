import React, { useState } from 'react';
import { RecojoFormData } from '../../types/recojoTypes';
import styles from './RecojoForm.module.css';

interface RecojoFormProps {
  onSubmit: (data: RecojoFormData) => void;
}

const RecojoForm: React.FC<RecojoFormProps> = ({ onSubmit }) => {
  const [formData, setFormData] = useState<RecojoFormData>({
    direccion: '',
    detallesCasa: '',
    tipoResiduo: 'orgánico',
    tamañoResiduo: 'pequeño',
    referencia: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className={styles.formContainer}>
      <h2 className={styles.title}>SOLICITUD DE RECOJO</h2>
      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.formGroup}>
          <label htmlFor="direccion">Dirección:</label>
          <input
            type="text"
            id="direccion"
            name="direccion"
            value={formData.direccion}
            onChange={handleChange}
            required
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="detallesCasa">Detalles de la casa:</label>
          <input
            type="text"
            id="detallesCasa"
            name="detallesCasa"
            value={formData.detallesCasa}
            onChange={handleChange}
            required
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="tipoResiduo">Tipo de residuo:</label>
          <select
            id="tipoResiduo"
            name="tipoResiduo"
            value={formData.tipoResiduo}
            onChange={handleChange}
            required
          >
            <option value="orgánico">Orgánico</option>
            <option value="reciclable">Reciclable</option>
            <option value="peligroso">Peligroso</option>
          </select>
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="tamañoResiduo">Tamaño de residuo:</label>
          <select
            id="tamañoResiduo"
            name="tamañoResiduo"
            value={formData.tamañoResiduo}
            onChange={handleChange}
            required
          >
            <option value="pequeño">Pequeño (1-5 kg)</option>
            <option value="mediano">Mediano (5-20 kg)</option>
            <option value="grande">Grande (+20 kg)</option>
          </select>
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="referencia">Número de referencia:</label>
          <input
            type="text"
            id="referencia"
            name="referencia"
            value={formData.referencia}
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit" className={styles.submitButton}>
          Enviar
        </button>

        <p className={styles.helperText}>
          Rellena todos los espacios<br />
          para enviar tu solicitud
        </p>
      </form>
    </div>
  );
};

export default RecojoForm;