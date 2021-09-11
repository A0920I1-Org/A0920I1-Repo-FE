import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ListEquipmentComponent} from './admin/equipment-manager/list-equipment/list-equipment.component';
import {CreateEquipmentComponent} from './admin/equipment-manager/create-equipment/create-equipment.component';
import {DetailEquipmentComponent} from './admin/equipment-manager/detail-equipment/detail-equipment.component';
import {UpdateEquipmentComponent} from './admin/equipment-manager/update-equipment/update-equipment.component';


const routes: Routes = [
  {path: 'list-equipment' , component : ListEquipmentComponent},
  {path: 'create-equipment' , component: CreateEquipmentComponent},
  {path: ':id' , component : DetailEquipmentComponent},
  {path: 'update-equipment/:id' , component: UpdateEquipmentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
