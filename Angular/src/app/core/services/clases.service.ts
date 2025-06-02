import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, from } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { KeycloakService } from './keycloak.service';

import { Clase } from '../../model/clases-model';
import { Curso } from '../../model/curso-model';
import { Profesor } from '../../model/profesores-model';

@Injectable({ providedIn: 'root' })
export class ClasesService {
  private apiUrl = 'http://localhost:8001/api';

  constructor(
    private http: HttpClient,
    private keycloak: KeycloakService
  ) {}

  private async getHeaders(): Promise<HttpHeaders> {
    const token = await this.keycloak.getToken();
    return new HttpHeaders({ Authorization: `Bearer ${token}` });
  }

  getClases(): Observable<Clase[]> {
    return from(this.getHeaders()).pipe(
      switchMap(headers =>
        this.http.get<Clase[]>(`${this.apiUrl}/register/clase/`, { headers })
      )
    );
  }

  addClase(clase: Clase): Observable<any> {
    return from(this.getHeaders()).pipe(
      switchMap(headers =>
        this.http.post(`${this.apiUrl}/register/clase/`, clase, { headers })
      )
    );
  }

  updateClase(id: number, clase: Clase): Observable<any> {
    return from(this.getHeaders()).pipe(
      switchMap(headers =>
        this.http.put(`${this.apiUrl}/clase/${id}/`, clase, { headers })
      )
    );
  }

  deleteClase(id: number): Observable<any> {
    return from(this.getHeaders()).pipe(
      switchMap(headers =>
        this.http.delete(`${this.apiUrl}/clase/${id}/`, { headers })
      )
    );
  }

  getCursos(): Observable<Curso[]> {
    return from(this.getHeaders()).pipe(
      switchMap(headers =>
        this.http.get<Curso[]>(`${this.apiUrl}/register/curso/`, { headers })
      )
    );
  }

  getProfesores(): Observable<Profesor[]> {
    return from(this.getHeaders()).pipe(
      switchMap(headers =>
        this.http.get<Profesor[]>(`${this.apiUrl}/register/profesor/`, { headers })
      )
    );
  }
}
