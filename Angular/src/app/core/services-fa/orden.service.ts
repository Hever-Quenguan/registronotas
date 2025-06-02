import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { FiltrosPedidoModel } from '../model/FiltrosPedidoModel.Class';
import { PedidoModel } from '../model/PedidoModel.Class';
import { FaneroConstants } from '../common/constants.class';
import { Observable } from 'rxjs';
import { stringify } from 'querystring';
const httpOptions = {headers: new HttpHeaders({'Content-Type': 'application/json' })};
@Injectable({
  providedIn: 'root'
})
export class OrdenService {
  filtros: FiltrosPedidoModel;

  constructor(private http: HttpClient) {

  }

  ListaPedidos(filtros:FiltrosPedidoModel){
    return this.http.post<PedidoModel[]>(FaneroConstants.pathApi.ListarPedidos,filtros, httpOptions);
  }
/*
  exportar(filtros:FiltrosPedidoModel,nombreArchivo:string,nombreHoja:string){
    return this.http.post<PedidoModel[]>(FaneroConstants.pathApi.ListarPedidos,filtros);
  }*/

  exportar(filtros:FiltrosPedidoModel,nombreArchivo:string,nombreHoja:string){
    let headers = new HttpHeaders().append("Authorization", "Bearer ")
    return this.http.post(FaneroConstants.pathApi.GenerarExcelPedidos+"?NombreArchivo="+nombreArchivo+"&NombreHoja="+nombreHoja,
          filtros,{responseType: 'blob',headers:headers});
  }

  exportarOrdenes(filtros:FiltrosPedidoModel,nombreArchivo:string,nombreHoja:string){
    let headers = new HttpHeaders().append("Authorization", "Bearer ")
    return this.http.post(FaneroConstants.pathApi.OrdenesPorTiendaExcel+"?NombreArchivo="+nombreArchivo+"&NombreHoja="+nombreHoja,
          filtros,{responseType: 'blob',headers:headers});
  }


  // ListaPedidosOpciones(filtros:FiltrosPedidoModel){
  //   return this.http.post<PedidoModel[]>(FaneroConstants.pathApi.ListarPedidosOpciones,filtros, httpOptions);
  // }

  // ListaPedidosOpciones(idTienda: string){
  //   return this.http.get<any[]>(FaneroConstants.pathApi.OrdenesPorTienda + idTienda);
  // }

  ListaPedidosOpciones(filtros:FiltrosPedidoModel){
    return this.http.post<any[]>(FaneroConstants.pathApi.OrdenesPorTienda,filtros);
  }

  ObtenerConteoEstadosDePedidos(idTienda: string) {
    return this.http.get(FaneroConstants.pathApi.conteosEstadoDePedidosOpciones + FaneroConstants.pathApi.idTienda);
  }

  obtenerDatosComprador(idOrden: string){
    return this.http.get<any>(FaneroConstants.pathApi.obtenerDatosComprador + idOrden);
  }

  obtenerDatosSeguimiento(){
    return 'En seguimiento';
  }

  guardaEstadoPagoEfectivoManual(idOrden: number, idEstadoOrden: number, idPersona: number) {
    this.filtros = new FiltrosPedidoModel();
    this.filtros.id = '';
    this.filtros.idOrden = idOrden;
    this.filtros.idEstadoOrden = idEstadoOrden;
    this.filtros.idPersona = idPersona;
    return this.http.post<any>(FaneroConstants.pathApi.guardaEstadoPagoEfectivoManual, this.filtros, httpOptions);
  }

  // CabiarEstado de una orden
  cambiarEstadoOrden(idOrden: number, idEstadoOrden: number, idPersona: number) {
    this.filtros = new FiltrosPedidoModel();
    this.filtros.id = '';
    this.filtros.idOrden = idOrden;
    this.filtros.idEstadoOrden = idEstadoOrden;
    this.filtros.idPersona = idPersona;
    return this.http.post<any>(FaneroConstants.pathApi.guardaEstadoPagoEfectivoManual, this.filtros);
  }

}
