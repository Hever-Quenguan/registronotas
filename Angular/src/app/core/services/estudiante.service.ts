import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Estudiante } from 'src/app/model/estudiantes-model'; // Importa el modelo

@Injectable({ providedIn: 'root' })
export class EstudiantesService {
  private apiUrl = 'http://localhost:8001/api/register/estudiantes/';

  constructor(private http: HttpClient) {}

  getEstudiantes(): Observable<Estudiante[]> {
    return this.http.get<Estudiante[]>(this.apiUrl);
  }

  addEstudiante(est: Estudiante): Observable<Estudiante> {
    return this.http.post<Estudiante>(this.apiUrl, est);
  }

  updateEstudiante(id: number, est: Estudiante): Observable<Estudiante> {
    return this.http.put<Estudiante>(`${this.apiUrl}${id}/`, est);
  }

  deleteEstudiante(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}${id}/`);
  }
  getEstudianteById(id: number): Observable<Estudiante> {
    return this.http.get<Estudiante>(`${this.apiUrl}${id}/`);
  }
}
