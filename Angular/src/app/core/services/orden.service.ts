import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { FiltrosPedidoModel } from '../../model//FiltrosPedidoModel.Class';
import { PedidoModel } from '../../model//PedidoModel.Class';
import { Observable } from 'rxjs';
import { stringify } from 'querystring';
import { FaneroConstants } from '../interfaces/constants';
import { environment } from "src/environments/environment";

const AUTH_API = environment.apiUrl;

const httpOptions = {headers: new HttpHeaders({'Content-Type': 'application/json','accept': '*/*' })};
@Injectable({
  providedIn: 'root'
})
export class OrdenService {

  constructor(private http: HttpClient) {

  }

  ListaPedidosInformePagosMarca(filtros:FiltrosPedidoModel){
      console.log(filtros);
    //return this.http.post<any[]>(FaneroConstants.pathApi.ListarOrdenConMarca,filtros, httpOptions);
     return this.http.post<any[]>(`${AUTH_API}Orden/ListarOrdenConMarca`, filtros, httpOptions);
  }
  

  obtenerConteosEstadoPagoMarcas(filtros: FiltrosPedidoModel){
    //return this.http.post<any[]>(FaneroConstants.pathApi.ConteoOrdenConMarca, filtros, httpOptions);
    return this.http.post<any[]>(`${AUTH_API}Orden/ConteoOrdenConMarca`, filtros, httpOptions);


  }

/*
  exportar(filtros:FiltrosPedidoModel,nombreArchivo:string,nombreHoja:string){
    return this.http.post<PedidoModel[]>(FaneroConstants.pathApi.ListarPedidos,filtros);
  }*/

  exportar(filtros:FiltrosPedidoModel,nombreArchivo:string,nombreHoja:string){
    // let headers = new HttpHeaders().append("Authorization", "Bearer ")
    // return this.http.post(FaneroConstants.pathApi.GenerarExcelPedidos + "?NombreArchivo="+nombreArchivo+"&NombreHoja="+nombreHoja,
    //       filtros,{responseType: 'blob',headers:headers});
          let headers = new HttpHeaders().append("Authorization", "Bearer ")
          return this.http.post(`${AUTH_API}Orden/ListarPedidoExcel` + "?NombreArchivo="+nombreArchivo+"&NombreHoja="+nombreHoja,
          filtros,{responseType: 'blob',headers:headers});
  }

  exportarInformePagoMarcas(filtros:FiltrosPedidoModel,nombreArchivo:string,nombreHoja:string){
    // let headers = new HttpHeaders().append("Authorization", "Bearer ")
    // return this.http.post(FaneroConstants.pathApi.ListarOrdenConMarcaExcel+"?NombreArchivo="+nombreArchivo+"&NombreHoja="+nombreHoja,
    //       filtros,{responseType: 'blob',headers:headers});

        let headers = new HttpHeaders().append("Authorization", "Bearer ")
        return this.http.post(`${AUTH_API}Orden/ListarOrdenConMarcaExcel` +"?NombreArchivo="+nombreArchivo+"&NombreHoja="+nombreHoja,
                filtros,{responseType: 'blob',headers:headers});
  }
  
////////////////////////////NO HAY/////////////////////////////////////
  ListaPedidosOpciones(filtros:FiltrosPedidoModel){
   // return this.http.post<PedidoModel[]>(FaneroConstants.pathApi.ListarPedidosOpciones,filtros, httpOptions);
    return this.http.post<PedidoModel[]>(`${AUTH_API}Orden/ListarPedido`,filtros, httpOptions);
  }

  ObtenerConteoEstadosDePedidos(idTienda: string) {
    //return this.http.get(FaneroConstants.pathApi.conteosEstadoDePedidosOpciones + idTienda);
    return this.http.get( `${AUTH_API}Orden/ObtenerConteoEstadosPedido` + idTienda);
   
  }

  obtenerDatosComprador(idOrden: string){
    //return this.http.get<any>(FaneroConstants.pathApi.obtenerDatosComprador 
    return this.http.get( `${AUTH_API}Orden/ListarDatosComprador` + idOrden);
  }

  obtenerDatosSeguimiento(){
    return 'Página En Construcción';
  }
///////////////NOHAY///////////////////////////////
  detalleInformePagoTiendas(idOrden: string){
    //ñreturn this.http.get(FaneroConstants.pathApi.DetalleOrdenConMarcaPorOrden + idOrden);
    return this.http.get( `${AUTH_API}Orden/DetalleOrdenConMarcaPorIdOrden?idOrden=` + idOrden);
  
  }

}
