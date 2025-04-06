export type RecojoFormData = {
    direccion: string;
    detallesCasa: string;
    tipoResiduo: 'orgánico' | 'reciclable' | 'peligroso';
    tamañoResiduo: 'pequeño' | 'mediano' | 'grande';
    referencia: string;
  };