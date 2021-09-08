import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {RoomStatus} from '../model/RoomStatus';
import {Equipment} from '../model/Equipment';

@Injectable({
  providedIn: 'root'
})
export class EquipmentService {
  private readonly API_URL = 'http://localhost:8080/listEquipment';

  constructor(private httpClient: HttpClient) {
  }

  public getEquipment(): Observable<Equipment[]> {
    return this.httpClient.get<Equipment[]>(this.API_URL);
  }
}
