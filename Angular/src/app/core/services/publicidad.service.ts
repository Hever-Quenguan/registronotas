import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { FaneroConstants } from '../../core/interfaces/constants';
import { BannerModel } from '../../model/bannerModel';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
const AUTH_API = environment.apiUrl;
const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
const credentials = {
  'key': environment.credentialsKey,
  'apiKey': environment.credentialsApiKey
}
@Injectable({
  providedIn: 'root'
})


export class PublicidadService {

  constructor(private http: HttpClient) { 



  }


  ListarPublicidad(){
   // return this.http.get<BannerModel[]>(FaneroConstants.pathApi.ObtnerBanners,httpOptions);
   //return this.http.get<BannerModel[]>(`${AUTH_API}Banner/ObtenerBanners`,httpOptions);
   return this.http.get<{ data: BannerModel[] }>(`${AUTH_API}Banner/GetAllBanners`, httpOptions);

    //return this.http.get<BannerModel[]>(`${AUTH_API}Banner/GetAllBanners`,httpOptions);
    
  }

  CrearPublicidad(banner:BannerModel){
    //return this.http.post<any>(FaneroConstants.pathApi.CrearBanner,banner,httpOptions);
    return this.http.post<any>(`${AUTH_API}Banner/CrearBanners`,banner,httpOptions);
  }

  ActualizarPublicidad(banner:BannerModel){
    return this.http.post<any>(`${AUTH_API}Banner/EditarBanners`,banner,httpOptions);
    //return this.http.post<any>(FaneroConstants.pathApi.EditarBanner,banner,httpOptions);
   
  }

  CargarBanner(id: number,file:File): Observable<number> {
    const options = {
      headers: new HttpHeaders({
        "Content-Type": "multipart/form-data",
        "Accept":"*/*",
        "Content-Length":"<calculated when request is sent>"
      })
    };

    const formData = new FormData();
    formData.append('uploads[]',file);
    return this.http.post<any>(`${AUTH_API}Banner/CargarBanner?IdBanner=`+ id, formData);
    //return this.http.post<any>(FaneroConstants.pathApi.CargarBanner+id, formData);
 }
}
