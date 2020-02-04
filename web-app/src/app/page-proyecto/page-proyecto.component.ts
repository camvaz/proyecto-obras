import { Component, OnInit } from "@angular/core";
import { Proyecto } from "../model/proyecto.model";

@Component({
  selector: "app-page-proyecto",
  templateUrl: "./page-proyecto.component.html",
  styleUrls: ["./page-proyecto.component.scss"]
})
export class PageProyectoComponent implements OnInit {
  proyecto: Proyecto;
  progresos: number[];

  constructor() {}

  ngOnInit() {
    this.proyecto = {
      nombre: "Construccion de ciclopista",

      planeacion: [1, 0, 1, 1, 0, 0, 1, 1, 0, 1],

      relacionesInstitucionales: [1, 0, 1, 1, 0, 0, 1, 1, 0, 1],
      
      gestion: [1, 0, 1, 1, 0, 0, 1, 1, 0, 1],

      proyectos: [1, 0, 1, 1, 0, 0, 1, 1, 0, 1],

      costos: [1, 0, 1, 1, 0, 0, 1, 1, 0, 1]
    };
    this.progresos = [
      this.proyecto.planeacion.filter(e=>e===1).length * 10,
      this.proyecto.relacionesInstitucionales.filter(e=>e===1).length* 10,
      this.proyecto.gestion.filter(e=>e===1).length* 10,
      this.proyecto.proyectos.filter(e=>e===1).length* 10,
      this.proyecto.costos.filter(e=>e===1).length* 10
    ]
  }
}
