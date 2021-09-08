import { Component, OnInit } from '@angular/core';
import {MeetingRoomService} from '../../../service/meeting-room.service';
import {FormBuilder} from '@angular/forms';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-detail-meeting',
  templateUrl: './detail-meeting.component.html',
  styleUrls: ['./detail-meeting.component.css']
})
export class DetailMeetingComponent implements OnInit {
  id:number;

  constructor(
    private meetingService: MeetingRoomService,
    private form: FormBuilder,
    private activatedRoute: ActivatedRoute
  ) { }

  formMeetingDetails = this.form.group({
    id: [''],
    name: [''],
    floors: [''],
    area: [''],
    capacity: [''],
    typeRoom: [''],
    status: [''],
    numberOfUses: [''],
    equipment: this.form.array(['']),
  })
  ngOnInit(): void {
    console.log(this.activatedRoute.snapshot.params.id);
    this.meetingService.findMeetingRoomById(this.activatedRoute.snapshot.params.id).subscribe((data) => {
      this.formMeetingDetails.setValue(data);
      console.log(data);
    })
  }

}
