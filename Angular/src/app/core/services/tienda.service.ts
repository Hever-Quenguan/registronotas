import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { FaneroConstants } from "../interfaces/constants";

import { FiltroTiendaModel } from "../../model/filtroTiendaModel";
import { Observable } from "rxjs";
import { TiendaModel } from "../../model/tienda-model";
import { SuscripcionModel } from "../../model/suscripcionModel";
import { CategoriaModel } from "../../model/CategoriaModel.Class";
import { environment } from "src/environments/environment";

const AUTH_API = environment.apiUrl;

const httpOptions = {
  headers: new HttpHeaders({ "Content-Type": "application/json" }),
};

@Injectable({
  providedIn: "root",
})
export class TiendaService {
  constructor(private http: HttpClient) {}

  // muestra una lista de todas las tiendas
  obtenerTiendas() {
    return this.http.get<TiendaModel[]>(`${AUTH_API}Tienda/ObtenerTiendas`,httpOptions);

  }

  // Obtiene una tienda específica por su ID
  obtenerTiendaXId(id: number) {
    //return this.http.get<TiendaModel>(FaneroConstants.pathApi.ObtenerTiendasXid + id,httpOptions);
    //return this.http.get<TiendaModel>(`${AUTH_API}Tienda/ObtenerInformacionTienda`+ id,httpOptions);
    return this.http.get<TiendaModel>(`${AUTH_API}Tienda/ObtenerInformacionTienda/${id}`, httpOptions);
  }

 


  // Obtiene una lista de tiendas aplicando filtros
  obtenerTiendasFiltro(filtro: FiltroTiendaModel) {
    return this.http.post<TiendaModel[]>(`${AUTH_API}Tienda/FiltrarTiendas`,filtro,httpOptions);
    //return this.http.post<TiendaModel[]>(FaneroConstants.pathApi.ObtenerTiendasFiltro,filtro,httpOptions );
  }

  // Guarda una nueva tienda y devuelve el ID de la tienda guardada
  GuardarTienda(tienda: TiendaModel): Observable<number> {
   // return this.http.post<number>(FaneroConstants.pathApi.GuardarTienda,tienda,httpOptions);
    return this.http.post<number>(`${AUTH_API}Tienda/AgregarTienda`,tienda,httpOptions);
  }

  // Sube el logo de la tienda
  CargarLogo(id: number, file: File): Observable<number> {
    const options = {headers: new HttpHeaders({"Content-Type": "multipart/form-data",Accept: "*/*",
    "Content-Length": "<calculated when request is sent>",
      }),
    };

    const formData = new FormData();
    formData.append("uploads[]", file, file.name);
    return this.http.post<number>(`${AUTH_API}Tienda/CargarLogo` + id,formData,options);
  }



  // Actualiza la información de una tienda
  ActualizarTienda(tienda: TiendaModel): Observable<TiendaModel> {
    //return this.http.post<TiendaModel>(FaneroConstants.pathApi.ActualizarTienda, tienda, httpOptions);
    return this.http.post<TiendaModel>(`${AUTH_API}Tienda/ActualizarTienda`, tienda,httpOptions);
  }

 //////////////////////////////////////////////////NOHAY/////////////////////////////////////////
  // Sube el documento del representante legal de una tienda
   cargarDocRepresentanteLegal(formData: FormData, idTienda: string) {
    return this.http.post(`${AUTH_API}Tienda/GuardarDocVerificacion?IdTienda=` +idTienda +"&Documento=DocRepresentanteLegal",formData);
   }

   //////////////////////////////////////////////////NOHAY/////////////////////////////////////////
  // // Sube el documento RUT de una tienda
   cargarDocRut(formData: FormData, idTienda: string) {
     return this.http.post(`${AUTH_API}Tienda/GuardarDocVerificacion?IdTienda=` + idTienda + "&Documento=DocRUT",formData);
   }

  // Obtiene una lista de todas las categorías de productos
  obtenerCategorias() {
    return this.http.get<CategoriaModel[]>(`${AUTH_API}Categoria/ObtenerTodasCategorias?IdTienda=`);
    // return this.http.get<CategoriaModel[]>(
    //   FaneroConstants.pathApi.ObtenerCategoriasProductos,
    //   httpOptions
    // );
  }

 
  // crearCategorias(categoria: CategoriaModel) {
  //   return this.http.post<CategoriaModel>(
  //     FaneroConstants.pathApi.CrearCategoriaProductos,
  //     categoria,
  //     httpOptions
  //   );
  // }

 // Crea una nueva categoría de productos
 crearCategorias(categoria: CategoriaModel) {
  return this.http.post<CategoriaModel>(`${AUTH_API}Categoria/CrearCategoria`, categoria);
}


  // Actualiza una categoría de productos 
  actualizarCategorias(categoria: CategoriaModel) {
    return this.http.post<CategoriaModel>(`${AUTH_API}Categoria/ActualizarCategoria`, categoria);
  }
  // actualizarCategorias(categoria: CategoriaModel) {
  //   return this.http.post<CategoriaModel>(
  //     FaneroConstants.pathApi.ActualizarCategoriaProductos,
  //     categoria,
  //     httpOptions
  //   );
  // }

  // Sube el extracto bancario de una tienda
   cargarDocExtractoBancario(formData: FormData, idTienda: string) {
     return this.http.post( `${AUTH_API}Tienda/GuardarDocVerificacion?IdTienda=` + idTienda +"&Documento=DocExtractoBancario",formData);
   }


//////////////////////////////////////////////////NOHAY/////////////////////////////////////////
  // Obtiene la información de una tienda asociada a un usuario
  obtenerTiendaPorUsuario(usuario: string) {
     
    return this.http.get<TiendaModel>(`${AUTH_API}Tienda/ObtenerTienda?Usuario=` + usuario);
  }


  

  // Marca el pago de una suscripción para una tienda
  pagarSuscripcion(suscripcion: SuscripcionModel) {
    return this.http.post<any>(`${AUTH_API}Tienda/MarcarPagoSuscripcion`,suscripcion,httpOptions);
  }

  // Verifica si un email ya está registrado en el sistema
  verificaExistenciaEmail(email: string) {
    return this.http.get<any>(`${AUTH_API}persona/ExisteEmail?email=` + email);
  }
  

  //////////////////////////////////////////////////NO COINCIDE gestion tienda/////////////////////////////////////////
  // Obtiene la información de una tienda por su ID
  obtenerTienda(idtienda: number) {
    return this.http.get<TiendaModel>(`${AUTH_API}Tienda/ObtenerInformacionTienda?IdTienda=`+ idtienda );
   // return this.http.get<TiendaModel>(FaneroConstants.pathApi.obtenerInformTienda + idtienda);
  }

  // Sube el logo de una tienda
  GuardarLogoTienda(formData: FormData, id: number): Observable<number> {
    return this.http.post<any>(`${AUTH_API}Tienda/CargarLogo?idTienda=` + id,formData);
  }

  // Obtiene el estado de los documentos de una tienda
  obtenerEstadoDocumento(idTienda: string) {
    return this.http.get<any>(`${AUTH_API}Tienda/ObtenerVerificacionDocumentos?idtienda=` + idTienda);
  }
}
