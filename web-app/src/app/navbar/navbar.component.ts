import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.scss"]
})
export class NavbarComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {
    document
      .querySelector("#proyectos")
      .addEventListener("mouseover", event => {
        document.getElementById("submenu").style.display = "flex";
        document.getElementById("primary-nav").style.height = "100px";
      });

    document.querySelector("#proyectos").addEventListener("mouseout", event => {
      document.getElementById("submenu").style.display = "none";
      document.getElementById("primary-nav").style.height = "70px";
    });
    
    document.querySelector("#submenu").addEventListener("mouseover", event => {
      document.getElementById("submenu").style.display = "flex";
      document.getElementById("primary-nav").style.height = "100px";
    });

    document.querySelector("#submenu").addEventListener("mouseout", event => {
      document.getElementById("submenu").style.display = "none";
      document.getElementById("primary-nav").style.height = "70px";
    });
  }

  visualizarProyectos() {
    this.router.navigate(["/proyectos"]);

    document.getElementById("submenu").style.display = "none";
    document.getElementById("primary-nav").style.height = "70px";
  }

  crearProyecto() {
    this.router.navigate(["/crear-proyecto"]);

    document.getElementById("submenu").style.display = "none";
    document.getElementById("primary-nav").style.height = "70px";
  }
}
