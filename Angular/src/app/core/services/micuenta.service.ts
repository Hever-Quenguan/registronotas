import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';

import { CuentaBancariaModel } from '../../model/cuenta-bancaria-model';
import { Observable } from 'rxjs';
import { DomainModel } from '../../model/domain-model';
import { MetodoPagoModel } from '../../model/metodoPagoModel';

import { TiendaModel } from '../../model/tienda-model';
import { environment } from 'src/environments/environment';
//import { FaneroConstants } from '../common/constants';

const AUTH_API = environment.apiUrl;
const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };

@Injectable({
  providedIn: 'root'
})
export class MiCuentaService {

  constructor(private http: HttpClient) { }

  // Obtener lista de bancos de PSE
  obtenerBancos() {
    return this.http.get<DomainModel[]>(`${AUTH_API}Domain/GetBanks`);
  }


  



    // Obtener lista de tipos de cuenta bancaria
    obtenerTiposCuenta() {
      return this.http.get<DomainModel[]>(`${AUTH_API}Domain/ObtenerTiposCuenta`);
       
      
    }

  // Obtener la cuenta bancaria
  obtenerCuentaBancaria(idTienda: string) {
    return this.http.get<CuentaBancariaModel>(`${AUTH_API}CuentaBancaria/ObtenerCuenta?IdTienda=1` + idTienda);
  }

  // Guardar la cuenta bancaria
   guardarCuentaBancaria(cuentaBancariaModel: CuentaBancariaModel): Observable<CuentaBancariaModel> {
    return this.http.post<CuentaBancariaModel>(`${AUTH_API}CuentaBancaria/AgregarCuenta`, cuentaBancariaModel, httpOptions); 
   }

  // Guardar la cuenta bancaria
  actualizarCuentaBancaria(cuentaBancaria: CuentaBancariaModel): Observable<CuentaBancariaModel> {
    return this.http.post<CuentaBancariaModel>(`${AUTH_API}CuentaBancaria/ActualizarCuenta`, cuentaBancaria, httpOptions);
  }

  

  //  activarCuentaAdmin(activaCuentaModel: any) {
  //    return this.http.post<any>(FaneroConstants.pathApi.ActivaCuentaAdmin, activaCuentaModel, httpOptions);
  //  }

  }

