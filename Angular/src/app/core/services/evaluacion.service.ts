import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, from } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { KeycloakService } from './keycloak.service';

import { Evaluacion } from '../../model/evaluacion-model';
import { Clase } from '../../model/clases-model';

@Injectable({ providedIn: 'root' })
export class EvaluacionesService {
  private apiUrl = 'http://localhost:8001/api';

  constructor(
    private http: HttpClient,
    private keycloak: KeycloakService
  ) {}

  private async getHeaders(): Promise<HttpHeaders> {
    const token = await this.keycloak.getToken();
    return new HttpHeaders({ Authorization: `Bearer ${token}` });
  }

  getEvaluaciones(): Observable<Evaluacion[]> {
    return from(this.getHeaders()).pipe(
      switchMap(headers =>
        this.http.get<Evaluacion[]>(`${this.apiUrl}/register/evaluacion/`, { headers })
      )
    );
  }

  addEvaluacion(evaluacion: Evaluacion): Observable<any> {
    return from(this.getHeaders()).pipe(
      switchMap(headers =>
        this.http.post(`${this.apiUrl}/register/evaluacion/`, evaluacion, { headers })
      )
    );
  }

  updateEvaluacion(id: number, evaluacion: Evaluacion): Observable<any> {
    return from(this.getHeaders()).pipe(
      switchMap(headers =>
        this.http.put(`${this.apiUrl}/evaluacion/${id}/`, evaluacion, { headers })
      )
    );
  }

  deleteEvaluacion(id: number): Observable<any> {
    return from(this.getHeaders()).pipe(
      switchMap(headers =>
        this.http.delete(`${this.apiUrl}/evaluacion/${id}/`, { headers })
      )
    );
  }

  getClases(): Observable<Clase[]> {
    return from(this.getHeaders()).pipe(
      switchMap(headers =>
        this.http.get<Clase[]>(`${this.apiUrl}/register/clase/`, { headers })
      )
    );
  }
    getEvaluacionById(id: number): Observable<Evaluacion> {
    return from(this.getHeaders()).pipe(
      switchMap(headers =>
        this.http.get<Evaluacion>(`${this.apiUrl}/evaluacion/${id}/`, { headers })
      )
    );
  }
}
