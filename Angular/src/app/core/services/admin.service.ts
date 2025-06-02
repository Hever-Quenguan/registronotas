import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { UsuarioModel } from '../../model/usuario-model';
import { FaneroConstants } from '../interfaces/constants';
import { FiltrosUsuarioModel } from '../interfaces/usuario-model';
import { Observable } from 'rxjs';
import { environment } from "src/environments/environment";

const AUTH_API = environment.apiUrl;

const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http: HttpClient) { }

  obtenerTiposDocumento(){};

  
  obtenerUnUsuario(idUsuario: string) {
     //return this.http.get<UsuarioModel>(`${AUTH_API}Tienda/ObtenerTiendas`,httpOptions);
    if (!idUsuario) {
      console.error("Error: idUsuario es inválido", idUsuario);
      return;
    }
    return this.http.get<UsuarioModel>(`${AUTH_API}persona/${idUsuario}`);
  }
  



  obtenerUsuarios(filtro : FiltrosUsuarioModel) {
    return this.http.post<UsuarioModel>(`${AUTH_API}persona/ListaDetalleUsuario`, filtro, httpOptions);
    //return this.http.post<UsuarioModel[]>(FaneroConstants.pathApi.ListaUsuarios, filtro, httpOptions);
  }

  obtenerUsuariosFull() {
    
    return this.http.get<any>(`${AUTH_API}persona/ObtenerPersonaFull`);
    //return this.http.get<any>(FaneroConstants.pathApi.ListaUsuariosFull);
  }

  guardarUsuario(usuario: UsuarioModel): Observable<UsuarioModel> {
    return this.http.post<UsuarioModel>(`${AUTH_API}persona/AgregarUsuarioAdmin`, usuario, httpOptions);
    //return this.http.post<UsuarioModel>(FaneroConstants.pathApi.guardarUsuarioAdmin, usuario, httpOptions);
  }

  editarUsuario(usuario: UsuarioModel): Observable<UsuarioModel>  {
    return this.http.post<UsuarioModel>(`${AUTH_API}ActualizaUsuarioAdmin`, usuario, httpOptions);
    
  }

}
