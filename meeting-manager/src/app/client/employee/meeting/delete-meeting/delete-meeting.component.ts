import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {MeetingRoomService} from '../../../../service/meeting-room.service';
import {MatSnackBar} from '@angular/material/snack-bar';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-delete-meeting',
  templateUrl: './delete-meeting.component.html',
  styleUrls: ['./delete-meeting.component.css']
})
export class DeleteMeetingComponent implements OnInit {

  nameMeetingRoom: any;
  idMeetingRoom: any;

  constructor(
    public dialogRef: MatDialogRef<DeleteMeetingComponent>,
    private toastrService: ToastrService,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private meetingRoomService: MeetingRoomService,
    private snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
    this.nameMeetingRoom = this.data.data1.name;
    this.idMeetingRoom = this.data.data1.id;
  }

  delete(){
    this.meetingRoomService.delete(this.idMeetingRoom).subscribe( data => {
      this.toastrService.success('Bạn đã xóa thành công!');
      this.dialogRef.close();
      // this.snackBar.open('Đã xóa thành công!', 'Oke',{duration: 2000});
    });
  }
}
