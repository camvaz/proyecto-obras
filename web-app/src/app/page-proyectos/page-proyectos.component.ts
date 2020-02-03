import { Component, OnInit } from "@angular/core";
import { Obra } from "./obra.model";

@Component({
  selector: "app-page-proyectos",
  templateUrl: "./page-proyectos.component.html",
  styleUrls: ["./page-proyectos.component.scss"]
})
export class PageProyectosComponent implements OnInit {
  tableHeaders: String[];
  obras: Obra[];
  constructor() {}

  ngOnInit() {
    this.tableHeaders = [
      "# No.",
      "No. de la obra",
      "Nombre de la obra",
      "Ubicacion",
      "Ejercicio Fiscal",
      "Programa",
      "Responable",
      "Progreso"
    ];
    
    this.obras = [
      {
        id:1,
        numObra:12345,
        nombre:"Construccion de ciclopista",
        ubicacion:"Calle 5 sur 1105, Centro, 72000 Puebla, Pue.",
        ejercicioFiscal:2020,
        programa:"FISM",
        responsable: "Martin Corona M",
        progreso: 100
      },
      {
        id:1,
        numObra:12345,
        nombre:"Construccion de ciclopista",
        ubicacion:"Calle 5 sur 1105, Centro, 72000 Puebla, Pue.",
        ejercicioFiscal:2020,
        programa:"FISM",
        responsable: "Martin Corona M",
        progreso: 100
      },
      {
        id:1,
        numObra:12345,
        nombre:"Construccion de ciclopista",
        ubicacion:"Calle 5 sur 1105, Centro, 72000 Puebla, Pue.",
        ejercicioFiscal:2020,
        programa:"FISM",
        responsable: "Martin Corona M",
        progreso: 100
      }
    ]
  }
}
