import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, from } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { KeycloakService } from './keycloak.service';

import { Nota } from '../../model/notas-model';
import { Evaluacion } from '../../model/evaluacion-model';
import { Estudiante } from 'src/app/model/estudiantes-model';
import { Clase } from 'src/app/model/clases-model';
import { Profesor } from 'src/app/model/profesores-model';
import { Curso } from 'src/app/model/curso-model';


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

    getClases(): Observable<Clase[]> {
      return from(this.getHeaders()).pipe(
        switchMap(headers =>
          this.http.get<Clase[]>(`${this.apiUrl}/register/clase/`, { headers })
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
