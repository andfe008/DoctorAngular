import { HttpClient } from '@angular/common/http';
import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  titulo:string = 'Bienvenidos a doctor App';
  usuarios: any; 

  constructor(private http:HttpClient ){}
  ngOnInit(): void {
    this.http.get('http://localhost:5029/api/Usuario').subscribe({
      next: reponse=> this.usuarios = reponse,
      error: error=> console.log(error),
      complete:()=> console.log('solictud esta completa')
    })
  }
}
