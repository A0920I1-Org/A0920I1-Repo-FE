import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Equipment} from '../model/Equipment';

@Injectable({
  providedIn: 'root'
})
export class EquipmentManagerService {
  private readonly API_EQUIPMENT = 'http://localhost:8080/equipment';
  constructor(private httpClient: HttpClient) {
  }
  getAllEquipment(): Observable<Equipment[]>{
    return this.httpClient.get<Equipment[]>(this.API_EQUIPMENT);
  }
  addNewEquipment(student: Equipment): Observable<void>{
    return this.httpClient.post<void>(this.API_EQUIPMENT, student);
  }

  findById(id: number): Observable<Equipment>{
    return this.httpClient.get<Equipment>(this.API_EQUIPMENT + '/' + id);
  }
  updateEquipment(equipment: Equipment): Observable<void>{
    return this.httpClient.put<void>(this.API_EQUIPMENT + '/' + equipment.id, equipment);
  }
  deleteEquipment(id: number){
    return this.httpClient.delete(this.API_EQUIPMENT + '/' + id);
  }
  searchAllName(keyword, keyword2){
    return this.httpClient.get(this.API_EQUIPMENT + '?name_like=' + keyword + '$equipment.name' + keyword2);
  }
  findByName(nameSearch: string): Observable<Equipment[]>{
    return this.httpClient.get<Equipment[]>(this.API_EQUIPMENT + '?name_like=' + nameSearch);
  }
}
