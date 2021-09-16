import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {Equipment} from '../model/Equipment';
import {HttpClient} from '@angular/common/http';
import {OrderEquipment} from '../model/OrderEquipment';

@Injectable({
  providedIn: 'root'
})
export class OrderEquipmentServiceService {
  private readonly API_ORDER_EQUIPMENT = 'http://localhost:8080/api';

  constructor(private httpClient: HttpClient) { }

  getAllOrderEquipment(idEquipment: number): Observable<OrderEquipment[]>{
    return this.httpClient.get<OrderEquipment[]>(this.API_ORDER_EQUIPMENT + '/order-equipment');
  }
  getByOrderEquipment(id: number): Observable<OrderEquipment[]>{
    return this.httpClient.get<OrderEquipment[]>(this.API_ORDER_EQUIPMENT + '/byOrder-equipment/+id');
  }
}
