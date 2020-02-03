import { Component, OnInit, Input } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-mobile-login",
  templateUrl: "./mobile-login.component.html",
  styleUrls: ["./mobile-login.component.scss"]
})

export class MobileLoginComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {}

  login() {
    document.querySelector("#tarjeta").classList.add("slideOutUp");
    setTimeout(() => {
      this.router.navigate(["/proyectos"]);
    }, 400);
  }

  ngOnDestroy() {}
}
