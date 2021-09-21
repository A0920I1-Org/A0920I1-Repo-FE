import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Equipment} from '../model/entity/Equipment';

@Injectable({
  providedIn: 'root'
})
export class EquipmentManagerService {
  private readonly API_EQUIPMENT = 'http://localhost:8080/api';
  constructor(private httpClient: HttpClient) {
  }
  // listEquipment- PhapNT
  getAllEquipment(): Observable<Equipment[]>{
    return this.httpClient.get<Equipment[]>(this.API_EQUIPMENT + '/list-equipment');
  }
  // addEquipment - PhapNT
  addNewEquipment(equipment: Equipment): Observable<void>{
    return this.httpClient.post<void>(this.API_EQUIPMENT + '/create-equipment', equipment );
  }
// findId - PhapNT
  findById(id: number): Observable<Equipment>{
    return this.httpClient.get<Equipment>(this.API_EQUIPMENT + '/findById/' + id);
  }
  // updateEquipment - PhapNT
  updateEquipment(equipment: Equipment): Observable<void>{
    return this.httpClient.put<void>(this.API_EQUIPMENT + '/update-equipment/' + equipment.id, equipment);
  }
  // deleteEquipment - PhapNT
  deleteEquipment(id: number){
    return this.httpClient.delete(this.API_EQUIPMENT + '/delete-equipment/' + id);
  }
 // searchName - PhapNT
  findByName(nameSearch: string): Observable<Equipment[]>{
    return this.httpClient.get<Equipment[]>(this.API_EQUIPMENT + '/searchNameEquipment?name=' + nameSearch);
  }
}
