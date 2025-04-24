export interface RecojoFormData {
  direccion: string;
  detallesCasa: string;
  tipoResiduo: string;
  tamañoResiduo: string;
  referencia: string;
  carnet: string;
  nombreCompleto: string;
  ubicacion?: {
    lat: number;
    lng: number;
  } | null;
}