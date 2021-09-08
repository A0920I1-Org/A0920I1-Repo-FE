import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {Equipment} from '../../../model/Equipment';
import {EquipmentManagerService} from '../../../service/equipment-manager.service';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';

@Component({
  selector: 'app-update-equipment',
  templateUrl: './update-equipment.component.html',
  styleUrls: ['./update-equipment.component.css']
})
export class UpdateEquipmentComponent implements OnInit {
  updateEquipment: FormGroup;
  editEquipment: Equipment;
  idEquipment: number;

  constructor(private equipmentManagerService: EquipmentManagerService, private fb: FormBuilder,
              private router: Router, private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.updateEquipment = this.fb.group({
      id: [('')],
      name: [('')],
      stock: [('')],
      repairQuantity: [('')],
      imageUrl: [('')],
    });
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      // tslint:disable-next-line:radix
      this.idEquipment = parseInt(paramMap.get('id'));
      this.equipmentManagerService.findById(this.idEquipment).subscribe((data) => {
        this.editEquipment = data;
        console.log(this.editEquipment);
        this.updateEquipment.patchValue({
          id : this.editEquipment.id,
          name: this.editEquipment.name,
          stock: this.editEquipment.stock,
          repairQuantity: this.editEquipment.repairQuantity,
          imageUrl: this.editEquipment.imageUrl
        });
      });
    });
  }
  getUpdate() {
    this.equipmentManagerService.updateEquipment(this.updateEquipment.value).subscribe((data) => {
      this.router.navigate(['/']);
    });
  }

}
