import { Component, OnInit } from "@angular/core";
import { Obra } from "./obra.model";
import { Router } from "@angular/router";

@Component({
  selector: "app-page-proyectos",
  templateUrl: "./page-proyectos.component.html",
  styleUrls: ["./page-proyectos.component.scss"]
})
export class PageProyectosComponent implements OnInit {
  tableHeaders: String[];
  obras: Obra[];
  boss: any;
  state: { [k: string]: any };
  constructor(private router: Router) {}

  ngOnInit() {
    this.state = history.state;
    if (this.state.boss !== undefined) {
      this.state.boss
        ? (this.boss = {
            on: false,
            cargo: "Arquitecto",
            nombre: "KRAIZEN IVAN MARTINEZ"
          })
        : (this.boss = {
            on: true,
            cargo: "Arquitecto",
            nombre: "KRAIZEN IVAN MARTINEZ"
          });
    } else {
      this.boss = {
        on: true,
        cargo: "Arquitecto",
        nombre: "KRAIZEN IVAN MARTINEZ"
      };
    }

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
        id: 1,
        numObra: 12345,
        nombre: "MEJORAMIENTO DE LA IMAGEN URBANA Y REHABILITACIÓN DE INSTALACIONES ELECTRICAS, SANITARIAS Y MODULOS DE SANITARIOS EN EL MERCADO SAN BALTAZAR CAMPECHE",
        ubicacion: "CALLE CUE MERLO N° 466 COLONIA SAN BALTAZAR, PUEBLA . PUE",
        ejercicioFiscal: 2020,
        programa: "FORTAMUN",
        responsable: "KRAIZEN IVAN MARTINEZ ALTERNO 2",
        progreso: 60
      },
      {
        id: 2,
        numObra: 12345,
        nombre: 'MEJORAMIENTO DE LA IMAGEN URBANA Y REHABILITACIÓN DE INSTALACIONES ELECTRICAS, SANITARIAS Y MODULOS DE SANITARIOS EN EL  MERCADO LA LIBERTAD "EL CUEXCOMATE"',
        ubicacion: "CALLE 3 NORTE 212 COLONIA LA LIBERTAD, PUEBLA PUE.",
        ejercicioFiscal: 2020,
        programa: "FORTAMUN",
        responsable: "KRAIZEN IVAN MARTINEZ ALTERNO 2",
        progreso: 80
      },
      {
        id: 3,
        numObra: 12345,
        nombre: "CONSTRUCCIÓN DE PARQUE BIBLIOTECA 2",
        ubicacion: "Sin definir",
        ejercicioFiscal: 2020,
        programa: "Participaciones",
        responsable: "SISP",
        progreso: 70
      }
    ];
  }
}
