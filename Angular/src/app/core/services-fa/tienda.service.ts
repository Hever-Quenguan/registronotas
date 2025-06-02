import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { FaneroConstants } from '../interfaces/constants.class';
import { ConteoVisitasTiendaModel } from '../../model-fa/ConteoVisitasTiendaModel.Class';

import { Observable } from 'rxjs';
import { MiDiniero } from '../../model-fa/MiDinieroModel.Class';
import { TiendaModel } from '../../model-fa/tienda-model';
import { environment } from 'src/environments/environment';
import { DomainModel } from '../../model-fa/domain-model';
import { DomicilioModel } from '../../model-fa/DomicilioModel.Class';
import { PasarelaModel } from '../../model-fa/PasarelaModel.Class';
import { CorreoTiendaModel } from '../../model-fa/CorreoTiendaModel.Class';
import { ConsumoTiendaModel } from '../../model-fa/ConsumoTiendaModel.Class';


const AUTH_API = environment.apiUrl;

const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };

@Injectable({
  providedIn: 'root'
})
export class TiendaService {


  constructor( private http: HttpClient) { }

  obtenerConteosVisitas(idTienda: string){
    //return this.http.get<ConteoVisitasTiendaModel[]>(FaneroConstants.pathApi.ConteoVisitas + idTienda);
    return this.http.get<ConteoVisitasTiendaModel[]>(`${AUTH_API}Tienda/ObtenerConteoVisitas?idtienda=`+ idTienda);
    
  }

  obtenerMiDiniero(){
    
    //return this.http.get<MiDiniero[]>(FaneroConstants.pathApi.MiDiniero);
    return this.http.get<MiDiniero[]>(`${AUTH_API}Tienda/MiDinero?idtienda=1`);
  }

     // Cargar documento representante legal
     cargarDocRepresentanteLegal(formData: FormData, idTienda:string) {
      
      return this.http.post(`${AUTH_API}Tienda/GuardarDocVerificacion?IdTienda=` + idTienda + '&Documento=DocRepresentanteLegal', formData);
    }

   // Cargar documento Rut
    cargarDocRut(formData: FormData, idTienda:string) {
      return this.http.post(FaneroConstants.pathApi.DocumentoRut + FaneroConstants.pathApi.idTienda + '&Documento=DocRUT', formData);
    }

  // Cargar Extracto Bancario
    cargarDocExtractoBancario(formData: FormData, idTienda:string) {
      return this.http.post(FaneroConstants.pathApi.DocumentoExtractoBancario + FaneroConstants.pathApi.idTienda + '&Documento=DocExtractoBancario', formData);
    }

    obtenerTiendaPorUsuario(usuario: string){
      return this.http.get<TiendaModel>(FaneroConstants.pathApi.obtenerInfoTiendaPorUsuario + usuario);
    }

    obtenerConsumoSitio(idTienda:number){
      let url=FaneroConstants.pathApi.ObtenerServicioSitio+FaneroConstants.pathApi.idTienda;
      return this.http.get<ConsumoTiendaModel>(url,httpOptions);
    }

    actulizarConsumoSitio(idTienda:number,state:Boolean){
      let statestr:string=String(state);
      let url=FaneroConstants.pathApi.ActualizarServicioSitio.replace("{tienda}",FaneroConstants.pathApi.idTienda.toString())
      url=url.replace("{estado}",statestr);
      return this.http.post<any>(url,httpOptions);
    }

       // Guardar la informavión del vendedor/Tienda
   GuardarTienda(tienda: TiendaModel): Observable<number> {
    return this.http.post<number>(FaneroConstants.pathApi.GuardarTienda, tienda, httpOptions);
   }

   CargarLogo(id: number,file:File): Observable<number> {
      const options = {
        headers: new HttpHeaders({
          "Content-Type": "multipart/form-data",
          "Accept":"*/*",
          "Content-Length":"<calculated when request is sent>"
        })
      };

      const formData = new FormData();
      formData.append('uploads[]',file,file.name);
      return this.http.post<number>(FaneroConstants.pathApi.CargarLogo+id, formData,options );
   }

   // Guardar la informavión del vendedor/Tienda
   ActualizarTienda(tienda: TiendaModel): Observable<TiendaModel> {
    return this.http.post<TiendaModel>(FaneroConstants.pathApi.ActualizarTienda, tienda, httpOptions);
   }

   // obtener estado de documento verificar información
   obtenerEstadoDocumento(idTienda: string){
    return this.http.get<any>(FaneroConstants.pathApi.EstadoDocumento + FaneroConstants.pathApi.idTienda);
  }

  GuardarLogoTienda(formData: FormData, id: number): Observable<number> {
    return this.http.post<any>(FaneroConstants.pathApi.CargarLogo+id, formData);
 }

 obtenerTienda(idtienda:number){
  return this.http.get<TiendaModel>(FaneroConstants.pathApi.obtenerInformTienda + FaneroConstants.pathApi.idTienda);
 }

 obtenerVisitasTienda(idTienda:string){
  return this.http.get<ConteoVisitasTiendaModel>(FaneroConstants.pathApi.ConteoDeVisitasTienda + FaneroConstants.pathApi.idTienda,httpOptions);
 }

 guardarCorreo(correoTienda:CorreoTiendaModel){
  return this.http.post<CorreoTiendaModel[]>(FaneroConstants.pathApi.GuardarCorreo,correoTienda,httpOptions);
 }


 obtenerCorreos(idTienda:number){
  return this.http.get<CorreoTiendaModel[]>(FaneroConstants.pathApi.ObtenerCorreos+FaneroConstants.pathApi.idTienda,httpOptions);
 }



 eliminarCorreo(id:number){
  return this.http.post<CorreoTiendaModel[]>(FaneroConstants.pathApi.EliminarCorreo + id,httpOptions);
 }

 obtenerPayU(idTienda:number){
  return this.http.get<PasarelaModel>(FaneroConstants.pathApi.obtenerPayU + FaneroConstants.pathApi.idTienda);
 }

 actualizarPayU(pasarela:PasarelaModel){
   return this.http.post<any>(FaneroConstants.pathApi.actualizarPayU,pasarela,httpOptions);
 }

 obtenerVentasTienda(idTienda:string){
  return this.http.get<ConteoVisitasTiendaModel>(FaneroConstants.pathApi.ConteoDeVentasTienda + FaneroConstants.pathApi.idTienda,httpOptions);
 }

 obtenerMetodosPagoTienda(){
  return this.http.get<DomainModel[]>(FaneroConstants.pathApi.ObtenerPasarelasPagoDisponibles);
 }

 actualizarDomicilio(domicilio:DomicilioModel){
  return this.http.post<any>(FaneroConstants.pathApi.ActualizarDomicilioTienda,domicilio,httpOptions);
 }

 ObtenerTiendasConPasarelasPago(){
  return this.http.get<DomainModel[]>(FaneroConstants.pathApi.ObtenerTiendasConPasarelasPago);
 }

 activarDesactivarMetodosPago(metodoPago: any,estado:string) {
   //debugger;
   metodoPago.auxiliar2=estado
   if (metodoPago.auxiliar3 !== null) {
     metodoPago.auxiliar3=metodoPago.auxiliar3.toString()
   }else{
    metodoPago.auxiliar3='-1'
   }
   metodoPago.valor=metodoPago.valor.toString()
  return this.http.post<any>(FaneroConstants.pathApi.InsertarPasarelasPagoTiendaActivaDesactiva, metodoPago, httpOptions);
}

}
