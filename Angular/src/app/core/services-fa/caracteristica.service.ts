import { Injectable } from '@angular/core';
import { FaneroConstants } from '../interfaces/constants.class';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
const httpOptions = {headers: new HttpHeaders({'Content-Type': 'application/json' })};
@Injectable({
  providedIn: 'root'
})
export class CaracteristicaService {

  constructor(private http: HttpClient) { }


  obtenerCaracteristicas(palabra:string):Observable<string[]>{
   
    return this.http.get<string[]>(FaneroConstants.pathApi.ObtenerCaracteristicasAuto+palabra,httpOptions);
  }

  registrarCaracteristica(producto:any){
    return this.http.post<boolean>(FaneroConstants.pathApi.GuardarCaracteristicas,producto,httpOptions);
  }
//
}
