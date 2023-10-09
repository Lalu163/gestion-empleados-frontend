import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmpleadoService {

  constructor() { }

  private baseURL ="http://localhost:8080/api/v1/empleados";
}
