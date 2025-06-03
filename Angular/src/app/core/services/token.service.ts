import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ResponseApi } from '../interfaces/response-api';

@Injectable({
  providedIn: 'root'
})

export class TokenService {

  public token: any;
  private invalidToken: boolean = false;

  private readonly http = inject(HttpClient);
  private readonly apiUrl: string = environment.apiUrl;

  private readonly llaveToken = 'jwt';
  private readonly llaveExpiracion = 'token-expiracion';

  constructor() { }

  getToken() {

    const credentials = {
      'key': environment.credentialsKey,
      'apiKey': environment.credentialsApiKey
    }

    this.http.post<ResponseApi>(`${this.apiUrl}AuthToken`, credentials)
      .subscribe({
        next: (response: ResponseApi) => {
          if (response && response.token) {
            this.token = response.token;
            localStorage.setItem(this.llaveToken, this.token);
            this.invalidToken = false;
          } else {
            this.invalidToken = true;
            console.error('Token no encontrado en la respuesta');
          }
        },
        error: (err) => {
          this.invalidToken = true;
          console.error('Error al autenticar:', err);
        }
      });
  }

  obtenerToken() {
    return localStorage.getItem(this.llaveToken)
  }
}
