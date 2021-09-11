import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
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
      name: new FormControl('', [Validators.required]),
      repairQuantity: new FormControl('', [Validators.required]),
      stock: new FormControl('', [Validators.required]),
      image: new FormControl('')
    });
  }
  getForm() {
    this.equipmentManagerService.addNewEquipment(this.createEquipment.value).subscribe((data) => {
      this.router.navigate(['/list-equipment']);
    });
  }
}
