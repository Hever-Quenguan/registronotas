import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, from } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { KeycloakService } from './keycloak.service';

import { Nota } from '../../model/notas-model';
import { Estudiante } from './estudiante.service';
import { Evaluacion } from '../../model/evaluacion-model';

@Injectable({ providedIn: 'root' })
export class NotaService {
  private apiUrl = 'http://localhost:8001/api';

  constructor(
    private http: HttpClient,
    private keycloak: KeycloakService
  ) {}

  private async getHeaders(): Promise<HttpHeaders> {
    const token = await this.keycloak.getToken();
    return new HttpHeaders({ Authorization: `Bearer ${token}` });
  }

  getNotas(): Observable<Nota[]> {
    return from(this.getHeaders()).pipe(
      switchMap(headers =>
        this.http.get<Nota[]>(`${this.apiUrl}/register/nota/`, { headers })
      )
    );
  }

  addNota(nota: Nota): Observable<any> {
    return from(this.getHeaders()).pipe(
      switchMap(headers =>
        this.http.post(`${this.apiUrl}/register/nota/`, nota, { headers })
      )
    );
  }

  updateNota(id: number, nota: Nota): Observable<any> {
    return from(this.getHeaders()).pipe(
      switchMap(headers =>
        this.http.put(`${this.apiUrl}/nota/${id}/`, nota, { headers })
      )
    );
  }

  deleteNota(id: number): Observable<any> {
    return from(this.getHeaders()).pipe(
      switchMap(headers =>
        this.http.delete(`${this.apiUrl}/nota/${id}/`, { headers })
      )
    );
  }

  getEstudiantes(): Observable<Estudiante[]> {
    return from(this.getHeaders()).pipe(
      switchMap(headers =>
        this.http.get<Estudiante[]>(`${this.apiUrl}/register/estudiante/`, { headers })
      )
    );
  }

  getEvaluaciones(): Observable<Evaluacion[]> {
    return from(this.getHeaders()).pipe(
      switchMap(headers =>
        this.http.get<Evaluacion[]>(`${this.apiUrl}/register/evaluacion/`, { headers })
      )
    );
  }
}
