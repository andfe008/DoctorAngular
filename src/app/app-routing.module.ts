import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './usuario/login/login.component';
import { LayoutComponent } from './compartido/layout/layout.component';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent,
    pathMatch: 'full'
  },
  /*{
    path: 'layout', // prueba de ruta layout/dashboard  layout/especialidad
    loadChildren: ()=> import('./compartido/compartido.module').then( m=> m.CompartidoModule)
  },*/
  {
    path: 'test', // prueba de ruta layout/dashboard  layout/especialidad
    loadChildren: ()=> import('./test/test.module').then( m=> m.TestModule)
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full'

  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
