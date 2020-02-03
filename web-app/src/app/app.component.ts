import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  title = "web-app";
  baseURL: string;
  ngOnInit() {
    this.baseURL = window.location.pathname;
  }

  ngDoCheck() {
    this.baseURL = window.location.pathname;
  }
}
