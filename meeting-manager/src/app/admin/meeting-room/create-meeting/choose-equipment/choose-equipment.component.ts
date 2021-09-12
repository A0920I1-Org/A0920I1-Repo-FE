import {Component, Inject, OnInit} from '@angular/core';
import {Equipment} from '../../../../models/Equipment';
import {MeetingRoomService} from '../../../../service/meeting-room.service';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-choose-equipment',
  templateUrl: './choose-equipment.component.html',
  styleUrls: ['./choose-equipment.component.css']
})
export class ChooseEquipmentComponent implements OnInit {
  equipmentList: Equipment[] = [];

  constructor(
    private meetingService: MeetingRoomService,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
    this.getEquipment();

  }

  onSubmit(){

  }

  getEquipment(){
    this.meetingService.getEquipment().subscribe((data) => {
      this.equipmentList = data;
      console.log(this.equipmentList);
    })
  }

}
