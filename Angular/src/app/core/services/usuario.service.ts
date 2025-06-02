import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


import { ResponseApi } from '../interfaces/response-api';
import { UsuarioModel } from '../interfaces/usuario-model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private readonly apiUrl: string = environment.apiUrl;

  constructor(private readonly http: HttpClient) { }

  getLista(controllerName: string) {
    return this.http.get(this.apiUrl + controllerName)
  }

  getUsuarioById(controllerName: string, id: number) {
    return this.http.get<UsuarioModel>(`${this.apiUrl + controllerName}?Id=${id}`)
  }

  createUsuario(controllerName: string, objeto: UsuarioModel) {
    return this.http.post<ResponseApi>(this.apiUrl + controllerName, objeto)
  }

  updateUsuario(controllerName: string, objeto: UsuarioModel) {
    return this.http.put<ResponseApi>(this.apiUrl + controllerName, objeto)
  }

  resetPassword(id: number, newPassword: string) {
    return this.http.post<ResponseApi>(`${this.apiUrl}usuario/resetPassword`, { id, newPassword });
  }

  deleteUsuario(controllerName: string, id: number) {

    return this.http.delete<ResponseApi>(`${this.apiUrl + controllerName}?Id=${id}`)
  }
}
