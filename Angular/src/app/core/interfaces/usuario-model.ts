export interface UsuarioModel {
  id: any;
  codigo: string;
  numeroDocumento: string;
  login: string;
  password: string;
  nombre: string;
  apellido: string;
  fullNombres: string;
  estadoClave: number;
  intentos: number;
  tipoDocumentoId: number;
  perfilId: number;
  correoEmpresa: string;
  createUser: string;
  modifiedUser: string;
  estado: string;
  nombrePerfil: string;
  fullIdentificacion: string;
  nombreCargo: string;
  nombreEstado: string;
}

/**
 * Modelo para los filtros de búsqueda de usuarios
 */
export interface FiltrosUsuarioModel {
  nombre?: string;
  correo?: string;
  rol?: string;
  estado?: string;
}
