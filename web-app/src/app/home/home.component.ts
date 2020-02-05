import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  opciones: any

  constructor() { }

  ngOnInit() {
    this.opciones = [
      {
        image:"../../assets/icons/list.png",
        name:"Proyectos"
      },{
        image:"../../assets/icons/calendar.png",
        name:"Gestion Administrativa"
      },{
        image: "../../assets/icons/computer.png",
        name:"Proyectos"
      },{
        image: "../../assets/icons/hands.png",
        name: "Relaciones institucionales"
      },{
        image: "../../assets/icons/calculator.png",
        name:"Costos"
      }
    ] 

  }

}
