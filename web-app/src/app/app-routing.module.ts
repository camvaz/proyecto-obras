import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { MobileLoginComponent } from "./mobile-login/mobile-login.component";
import { PageProyectosComponent } from "./page-proyectos/page-proyectos.component";
import { PageProyectoComponent } from "./page-proyecto/page-proyecto.component";

const routes: Routes = [
  // {path:'', component:LoginComponent},
  { path: "", component: MobileLoginComponent },
  { path: "proyectos", component: PageProyectosComponent },
  { path: "proyecto", component: PageProyectoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
