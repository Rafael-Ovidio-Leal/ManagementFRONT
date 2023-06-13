import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FlowService {
  private baseUrl: string = 'https://localhost:44378/';
  constructor(private http: HttpClient) {}

  getProcess(id: number) {
    return this.http.get<any>(`${this.baseUrl}proc/${id}`);
  }

  getSubprocess(id: number) {
    return this.http.get<any>(`${this.baseUrl}sub/${id}`);
  }
}
