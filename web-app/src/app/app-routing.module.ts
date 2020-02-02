import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ComponentesResueltosComponent } from './componentes-resueltos/componentes-resueltos.component';
const routes: Routes = [
  {path:'', component:LoginComponent},
  {path:'login', component:ComponentesResueltosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
