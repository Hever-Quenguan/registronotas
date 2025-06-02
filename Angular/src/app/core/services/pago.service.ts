import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { FaneroConstants } from '../interfaces/constants';
import { MetodoPagoModel } from '../../model//metodoPagoModel';
import { environment } from "src/environments/environment";

const AUTH_API = environment.apiUrl;

const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
@Injectable({
  providedIn: 'root'
})
export class PagoService {

  constructor(private http: HttpClient) { }

  obtenerMetodosPago(){    
    return this.http.get<MetodoPagoModel[]>(`${AUTH_API}Pago/ListarMetodosPago`);   
  }

  ActualizarMetodoPago(filtro: MetodoPagoModel) {
    console.log('Datos enviados:', filtro);
    return this.http.post<MetodoPagoModel[]>(`${AUTH_API}Pago/ActivarDesactivarMetodosPago`, filtro, httpOptions)
    
  }
  




}



