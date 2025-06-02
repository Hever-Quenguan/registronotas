import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable, throwError } from 'rxjs';
import { FacturaModel } from '../interfaces/factura-model';
import { ContratoModel } from '../interfaces/contrato-model';
import { catchError, tap } from 'rxjs/operators';
import { ResponseApi } from '../interfaces/response-api';

@Injectable({
  providedIn: 'root'
})
export class FacturaService {
  private readonly apiUrl: string = environment.apiUrl.replace(/\/$/, '');

  constructor(private readonly http: HttpClient) { }

  getLista<T>(controllerName: string): Observable<T[]> {
    return this.http.get<T[]>(`${this.apiUrl}/${controllerName}`).pipe(
      catchError(this.handleError)
    );
  }

  getFacturasAsociadas(contratoId: number): Observable<FacturaModel[]> {
    const url = `${this.apiUrl}/contratos/GetContratoFacturasAsociadas?id=${contratoId}`;
    console.log("📡 Llamando a:", url);
    return this.http.get<FacturaModel[]>(url).pipe(
      catchError(this.handleError)
    );
  }

  obtenerFacturas(controllerName: string, id: number): Observable<ContratoModel> {
    const url = `${this.apiUrl}/${controllerName}?Id=${id}`;
    console.log("📡 Llamando a:", url);
    return this.http.get<ContratoModel>(url).pipe(
      catchError(this.handleError)
    );
  }

  obtenerFacturasMayorValor(contratoId: number): Observable<FacturaModel[]> {
    const url = `${this.apiUrl}/contratos/GetFacturasMayorValor?contratoId=${contratoId}`;
    console.log("📡 Llamando a:", url);
    return this.http.get<FacturaModel[]>(url).pipe(
      catchError(this.handleError)
    );
  }

  getContratoFacturaAsociadas(controllerName: string, id: number): Observable<FacturaModel[]> {
    return this.http.get<FacturaModel[]>(`${this.apiUrl}/${controllerName}?id=${id}`).pipe(
      catchError(this.handleError)
    );
  }

  getContratoById(id: number): Observable<ContratoModel> {
    const url = `${this.apiUrl}/contratos/GetContrato?Id=${id}`;
    console.log("URL de la API:", url);

    return this.http.get<ContratoModel>(url).pipe(
      tap((data) => console.log(" Datos del contrato recibidos:", data)),
      catchError(this.handleError)
    );
  }

  getFacturas(controllerName: string): Observable<FacturaModel[]> {
    return this.http.get<FacturaModel[]>(`${this.apiUrl}/${controllerName}`).pipe(
      catchError(this.handleError)
    );
  }

  getFacturaById(controllerName: string, id: number): Observable<FacturaModel> {
    return this.http.get<FacturaModel>(`${this.apiUrl}/${controllerName}?Id=${id}`).pipe(
      catchError(this.handleError)
    );
  }

  getFacturasByContrato(controllerName: string, contratoId: number): Observable<FacturaModel[]> {
    return this.http.get<FacturaModel[]>(`${this.apiUrl}/${controllerName}?ContratoId=${contratoId}`).pipe(
      catchError(this.handleError)
    );
  }

  crearFactura(controllerName: string, factura: FacturaModel): Observable<ResponseApi> {
    return this.http.post<ResponseApi>(`${this.apiUrl}/${controllerName}`, factura).pipe(
      catchError(this.handleError)
    );
  }

  actualizarFactura(controllerName: string, factura: FacturaModel): Observable<ResponseApi> {
    return this.http.put<ResponseApi>(`${this.apiUrl}/${controllerName}`, factura).pipe(
      catchError(this.handleError)
    );
  }

  eliminarFactura(controllerName: string, id: number): Observable<ResponseApi> {
    return this.http.delete<ResponseApi>(`${this.apiUrl}/${controllerName}?Id=${id}`).pipe(
      catchError(this.handleError)
    );
  }

  private handleError(error: HttpErrorResponse): Observable<never> {
    console.error('X Error en la API:', error);

    if (error.status === 404) {
      console.error('Recurso no encontrado');
    } else if (error.status === 500) {
      console.error('Error interno del servidor');
    }

    return throwError(() => error);
  }
}