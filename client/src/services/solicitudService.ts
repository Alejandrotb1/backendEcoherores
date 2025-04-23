import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:8000/api';

export interface SolicitudData {
  direccion_recojo: string;
  numero_referencia: string;
  detalles_casa: string;
  tipo_material: string;
  detalles_adicionales?: string;
  latitud: number;
  longitud: number;
  tamano_residuo: string;
  tipo_residuo: string;
}

export const solicitudService = {
  async createSolicitud(data: SolicitudData) {
    try {
      const response = await axios.post(`${API_URL}/solicitudes`, {
        ...data,
        fecha_solicitud: new Date().toISOString(),
      });
      return response.data;
    } catch (error) {
      throw error;
    }
  }
}; 