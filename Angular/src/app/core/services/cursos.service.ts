import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, from } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { KeycloakService } from './keycloak.service';
import { Curso } from '../../model/curso-model';

@Injectable({ providedIn: 'root' })
export class CursosService {
  private apiUrl = 'http://localhost:8001/api';

  constructor(
    private http: HttpClient,
    private keycloak: KeycloakService
  ) {}

  private async getHeaders(): Promise<HttpHeaders> {
    const token = await this.keycloak.getToken();
    return new HttpHeaders({ Authorization: `Bearer ${token}` });
  }

  getCursos(): Observable<Curso[]> {
    return from(this.getHeaders()).pipe(
      switchMap(headers =>
        this.http.get<Curso[]>(`${this.apiUrl}/register/curso/`, { headers })
      )
    );
  }

  addCurso(curso: Curso): Observable<any> {
    return from(this.getHeaders()).pipe(
      switchMap(headers =>
        this.http.post(`${this.apiUrl}/register/curso/`, curso, { headers })
      )
    );
  }

  updateCurso(id: number, curso: Curso): Observable<any> {
    return from(this.getHeaders()).pipe(
      switchMap(headers =>
        this.http.put(`${this.apiUrl}/curso/${id}/`, curso, { headers })
      )
    );
  }

  deleteCurso(id: number): Observable<any> {
    return from(this.getHeaders()).pipe(
      switchMap(headers =>
        this.http.delete(`${this.apiUrl}/curso/${id}/`, { headers })
      )
    );
  }
  getCursoById(id: number): Observable<Curso> {
  return from(this.getHeaders()).pipe(
    switchMap(headers =>
      this.http.get<Curso>(`${this.apiUrl}/curso/${id}/`, { headers })
    )
  );
}


}
