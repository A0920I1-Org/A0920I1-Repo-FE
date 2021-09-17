import {Component, Inject, OnInit} from '@angular/core';

import {MeetingRoomService} from '../../../../service/meeting-room.service';
import {MAT_DIALOG_DATA, MatDialog} from '@angular/material/dialog';

import {FormArray, FormBuilder, FormGroup} from '@angular/forms';
import {Equipment} from '../../../../model/entity/Equipment';
import {OrderEquipment} from '../../../../model/entity/OrderEquipment';

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
  sl: number;

  constructor(
    private meetingService: MeetingRoomService,
    private dialog: MatDialog,
    private form: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
    this.getEquipment();

    this.createOrderEquipment = this.form.group({
      quantity: ['']
    })

  }

  //HueHV tạo ngày 16/9/2021, chức năng đóng Dialog
  closeDialog(){
    this.dialog.closeAll();
  }

  onSubmit(createOrderEquipment: FormGroup){
    console.log(createOrderEquipment.value);

  }

  //HueHV tạo ngày 16/9/2021, chức năng tìm kiếm tài sản theo tên
  searchByNameEquipment(){
    console.log(this.searchName)
    this.meetingService.searchEquipmentByName(this.searchName).subscribe((data) => {
      this.equipmentList =  data;
      console.log(data)
    });
  }

  //HueHV tạo ngày 16/9/2021, chức năng hiển thị danh sách tài sản
  getEquipment(){
    this.meetingService.getEquipment().subscribe((data) => {
      this.equipmentList = data;
      // this.totalPage = data.totalPages;
    })
  }

  listOrder: any[];
  add(id: number) {
    const quantity = document.getElementById("quantity");
    console.log(id);
    console.log(quantity);

    this.listOrder.push(id, quantity);
    console.log(this.listOrder)
  }
}
