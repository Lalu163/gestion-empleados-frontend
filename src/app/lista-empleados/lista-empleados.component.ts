import { Component } from '@angular/core';
import { Empleado } from '../empleado';

@Component({
  selector: 'app-lista-empleados',
  templateUrl: './lista-empleados.component.html',
  styleUrls: ['./lista-empleados.component.css']
})
export class ListaEmpleadosComponent {
  
  empleados: Empleado[];

  ngOnInit(): void{
    this.empleados = [{
      "id":1,
      "nombre":"Juan",
      "apellido": "Pérez",
      "email": "juan.perez@email.com"
    },
  {
      "id":2,
      "nombre":"Ana",
      "apellido": "García",
      "email": "ana.garcia@email.com"
  }];
  }

}
