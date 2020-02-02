import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ComponentesResueltosComponent } from './componentes-resueltos/componentes-resueltos.component';
const routes: Routes = [
  {path:'login', component:LoginComponent},
  {path:'', component:ComponentesResueltosComponent}
  // {path:'/', component:}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
