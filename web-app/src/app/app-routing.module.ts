import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { MobileLoginComponent } from "./mobile-login/mobile-login.component";
import { PageProyectosComponent } from "./page-proyectos/page-proyectos.component";
import { PageProyectoComponent } from "./page-proyecto/page-proyecto.component";
import { FormCrearProyectoComponent } from "./form-crear-proyecto/form-crear-proyecto.component";
import { VistaSubirArchivosComponent} from "./vista-subir-archivos/vista-subir-archivos.component";
import { HomeComponent } from './home/home.component';
import { SearchComponent } from './search/search.component';
import { PerfilDepartamentoComponent } from './perfil-departamento/perfil-departamento.component';
import { ProyectoProgramaComponent } from './proyecto-programa/proyecto-programa.component';

const routes: Routes = [
  // {path:'', component:LoginComponent},
  { path: "", component: MobileLoginComponent },
  { path: "search/:string", component: SearchComponent },
  { path: "proyectos", component: PageProyectosComponent },
  { path: "proyecto", component: PageProyectoComponent },
  { path: "crear-proyecto", component: FormCrearProyectoComponent },
  { path: "perfil-departamentos", component: PerfilDepartamentoComponent},
  { path: "subir-archivos", component: VistaSubirArchivosComponent},
  { path: "proyecto-programa", component: ProyectoProgramaComponent},
  { path: "search", component: SearchComponent},
  { path: "home", component: PageProyectosComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
