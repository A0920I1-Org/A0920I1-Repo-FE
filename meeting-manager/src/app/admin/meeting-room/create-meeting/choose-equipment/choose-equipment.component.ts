import {Component, Inject, OnInit} from '@angular/core';
import {Equipment} from '../../../../models/Equipment';
import {MeetingRoomService} from '../../../../service/meeting-room.service';
import {MAT_DIALOG_DATA, MatDialog} from '@angular/material/dialog';
import {OrderEquipment} from '../../../../models/OrderEquipment';
import {FormArray, FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-choose-equipment',
  templateUrl: './choose-equipment.component.html',
  styleUrls: ['./choose-equipment.component.css']
})
export class ChooseEquipmentComponent implements OnInit {
  equipmentList: Equipment[] = [];
  orderEquipment: OrderEquipment[];
  page = 1;

  searchName: string;
  createOrderEquipment: any;

  constructor(
    private meetingService: MeetingRoomService,
    private dialog: MatDialog,
    private form: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
    this.getEquipment();

    this.createOrderEquipment = this.form.group({
      order: this.form.array([

      ])
    })

  }

  closeDialog(){
    this.dialog.closeAll();
  }

  onSubmit(createOrderEquipment: FormGroup){
    console.log(createOrderEquipment.value);

  }

  searchByNameEquipment($event){
    this.meetingService.searchEquipmentByName($event.target.files[0]).subscribe((data) => {
      this.equipmentList =  data;
    });
    this.ngOnInit();
  }

  getEquipment(){
    this.meetingService.getEquipment().subscribe((data) => {
      this.equipmentList = data;
      // this.totalPage = data.totalPages;
    })
  }

}
