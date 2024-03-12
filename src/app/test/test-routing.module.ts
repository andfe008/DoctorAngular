import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from '../compartido/layout/layout.component';
import { TestRoutingComponent } from './test-routing/test-routing.component';
import { EspecialidadComponent } from '../especialidad/pages/especialidad/especialidad.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: '', component: TestRoutingComponent },
      { path: 'especialidades', component: EspecialidadComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TestRoutingModule { }
