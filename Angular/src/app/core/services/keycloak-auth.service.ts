import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';


@Injectable({ providedIn: 'root' }) 
export class KeycloakAuthService { 
  private tokenUrl = 'http://localhost:8080/realms/NotasRealm/protocol/openid-connect/token'; 
  private clientId = 'django_api'; 
  private clientSecret = 'CefkhWRpEJwx6VjxrPs41fdTXBJgp5Yv'; 
  private accessToken: string | null = null; 
  private tokenExpiresAt: number = 0; // epoch timestamp en milisegundos 

  constructor(private http: HttpClient) {} 

  async getAccessToken(): Promise<string> { 
    const now = Date.now(); 

    if (this.accessToken && now < this.tokenExpiresAt) { 
      return this.accessToken; 
    } 

    const body = new HttpParams() 
      .set('grant_type', 'client_credentials') 
      .set('client_id', this.clientId) 
      .set('client_secret', this.clientSecret); 

    const headers = new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' }); 

    const response: any = await firstValueFrom( 
      this.http.post(this.tokenUrl, body.toString(), { headers }) 
    ); 

    this.accessToken = response.access_token; 

    // Calcular tiempo de expiración con un pequeño margen (ej. 10s antes)
    this.tokenExpiresAt = Date.now() + (response.expires_in - 10) * 1000; 

    return this.accessToken; 
  }
}
