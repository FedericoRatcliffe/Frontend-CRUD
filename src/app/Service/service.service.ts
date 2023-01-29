import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Persona} from '../Modelo/Persona';
import Turno from '../Modelo/Turno';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  
  //definimos en el constructor el HttpClient para conectarnos al backend por REST(web service)
  constructor(private http:HttpClient) { }
  
  //ruta del backend
  Url='http://localhost:8080'; //ruta del proyecto backend en Java
  
  // metodo para obtener datos de las personas del backend
  getPersonas(){
    return this.http.get<Persona[]>(this.Url);
  }

  createPersona(persona:Persona){
    return this.http.post<Persona>(this.Url,persona);
  }

  //OBTENER 
  getPersonaId(id:number){
    return this.http.get<Persona>(this.Url+'/'+id);
  }
  
  //ACTUALIZAR
  updatePersona(persona:Persona){
    return this.http.put<Persona>(this.Url+'/'+persona.id,persona);
  }
  
  //BORRAR
  deletePersona(persona:Persona){
    return this.http.delete<Persona>(this.Url+'/'+persona.id);
  }



  getTurno(){
    return this.http.get<Turno[]>(this.Url+'/turno');
  }
  

}


//EL SERVICIO HACE LA CONEXION AL PROYECTO BACKEND