import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { environment } from 'src/environments/environment';
import { ResponseApi } from '../interfaces/response-api';
import { PerfilModel } from '../../model/perfilModel';
import { PerfilPermisoModel } from '../../model/perfilPermisoModel';

const AUTH_API = environment.apiUrl;

@Injectable({
  providedIn: 'root'
})
export class PerfilService {

  private readonly apiUrl: string = environment.apiUrl;

  constructor(private readonly http: HttpClient) { }

   getLista(controllerName: string) {
     return this.http.get(this.apiUrl + controllerName)
   }

   getPerfilById(controllerName: string, id: number) {
     return this.http.get<PerfilModel>(`${this.apiUrl + controllerName}?Id=${id}`)
  }

   createPerfil(controllerName: string, objeto: PerfilModel) {
     return this.http.post<ResponseApi>(this.apiUrl + controllerName, objeto)
   }

   updatePerfil(controllerName: string, objeto: PerfilModel) {
     return this.http.put<ResponseApi>(this.apiUrl + controllerName, objeto)
   }

   deletePerfil(controllerName: string, id: number) {
     return this.http.delete<ResponseApi>(`${this.apiUrl + controllerName}?Id=${id}`)
   }

   getListaCombo(controllerName: string) {
     return this.http.get(this.apiUrl + controllerName)
   }
  obtenerPerfiles(perfil: any) {
    return this.http.post<PerfilModel[]>(`${this.apiUrl}perfiles/ListaPerfiles`, perfil);
  }
  
  listarPermisos(item: any) {
    return this.http.post<PerfilPermisoModel>(`${this.apiUrl}permisos/listaPermisos`, item);
  }
 
  asignarPermisos(permisoRequest: any[]) {
    return this.http.post<any[]>(`${this.apiUrl}permisos/AsignarPermisos`, permisoRequest);
  }
  
  eliminarPerfil(id: number) {
    return this.http.post<PerfilModel[]>(`${this.apiUrl}perfiles/EliminarPerfil`, { id });
  }
  crearPerfil(perfil: PerfilModel) {
    return this.http.post(`${this.apiUrl}perfiles/AgregarPerfil`, perfil);
  }
  
  actualizarPerfil(perfil: PerfilModel) {
    return this.http.post(`${this.apiUrl}perfiles/ActualizarPerfil`, perfil);
  }
  
 }
