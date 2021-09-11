import {Component, OnInit} from '@angular/core';
import {Equipment} from '../../../model/Equipment';
import {EquipmentManagerService} from '../../../service/equipment-manager.service';
import {ActivatedRoute, ParamMap} from '@angular/router';

@Component({
  selector: 'app-detail-equipment',
  templateUrl: './detail-equipment.component.html',
  styleUrls: ['./detail-equipment.component.css']
})
export class DetailEquipmentComponent implements OnInit {
  idEquipment: number;
  equipmentDetail: Equipment;

  constructor(private equipmentManagerService: EquipmentManagerService,
              private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      // tslint:disable-next-line:radix
      this.idEquipment = parseInt(paramMap.get('id'));
      this.equipmentManagerService.findById(this.idEquipment).subscribe((data) => {
        this.equipmentDetail = data;
        console.log(this.equipmentDetail);
      });
    });
  }
  }


