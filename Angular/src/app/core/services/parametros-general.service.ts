import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ResponseApi } from '../interfaces/response-api';
import { ParametroGeneral } from '../interfaces/parametro-general';
import { ListacomboModel } from '../interfaces/listacombo-model';

@Injectable({
  providedIn: 'root'
})
export class ParametrosGeneralService {

  private readonly apiUrl: string = environment.apiUrl;

  constructor(private readonly http: HttpClient) { }

  getLista(controllerName: string) {
    return this.http.get(this.apiUrl + controllerName)
  }

  getParametroById(controllerName: string, id: number) {
    return this.http.get<ParametroGeneral>(`${this.apiUrl + controllerName}?Id=${id}`)
  }

  getParametroByCategoriaId(controllerName: string, id: number) {
    return this.http.get<ListacomboModel>(`${this.apiUrl + controllerName}?Id=${id}`)
  }

  createParametro(controllerName: string, objeto: ParametroGeneral) {
    return this.http.post<ResponseApi>(this.apiUrl + controllerName, objeto)
  }

  updateParametro(controllerName: string, objeto: ParametroGeneral) {
    return this.http.put<ResponseApi>(this.apiUrl + controllerName, objeto)
  }

  deleteParametro(controllerName: string, id: number) {
    return this.http.delete<ResponseApi>(`${this.apiUrl + controllerName}?Id=${id}`)
  }
}

