import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { MobileLoginComponent } from "./mobile-login/mobile-login.component";
import { PageProyectosComponent } from "./page-proyectos/page-proyectos.component";
import { PageProyectoComponent } from "./page-proyecto/page-proyecto.component";
import { FormCrearProyectoComponent } from "./form-crear-proyecto/form-crear-proyecto.component";

const routes: Routes = [
  // {path:'', component:LoginComponent},
  { path: "", component: MobileLoginComponent },
  { path: "proyectos", component: PageProyectosComponent },
  { path: "proyecto", component: PageProyectoComponent },
  { path: "crear-proyecto", component: FormCrearProyectoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
