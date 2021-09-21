import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {OrderEquipment} from '../model/entity/OrderEquipment';

@Injectable({
  providedIn: 'root'
})
export class OrderEquipmentServiceService {
  private readonly API_ORDER_EQUIPMENT = 'http://localhost:8081/api';

  constructor(private httpClient: HttpClient) { }

  getAllOrderEquipment(idEquipment: number): Observable<OrderEquipment[]>{
    return this.httpClient.get<OrderEquipment[]>(this.API_ORDER_EQUIPMENT + '/order-equipment');
  }
  getByOrderEquipment(id: number): Observable<OrderEquipment[]>{
    return this.httpClient.get<OrderEquipment[]>(this.API_ORDER_EQUIPMENT + '/byOrder-equipment/'+id);
  }
}
