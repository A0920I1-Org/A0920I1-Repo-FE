import {Component, OnInit} from '@angular/core';
import {EquipmentManagerService} from '../../../service/equipment-manager.service';
import {Equipment} from '../../../model/Equipment';
import {MatDialog} from '@angular/material/dialog';
import {DeleteEquipmentComponent} from '../delete-equipment/delete-equipment.component';


@Component({
  selector: 'app-list-equipment',
  templateUrl: './list-equipment.component.html',
  styleUrls: ['./list-equipment.component.css']
})
export class ListEquipmentComponent implements OnInit {
  equipment: Equipment[];

  constructor(private equipmentManagerService: EquipmentManagerService, private dialog: MatDialog) {
  }

  ngOnInit(): void {
    this.equipmentManagerService.getAllEquipment().subscribe((data) => {
        this.equipment = data;
      }
    );
  }
  openDialogDelete(equipmentId): void {
    this.equipmentManagerService.findById(equipmentId).subscribe(data => {
      console.log(data);
      const dialogReg = this.dialog.open(DeleteEquipmentComponent, {
        width : '500px',
        data : {data1: data},
        disableClose : true
      });
      dialogReg.afterClosed().subscribe(result => {
        this.ngOnInit();
      });
    });
  }
  deleteEquipment(id: number){
    this.equipmentManagerService.deleteEquipment(id).subscribe((data) => {
      console.log( 'xóa thành công' );
    });
  }
}
