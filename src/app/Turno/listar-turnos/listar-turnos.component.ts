import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Persona from 'src/app/Modelo/Persona';
import Turno from 'src/app/Modelo/Turno';
import { ServiceService } from 'src/app/Service/service.service';

@Component({
  selector: 'app-listar-turnos',
  templateUrl: './listar-turnos.component.html',
  styleUrls: ['./listar-turnos.component.css']
})
export class ListarTurnosComponent implements OnInit {

  //turnos:Turno[];
  persona:Persona[];
turno: any;
  constructor(private service:ServiceService, private router:Router) { }


  ngOnInit(): void {
    this.service.getTurno()
    .subscribe(data=>{
      console.log(data);
      this.turno=data;
    })
  }

}
