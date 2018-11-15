import { Component, OnInit } from '@angular/core';
import { OrdenesMock } from '../shared/ordenes-mock';
import { Ordenes } from '../shared/models/ordenes';
@Component({
  selector: 'app-ordenes',
  templateUrl: './ordenes.component.html',
  styleUrls: ['./ordenes.component.css']
})
export class OrdenesComponent implements OnInit {
  Ordenes: Array<Ordenes>;
  selectedOrden:Ordenes;
  constructor() { }
  ngOnInit() {
    this.Ordenes = OrdenesMock;
  }

  detalles(orden:Ordenes){
    this.selectedOrden=orden;
    //alert("No termine hacer este platillo " + orden.platillo)
  }

  
}
