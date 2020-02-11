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
    //Hover menu de Proyectos
    document
      .querySelector("#proyectos")
      .addEventListener("mouseover", event => {
        document.getElementById("submenu").style.display = "flex";
        document.getElementById("primary-nav").style.height = "70px";
      });

    document.querySelector("#proyectos").addEventListener("mouseout", event => {
      document.getElementById("submenu").style.display = "none";
      document.getElementById("primary-nav").style.height = "70px";
    });

    document.querySelector("#submenu").addEventListener("mouseover", event => {
      document.getElementById("submenu").style.display = "flex";
      document.getElementById("primary-nav").style.height = "70px";
    });

    document.querySelector("#submenu").addEventListener("mouseout", event => {
      document.getElementById("submenu").style.display = "none";
      document.getElementById("primary-nav").style.height = "70px";
    });

    //Notificaciones
    document.querySelector("#bell").addEventListener("click", event => {
      document.getElementById("notificaciones").style.display = "flex";
      document.getElementById("notificaciones").classList.add("fadeIn");
      if (
        window.location.pathname === "/proyectos" ||
        window.location.pathname === "/home"
      )
        document.getElementById("definicion-proyectos").style.zIndex = "-1";

      if (window.location.pathname === "/proyecto")
        document.getElementById("definicion-proyecto").style.zIndex = "-1";

      if (window.location.pathname === "/crear-proyecto")
        document.getElementById("crear-proyecto").style.zIndex = "-1";
    });

    document
      .querySelector("#notificaciones")
      .addEventListener("mouseover", event => {
        document.getElementById("notificaciones").style.display = "flex";

        if (
          window.location.pathname === "/proyectos" ||
          window.location.pathname === "/home"
        )
          document.getElementById("definicion-proyectos").style.zIndex = "-1";

        if (window.location.pathname === "/proyecto")
          document.getElementById("definicion-proyecto").style.zIndex = "-1";

        if (window.location.pathname === "/crear-proyecto")
          document.getElementById("crear-proyecto").style.zIndex = "-1";
      });

    document
      .querySelector("#notificaciones")
      .addEventListener("mouseout", event => {
        document.getElementById("notificaciones").style.display = "none";

        if (
          window.location.pathname === "/proyectos" ||
          window.location.pathname === "/home"
        )
          document.getElementById("definicion-proyectos").style.zIndex = "1";

        if (window.location.pathname === "/proyecto")
          document.getElementById("definicion-proyecto").style.zIndex = "1";

        if (window.location.pathname === "/crear-proyecto")
          document.getElementById("crear-proyecto").style.zIndex = "1";
      });

    // document.querySelector("#bell").addEventListener("mouseout", event => {
    //   document.getElementById("notificaciones").style.display = "none";

    //   if (
    //     window.location.pathname === "/proyectos" ||
    //     window.location.pathname === "/home"
    //   )
    //     document.getElementById("definicion-proyectos").style.zIndex = "1";

    //   if (window.location.pathname === "/proyecto")
    //     document.getElementById("definicion-proyecto").style.zIndex = "1";

    //   if (window.location.pathname === "/crear-proyecto")
    //     document.getElementById("crear-proyecto").style.zIndex = "1";
    // });
  }

  subirArchivos() {
    this.router.navigateByUrl("/subir-archivos", { state: { boss: false } });

    document.getElementById("submenu").style.display = "none";
    document.getElementById("primary-nav").style.height = "70px";
  }
  visualizarProyectos() {
    this.router.navigateByUrl("/proyectos", { state: { boss: false } });

    document.getElementById("submenu").style.display = "none";
    document.getElementById("primary-nav").style.height = "70px";
  }

  crearProyecto() {
    this.router.navigate(["/crear-proyecto"]);

    document.getElementById("submenu").style.display = "none";
    document.getElementById("primary-nav").style.height = "70px";
  }
}
