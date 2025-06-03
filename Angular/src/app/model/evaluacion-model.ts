export interface Evaluacion {
  id?: number;
  clase: number;         // ID de la clase asociada
  titulo: string;
  descripcion: string;
  fecha: string;         // formato: 'YYYY-MM-DD'
  ponderacion: number;
}
