import {Component, Inject, OnInit} from '@angular/core';
import {EquipmentManagerService} from '../../../service/equipment-manager.service';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-delete-equipment',
  templateUrl: './delete-equipment.component.html',
  styleUrls: ['./delete-equipment.component.css']
})
export class DeleteEquipmentComponent implements OnInit {
  public nameEquipment;
  public idEquipment;

  constructor(private equipmentManagerService: EquipmentManagerService,
              public dialogRef: MatDialogRef<DeleteEquipmentComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any) {
  }

  ngOnInit(): void {
    this.nameEquipment = this.data.data1.name;
    this.idEquipment = this.data.data1.id;
  }
  deleteEquipment() {
    this.equipmentManagerService.deleteEquipment(this.idEquipment).subscribe((data) => {
      this.dialogRef.close();
    });
  }

}
