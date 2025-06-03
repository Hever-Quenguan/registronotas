import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { FaneroConstants } from '../common/constants.class';
import { CuentaBancariaModel } from '../model/cuenta-bancaria-model';
import { Observable } from 'rxjs';
import { DomainModel } from '../model/domain-model';
import { TiendaModel } from '../model/tienda-model';

const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };

@Injectable({
  providedIn: 'root'
})
export class MiCuentaService {

  constructor(private http: HttpClient) { }

  // Obtener lista de bancos de PSE
  obtenerBancos() {
    return this.http.get<DomainModel[]>(FaneroConstants.pathApi.Bancos);
  }

    // Obtener lista de tipos de cuenta bancaria
    obtenerTiposCuenta() {
      return this.http.get<DomainModel[]>(FaneroConstants.pathApi.TiposCuenta);
    }

  // Obtener la cuenta bancaria
  obtenerCuentaBancaria(idTienda: string) {
    return this.http.get<CuentaBancariaModel>(FaneroConstants.pathApi.ObtenerCuentaBancaria + FaneroConstants.pathApi.idTienda);
  }

  // Guardar la cuenta bancaria
  guardarCuentaBancaria(cuentaBancariaModel: CuentaBancariaModel): Observable<CuentaBancariaModel> {
    return this.http.post<CuentaBancariaModel>(FaneroConstants.pathApi.GuardarCuentaBancaria, cuentaBancariaModel, httpOptions);
  }

  // Guardar la cuenta bancaria
  actualizarCuentaBancaria(cuentaBancaria: CuentaBancariaModel): Observable<CuentaBancariaModel> {
    return this.http.post<CuentaBancariaModel>(FaneroConstants.pathApi.ActualizarCuentaBancaria, cuentaBancaria, httpOptions);
  }

  }

