import React, { useState } from 'react';
import Map from '../components/Map/Map';
import RecojoForm from '../components/RecojoForm/RecojoForm';
import { RecojoFormData } from '../types/recojoTypes';
import styles from './Solicitud.module.css';

interface Location {
  lat: number;
  lng: number;
}

const SolicitudPage: React.FC = () => {
  const [selectedLocation, setSelectedLocation] = useState<Location | null>(null);

  const handleSubmit = (data: RecojoFormData) => {
    console.log('Datos enviados:', {
      ...data,
      ubicacion: selectedLocation
    });
    // Aquí iría la conexión con tu backend
  };

  const handleLocationSelect = (location: Location) => {
    setSelectedLocation(location);
    console.log('Ubicación seleccionada:', location);
  };

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <RecojoForm onSubmit={handleSubmit} />
        <Map onLocationSelect={handleLocationSelect} />
      </div>
    </div>
  );
};

export default SolicitudPage;