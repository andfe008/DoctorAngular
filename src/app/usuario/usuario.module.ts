import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompartidoModule } from '../compartido/compartido.module';
import { UsuarioServices } from './servicios/usuario.service.ts.service';
import { LoginComponent } from './login/login.component';
import { MaterialModule } from '../material/material.module';



@NgModule({
  declarations: [
    LoginComponent
  ],
  exports:[
   LoginComponent
  ],
  imports: [
    CommonModule,CompartidoModule,MaterialModule
  ],
  providers:[
     UsuarioServices
  ]

})
export class UsuarioModule { }
