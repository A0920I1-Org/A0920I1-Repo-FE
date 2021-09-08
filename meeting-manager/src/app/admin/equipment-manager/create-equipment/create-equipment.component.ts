import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {EquipmentManagerService} from '../../../service/equipment-manager.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-create-equipment',
  templateUrl: './create-equipment.component.html',
  styleUrls: ['./create-equipment.component.css']
})
export class CreateEquipmentComponent implements OnInit {
  createEquipment: FormGroup;


  constructor(private equipmentManagerService: EquipmentManagerService, private router: Router) { }

  ngOnInit(): void {
    this.createEquipment = new FormGroup({
      id: new FormControl(''),
      name: new FormControl(''),
      repairQuantity: new FormControl(''),
      stock: new FormControl(''),
      image: new FormControl('')
    });
  }
  getForm() {
    this.equipmentManagerService.addNewEquipment(this.createEquipment.value).subscribe((data) => {
      this.router.navigate(['/']);
    });
  }
}
