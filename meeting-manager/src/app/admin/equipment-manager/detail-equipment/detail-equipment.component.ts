import {Component, OnInit} from '@angular/core';
import {Equipment} from '../../../model/Equipment';
import {EquipmentManagerService} from '../../../service/equipment-manager.service';
import {ActivatedRoute, ParamMap} from '@angular/router';
import {OrderEquipmentServiceService} from '../../../service/order-equipment-service.service';
import {OrderEquipment} from '../../../model/OrderEquipment';

@Component({
  selector: 'app-detail-equipment',
  templateUrl: './detail-equipment.component.html',
  styleUrls: ['./detail-equipment.component.css']
})
export class DetailEquipmentComponent implements OnInit {
  idEquipment: number;
  equipmentDetail: Equipment;
  orderEquipment: OrderEquipment;
  idOrder: number;

  constructor(private equipmentManagerService: EquipmentManagerService, private orderEquipmentServiceService: OrderEquipmentServiceService,

              private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.orderEquipmentServiceService.getByOrderEquipment(this.idOrder).subscribe((data) => {
        this.orderEquipment = data;
      }
    );
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      // tslint:disable-next-line:radix
      this.idEquipment = parseInt(paramMap.get('id'));
      this.equipmentManagerService.findById(this.idEquipment).subscribe((data) => {
        this.equipmentDetail = data;
        console.log(data);
      });
    });
    // this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
    //   // tslint:disable-next-line:radix
    //   this.idOrder = parseInt(paramMap.get('id'));
    //   this.orderEquipmentServiceService.getByOrderEquipment(this.idOrder).subscribe((data) => {
    //     this.orderEquipment = data;
    //   });
    // });
  }
  }


