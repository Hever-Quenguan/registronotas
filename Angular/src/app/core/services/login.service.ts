import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { LoginModel } from '../../model/login-model';
import { FaneroConstants } from '../interfaces/constants';
import { environment } from "src/environments/environment";

const AUTH_API = environment.apiUrl;

const httpOptions = {headers: new HttpHeaders({'Content-Type': 'application/json' })};

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  // Iniciar sesión
  LogIn(login: LoginModel): Observable<LoginModel>{
    // return this.http.post<LoginModel>(FaneroConstants.pathApi.LogIn, login);
    //return this.http.post<LoginModel>(FaneroConstants.pathApi.LoginAdmin, login);
    return this.http.post<LoginModel>(`${AUTH_API}LoginWeb/signin`, login);
  }

}
