import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService} from 'src/app/Service/service.service'
import { Persona } from 'src/app/Modelo/Persona'

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  constructor(private router:Router, private service:ServiceService) { }

  ngOnInit(): void {
  }

  //METODO GUARDAR
  persona:Persona = new Persona();
  Guardar(){
    this.service.createPersona(this.persona).subscribe(data=>{
      alert("Se ha agregado con exito a "+this.persona.name+" "+this.persona.apellidos);
      this.router.navigate(["listar"]);
  
    })
  }


}
