import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { MobileLoginComponent } from "./mobile-login/mobile-login.component";
import { PageProyectosComponent } from "./page-proyectos/page-proyectos.component";

const routes: Routes = [
  // {path:'', component:LoginComponent},
  { path: "", component: MobileLoginComponent },
  { path: "proyectos", component: PageProyectosComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
