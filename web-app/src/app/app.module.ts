import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginComponent } from './login/login.component';
import { ComponentesResueltosComponent } from './componentes-resueltos/componentes-resueltos.component';
import { MobileLoginComponent } from './mobile-login/mobile-login.component';
import { PageProyectosComponent } from './page-proyectos/page-proyectos.component';
import { PageProyectoComponent } from './page-proyecto/page-proyecto.component';
import { FormCrearProyectoComponent } from './form-crear-proyecto/form-crear-proyecto.component';
import { VistaSubirArchivosComponent } from './vista-subir-archivos/vista-subir-archivos.component';
import { HomeComponent } from './home/home.component';
import { SearchComponent } from './search/search.component';
import { PerfilDepartamentoComponent } from './perfil-departamento/perfil-departamento.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    ComponentesResueltosComponent,
    MobileLoginComponent,
    PageProyectosComponent,
    PageProyectoComponent,
    FormCrearProyectoComponent,
    VistaSubirArchivosComponent,
    HomeComponent,
    SearchComponent,
    PerfilDepartamentoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
