// core/services/base.service.ts
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export class BaseService<T> {
  constructor(protected http: HttpClient, protected apiUrl: string) {}

  getAll(): Observable<T[]> {
    return this.http.get<T[]>(this.apiUrl);
  }

  getById(id: number): Observable<T> {
    return this.http.get<T>(`${this.apiUrl}${id}/`);
  }

  create(data: T): Observable<T> {
    return this.http.post<T>(this.apiUrl, data);
  }

  update(id: number, data: T): Observable<T> {
    return this.http.put<T>(`${this.apiUrl}${id}/`, data);
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}${id}/`);
  }
}
