import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { environment } from 'src/environments/environment';
import { ResponseApi } from '../interfaces/response-api';
import { ContratoModel } from '../interfaces/contrato-model';
import { catchError, Observable, throwError } from 'rxjs';

export interface FacturafFilter {
  ContratoId: number;
}

@Injectable({
  providedIn: 'root'
})

export class ContratoService {
  obtenerFacturas(controllerName: any, contratoId: number) {
    throw new Error('Method not implemented.');
  }

  private readonly apiUrl: string = environment.apiUrl;

  constructor(private readonly http: HttpClient) { }

  getLista(controllerName: string) {
    return this.http.get(this.apiUrl + controllerName)
  }
  

  getContratoById(controllerName: string, id: number): Observable<ContratoModel> {
    const url = `${this.apiUrl}/${controllerName}?Id=${id}`;
    return this.http.get<ContratoModel>(url)
      .pipe(
        catchError(error => {
          console.error(`Error al obtener el contrato con ID ${id}:`, error);
          return throwError(() => error);
        })
      );
  }
  getContratoFacturaAsociadas(endpoint: string, id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${endpoint}?id=${id}`);
  }
  
  

  createContrato(controllerName: string, objeto: ContratoModel) {
    return this.http.post<ResponseApi>(this.apiUrl + controllerName, objeto)
  }

  updateContrato(controllerName: string, objeto: ContratoModel) {
    return this.http.put<ResponseApi>(this.apiUrl + controllerName, objeto)
  }

  deleteContrato(controllerName: string, id: number) {
    return this.http.delete<ResponseApi>(`${this.apiUrl + controllerName}?Id=${id}`)
  }

  getListaFiltro(controllerName: string, filtro: FacturafFilter) {
    return this.http.post(this.apiUrl + controllerName, filtro)
  }
}
