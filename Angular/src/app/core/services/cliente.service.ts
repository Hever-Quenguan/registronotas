import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { environment } from 'src/environments/environment';
import { ClienteModel } from '../interfaces/cliente_model';
import { ResponseApi } from '../interfaces/response-api';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  private readonly apiUrl: string = environment.apiUrl;

  constructor(private readonly http: HttpClient) { }

  getLista(controllerName: string) {
    return this.http.get(this.apiUrl + controllerName)
  }

  getClienteById(controllerName: string, id: number) {
    return this.http.get<ClienteModel>(`${this.apiUrl + controllerName}?Id=${id}`)
  }

  createCliente(controllerName: string, objeto: ClienteModel) {
    return this.http.post<ResponseApi>(this.apiUrl + controllerName, objeto)
  }

  updateCliente(controllerName: string, objeto: ClienteModel) {
    return this.http.put<ResponseApi>(this.apiUrl + controllerName, objeto)
  }

  deleteCliente(controllerName: string, id: number) {
    return this.http.delete<ResponseApi>(`${this.apiUrl + controllerName}?Id=${id}`)
  }
}
