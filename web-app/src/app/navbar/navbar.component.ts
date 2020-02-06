import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    document.querySelector("#proyectos").addEventListener('mouseover', (event)=>{
      document.getElementById("submenu").style.display = "flex";
      document.getElementById("primary-nav").style.height = "100px";
    })

    document.querySelector("#submenu").addEventListener('mouseover', (event)=>{
      document.getElementById("submenu").style.display = "flex";
      document.getElementById("primary-nav").style.height = "100px";
    })

    document.querySelector("#submenu").addEventListener('mouseout', (event)=>{
      document.getElementById("submenu").style.display = "none";

      document.getElementById("primary-nav").style.height = "70px";
    })
  }

}
