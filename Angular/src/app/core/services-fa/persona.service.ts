import { Injectable } from '@angular/core';
import { FiltroProductoModel } from '../../model-fa/FiltroProductoModel.Class';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { FaneroConstants } from '../interfaces/constants.class';
import { CategoriaProductoModel } from '../../model-fa/CategoriaProductoModel.Class';
import { ProductoModel } from '../../model-fa/ProductoModel.Class';
import { Observable, BehaviorSubject } from 'rxjs';
import { GarantiaProductoModel } from '../../model-fa/GarantiaModel.Class';
import { DetalleProductoModel } from '../../model-fa/DetalleProductoModel.Class';
import { EnvioProductoModel } from '../../model-fa/envioproducto-model';
const httpOptions = {headers: new HttpHeaders({'Content-Type': 'application/json' })};

@Injectable({
  providedIn: 'root'
})
export class PersonaService {

  public currentProductSubject: BehaviorSubject<number>;
  public currentProduct:Observable<number>;

  constructor(private http: HttpClient) {

    this.currentProductSubject = new BehaviorSubject<number>(0)
    this.currentProduct=this.currentProductSubject.asObservable();
  }

  obtenerPersonas(){
    return this.http.get<any>(FaneroConstants.pathApi.ObtenerPersonaFull, httpOptions);
  }

  updatePersona(body: any){
    //return this.http.post<any>(FaneroConstants.pathApi.UpdatePersona, httpOptions);
    return this.http.post<any>(FaneroConstants.pathApi.UpdatePersona, body, httpOptions);
  }

  uploadImage(obj: any) {

    this.http.post('https://mybackend.com/api/upload/sanitize-and-save-logo', obj, { headers: {
            'security-token': 'mytoken'
          }, responseType: 'blob' })
          .subscribe(data => {
          })
  }

}
