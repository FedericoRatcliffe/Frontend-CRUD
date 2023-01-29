import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})



export class AppComponent {
  title = 'MediGrids';

  //creamos el constructor donde definimos el enrutador
  constructor(private router:Router){}

  //metodo para acceder a la ruta del componente listar
  Listar(){
    this.router.navigate(["listar"]);
  }

  //metodo para acceder a la ruta del componente add
  Nuevo(){
    this.router.navigate(["add"]);
  }

  
  ListarTurnos(){
    this.router.navigate(["turno"]);
  }
  


}