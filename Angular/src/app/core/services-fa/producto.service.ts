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
import { GuardarValorPorTallasModel } from '../../model-fa/GuardarValorPorTallasModel.Class';
const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  public currentProductSubject: BehaviorSubject<number>;
  public currentProduct: Observable<number>;

  constructor(private http: HttpClient) {

    this.currentProductSubject = new BehaviorSubject<number>(0)
    this.currentProduct = this.currentProductSubject.asObservable();
  }


  obtenerProductosFiltro(filtro: FiltroProductoModel) {

    return this.http.post<ProductoModel[]>(FaneroConstants.pathApi.ObtenerProductosFiltro, filtro, httpOptions);
  }

  detallarProducto(id: number) {

    return this.http.get<DetalleProductoModel>(FaneroConstants.pathApi.ObtenerDetalleProducto + id, httpOptions);
  }

  elimnarProductoBorrador(id: number) {
    return this.http.delete<DetalleProductoModel>(FaneroConstants.pathApi.EliminarProductoBorrador + id, httpOptions);
  }

  crearProducto(producto: ProductoModel) {

    return this.http.post<any>(FaneroConstants.pathApi.AgregarProducto, producto, httpOptions);
  }

  EliminarCaracteristicas(idCaracteristica: number) {
    return this.http.post<any>(FaneroConstants.pathApi.EliminarCaracteristicas.concat(idCaracteristica.toString()), httpOptions);
  }
  
  EliminarTalla(tallaId:number){
    return this.http.post<any>(FaneroConstants.pathApi.EliminarTallas.concat(tallaId.toString()), httpOptions);
  }

  ActualizarTalla(valorPorTalla: GuardarValorPorTallasModel){
    return this.http.post<any>(FaneroConstants.pathApi.ActualizarTallas, valorPorTalla, httpOptions);
  }

  actualizarProducto(producto: ProductoModel) {
    return this.http.post<any>(FaneroConstants.pathApi.ActualizarProducto, producto, httpOptions);
  }

  obtenerCategorias(IdPadre: number) {
    return this.http.get<CategoriaProductoModel[]>(FaneroConstants.pathApi.ObtenerCategoriasProductos + "?IdPadre=" + IdPadre, httpOptions);
  }

  obtenerCategoriasPorTienda(IdTienda: number) {
    return this.http.get<CategoriaProductoModel[]>(FaneroConstants.pathApi.ObtenerCategoriasPorTienda + "?IdTienda=" + FaneroConstants.pathApi.idTienda, httpOptions);

  }

  crearGarantia(garantiaModel: GarantiaProductoModel) {
    return this.http.post<any>(FaneroConstants.pathApi.GuardarGarantiaProducto, garantiaModel, httpOptions)
  }

  crearEnvio(envioProductoModel: EnvioProductoModel) {
    return this.http.post(FaneroConstants.pathApi.ParametrizacionEnvioProducto, envioProductoModel, httpOptions)
  }

  obtenerParametrosEnvio(idProducto: number) {
    return this.http.get<any>(FaneroConstants.pathApi.ObtenerParametrizacionEnvio + idProducto, httpOptions);
  }

  async cagarImagenesProduccto(idTienda: number, file: File) {
    const formData: FormData = new FormData();
    formData.append('uploads[]', file);

    return await this.http.post<any>(FaneroConstants.pathApi.SubirImagenesProducto + FaneroConstants.pathApi.idTienda, formData).toPromise();
  }

  async cagarImagenesApi(objRequest: any) {

    return await this.http.post<any>(FaneroConstants.pathApi.CrearImagenesProducto, objRequest).toPromise();
  }

  publicarArchiva(idProducto: number, state: string) {
    var publicarstr = FaneroConstants.pathApi.PublicarPrducto.replace("{idProducto}", idProducto.toString());
    publicarstr = publicarstr.replace("{publicar}", state);
    return this.http.post<any>(publicarstr, httpOptions);
  }

  async eliminarImagenesProduccto(bannerId:number,urlima: string, file: any) {
    const formData: FormData = new FormData();
    formData.append('uploads[]', file);
    return await this.http.post<any>(FaneroConstants.pathApi.EliminarImagenesyProducto + bannerId +'&URL='+ urlima, {}).toPromise();
  }

  async getImagenesBannes(idTienda: number) {
    return await this.http.get<any>(FaneroConstants.pathApi.GetImagenesProducto + FaneroConstants.pathApi.idTienda, httpOptions).toPromise();
  }

  async editarImagenesProduccto(file: any[]) {
    return await this.http.post<any>(FaneroConstants.pathApi.EditarImagenesProducto, file).toPromise();
  }

}
