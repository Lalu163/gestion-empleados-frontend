import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmpleadoService {
  
  private baseURL ="http://localhost:8080/api/v1/empleados";

  constructor(private httpClient : HttpClient) { }

  
}
