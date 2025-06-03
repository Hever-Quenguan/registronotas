import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { LoginModel } from '../../model-fa/login-model.class';
import { Observable } from 'rxjs';
import { FaneroConstants } from '../interfaces/constants.class';
import { CambioClaveModel } from '../../model-fa/CambioClaveModel.Class';
import { ApiTknModel } from '../../model-fa/api-tkn-model';

const httpOptions = {headers: new HttpHeaders({'Content-Type': 'application/json' })};

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  emailUsuarioBackOffice:string = '';
  passSendBackOffice:string = '';
  constructor(private http: HttpClient) { }

  // Iniciar sesión
  LogIn(login: LoginModel){
    return this.http.post<any>(FaneroConstants.pathApi.LogIn, login);
  }

  // recuperar clave
  RecoveryPassword(login: LoginModel): Observable<LoginModel>{
    return this.http.post<LoginModel>(FaneroConstants.pathApi.RecoveryPass, login, httpOptions);
  }

  // Guardar la clave nueva
  SaveNewPass(newPass: CambioClaveModel): Observable<CambioClaveModel>{
    return this.http.post<CambioClaveModel>(FaneroConstants.pathApi.SaveNewPass, newPass, httpOptions);
  }

  // getTkn(){
  //   console.log('dentro get token')
  //   const keyModel = new ApiTknModel();
  //   keyModel.key = FaneroConstants.TKN_HSH.key;
  //   keyModel.apiKey = FaneroConstants.TKN_HSH.apiKey;
  //   return this.http.post<any>(FaneroConstants.pathApi.GetTKN, keyModel, httpOptions);
  // }

}
