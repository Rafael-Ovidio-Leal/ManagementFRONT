import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AreaService {
  private baseUrl: string = 'https://localhost:44378/api/Area/';
  constructor(private http: HttpClient) {}

  getAll() {
    return this.http.get<any>(`${this.baseUrl}GetAll`);
  }

  getId(id: number) {
    return this.http.get<any>(`${this.baseUrl}${id}`);
  }

  register(areaObj: any) {
    return this.http.post<any>(`${this.baseUrl}`, areaObj)
  }

  delete(id: number) {
    return this.http.delete<any>(`${this.baseUrl}${id}`)
  }

  update(areaObj: any) {
    return this.http.put<any>(`${this.baseUrl}`, areaObj)
  }
}
