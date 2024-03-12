import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Login } from '../interfaces/Login';
import { Sesion } from '../interfaces/sesion';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuarioServices{

  baseUrl: string = environment.apiUrl+"usuario/"

  constructor(private http: HttpClient) { }

  iniciarSesion(request:Login) :Observable<Sesion>{
    return  this.http.post<Sesion>(`${this.baseUrl}login`,request);
  } 
}
