import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-proyecto-programa',
  templateUrl: './proyecto-programa.component.html',
  styleUrls: ['./proyecto-programa.component.scss']
})
export class ProyectoProgramaComponent implements OnInit {
  programas: any

  constructor() { }

  ngOnInit() {
    this.programas = [
      {
        nombre: "FORTAMUN",
        clicked: false,
        proyectos: [
          {
            id: 12345,
            nombre: "Mejoramiento de la imagen urbana y rehabilitación de instalaciones electricas, sanitarias y modulos de sanitarios en el mercado san baltazar campeche"
          },
          {
            id: 12345,
            nombre: "Mejoramiento de la imagen urbana y rehabilitación de instalaciones electricas, sanitarias y modulos de sanitarios en el mercado la libertad 'el cuexcomate'"
          },
          {
            id: 12345,
            nombre: "Construcción de parque biblioteca 2"
          }
        ] 
      },
      {
        nombre: "FISM",
        clicked: false,
        proyectos: [
          {
            id: 12345,
            nombre: "mejoramiento de la imagen urbana y rehabilitación de instalaciones electricas, sanitarias y modulos de sanitarios en el mercado san baltazar campeche"
          },
          {
            id: 12345,
            nombre: "mejoramiento de la imagen urbana y rehabilitación de instalaciones electricas, sanitarias y modulos de sanitarios en el mercado la libertad 'el cuexcomate'"
          },
          {
            id: 12345,
            nombre: "construcción de parque biblioteca 2"
          }
        ]
      },
      {
        nombre: "Recursos Propios",
        clicked: false,
        proyectos: [
          {
            id: 12345,
            nombre: "mejoramiento de la imagen urbana y rehabilitación de instalaciones electricas, sanitarias y modulos de sanitarios en el mercado san baltazar campeche"
          },
          {
            id: 12345,
            nombre: "mejoramiento de la imagen urbana y rehabilitación de instalaciones electricas, sanitarias y modulos de sanitarios en el mercado la libertad 'el cuexcomate'"
          },
          {
            id: 12345,
            nombre: "construcción de parque biblioteca 2"
          }
        ]
      }
    ]
  }

  ngAfterViewInit(){
    this.programas.map(itr => {
      document.getElementById(itr.nombre).addEventListener("click", event =>{
        if(!itr.clicked){
          document.getElementById(itr.nombre+1).classList.add("fadeIn");
          document.getElementById(itr.nombre+1).style.display = "flex";
          document.getElementById(itr.nombre+2).style.transform = "rotate(0deg)"
        } else {
          document.getElementById(itr.nombre+1).style.display = "none";
          document.getElementById(itr.nombre+2).style.transform = "rotate(180deg)"
        }
        itr.clicked = !itr.clicked
      })
    })
  }

}
