import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ResponseApi } from '../interfaces/response-api';
import { ListacomboModel } from '../interfaces/listacombo-model';
import { TipoCategoria } from '../interfaces/tipo-categoria';

@Injectable({
  providedIn: 'root'
})
export class TipoCategoriaService {

  private readonly apiUrl: string = environment.apiUrl;

  constructor(private readonly http: HttpClient) { }

  getLista(controllerName: string) {
    return this.http.get(this.apiUrl + controllerName)
  }
////////////////////////////////////////////////////////////////////////////
  getTipoCategoriaById(controllerName: string, id: number) {
    return this.http.get<TipoCategoria>(`${this.apiUrl + controllerName}?Id=${id}`)
  }
///////////////////////////////////////////////////////////////////////////
  getListaCombo(controllerName: string) {
    return this.http.get<ListacomboModel>(this.apiUrl + controllerName)
  }

  createTipoCategoria(controllerName: string, objeto: TipoCategoria) {
    return this.http.post<ResponseApi>(this.apiUrl + controllerName, objeto)
  }

  updateTipoCategoria(controllerName: string, objeto: TipoCategoria) {
    return this.http.put<ResponseApi>(this.apiUrl + controllerName, objeto)
  }

  deleteTipoCategoria(controllerName: string, id: number) {
    return this.http.delete<ResponseApi>(`${this.apiUrl + controllerName}?Id=${id}`)
  }
}

