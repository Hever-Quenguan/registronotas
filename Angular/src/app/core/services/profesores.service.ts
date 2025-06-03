import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, from } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { KeycloakService } from './keycloak.service'; // o keycloak-auth.service si estás usando ese

import { Profesor } from '../../model/profesores-model'; // si lo tienes separado

@Injectable({ providedIn: 'root' })
export class ProfesoresService {
  private apiUrl = 'http://localhost:8001/api';

  constructor(
    private http: HttpClient,
    private keycloak: KeycloakService
  ) {}

  private async getHeaders(): Promise<HttpHeaders> {
    const token = await this.keycloak.getToken();
    return new HttpHeaders({ Authorization: `Bearer ${token}` });
  }

  getProfesores(): Observable<Profesor[]> {
    return from(this.getHeaders()).pipe(
      switchMap(headers =>
        this.http.get<Profesor[]>(`${this.apiUrl}/register/profesor/`, { headers })
      )
    );
  }

  addProfesor(prof: Profesor): Observable<any> {
    return from(this.getHeaders()).pipe(
      switchMap(headers =>
        this.http.post(`${this.apiUrl}/register/profesor/`, prof, { headers })
      )
    );
  }

  updateProfesor(id: number, prof: Profesor): Observable<any> {
    return from(this.getHeaders()).pipe(
      switchMap(headers =>
        this.http.put(`${this.apiUrl}/profesor/${id}/`, prof, { headers })
      )
    );
  }

  deleteProfesor(id: number): Observable<any> {
    return from(this.getHeaders()).pipe(
      switchMap(headers =>
        this.http.delete(`${this.apiUrl}/profesor/${id}/`, { headers })
      )
    );
  }
  getProfesorById(id: number): Observable<Profesor> {
  return from(this.getHeaders()).pipe(
    switchMap(headers =>
      this.http.get<Profesor>(`${this.apiUrl}/profesor/${id}/`, { headers })
    )
  );
}

}

