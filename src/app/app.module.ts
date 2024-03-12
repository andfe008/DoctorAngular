import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import  {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UsuarioModule } from './usuario/usuario.module';
import { tokenSession } from './interceptors/token-session';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    UsuarioModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [{provide: HTTP_INTERCEPTORS, useClass: tokenSession, multi: true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
