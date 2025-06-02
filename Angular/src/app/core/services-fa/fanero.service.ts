import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { FaneroConstants } from '../interfaces/constants.class';
import { RespInvetarioModel } from '../../model-fa/resp-invetario-model';
import { PrecioProductoModel } from '../../model-fa/precio-producto-model';
import { Observable } from 'rxjs';
import { DomainModel } from '../../model-fa/domain-model';
import { FiltrosPedidoModel } from '../../model-fa/FiltrosPedidoModel.Class';
import { PedidoModel } from '../../model-fa/PedidoModel.Class';
import { EstadoOrdenModel } from '../../model-fa/EstadoOrdenModel.Class';
import { MedidaGarantia } from '../../model-fa/MedidaGarantia.Class';
import { DeliveryBrand } from '../../model-fa/Entregas/DeliveryBrand';

const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };

@Injectable({
  providedIn: 'root'
})
export class FaneroService {

  constructor(private http: HttpClient) { }

  cargarInventario(formData: FormData, idTienda: string, userId: string){

    return this.http.post<RespInvetarioModel>(FaneroConstants.pathApi.CargarInventario + FaneroConstants.pathApi.idTienda +'&UserId='+ userId, formData);
  }

  solicitarServicio(delivery:DeliveryBrand){

    return this.http.post<any>(FaneroConstants.ApiEntregas.solicitarServicio,delivery, httpOptions);
  }


  // Productos

  actualizarPrecioProducto(precio: PrecioProductoModel): Observable<PrecioProductoModel> {
    return this.http.post<PrecioProductoModel>(FaneroConstants.pathApi.ActulizarPrecioProducto, precio, httpOptions);
  }


  ObtenerValoresComision() {
     return this.http.get<DomainModel[]>(FaneroConstants.pathApi.ValoresComisionVenta);
  }
  // Fin Productos


  ListaPedidosOpciones(filtros:FiltrosPedidoModel){
    return this.http.post<PedidoModel[]>(FaneroConstants.pathApi.ListarPedidosOpciones,filtros, httpOptions);
  }

  verificaExistenciaEmail(email: string){
    return this.http.get<any>(FaneroConstants.pathApi.existeEmail + email);
  }

  listarEstados(){
    return this.http.get<EstadoOrdenModel[]>(FaneroConstants.pathApi.ObtenerEstados,httpOptions);
  }

  listarMedidaGarantia(){
    return this.http.get<MedidaGarantia[]>(FaneroConstants.pathApi.ObtenerTiposGarantia,httpOptions);
  }

  pingPayUCredentials(apiLogin:string,apiKey:string){
    let options={
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
      withCredentials: false
      
    }
    var pingRequest={
      test:false,
      lenguage:"en",
      command:"PNG",
      merchant:{
        apiLogin:apiLogin,
        apiKey:apiKey
      }
    }

    return this.http.post<any>(FaneroConstants.pathApi.pingPayU,pingRequest,options);
  }

}
