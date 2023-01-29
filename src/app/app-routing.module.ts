import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {ListarComponent} from './Persona/listar/listar.component';
import { AddComponent } from './Persona/add/add.component';
import { EditComponent} from './Persona/edit/edit.component';
import { ListarTurnosComponent } from './Turno/listar-turnos/listar-turnos.component';

const routes: Routes = [
  //PRECIONANDO EL BOTON NOS MANDA A UN NUEVO COMPONENTE
  {path:'listar',component:ListarComponent},
  {path:'add',component:AddComponent},
  {path:'edit',component:EditComponent},
  {path:'turno',component:ListarTurnosComponent}	
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
