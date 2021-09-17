import {Component, OnInit} from '@angular/core';
import {EquipmentManagerService} from '../../../service/equipment-manager.service';
import {Equipment} from '../../../model/Equipment';
import {MatDialog} from '@angular/material/dialog';
import {DeleteEquipmentComponent} from '../delete-equipment/delete-equipment.component';
import {ToastrService} from 'ngx-toastr';


@Component({
  selector: 'app-list-equipment',
  templateUrl: './list-equipment.component.html',
  styleUrls: ['./list-equipment.component.css']
})
export class ListEquipmentComponent implements OnInit {
  equipment: Equipment[];
  nameEquipment: String;
  page = 1;
  totalPage: number;

  constructor(private equipmentManagerService: EquipmentManagerService, private dialog: MatDialog,
              private toastrService: ToastrService) {
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
  searchName(): void {
    // @ts-ignore
    this.equipmentManagerService.findByName(this.nameEquipment).subscribe(data => {
        this.equipment = data;
      this.page = 1;
      });
  }
  paginate(page: number) {
    if (page >= 0 && page < this.totalPage) {
      this.page = page;
      this.ngOnInit();
    }
  }
}
