import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {MeetingRoomService} from '../../../service/meeting-room.service';
import {Area} from '../../../models/Area';
import {TypeMeetingRoom} from '../../../models/TypeMeetingRoom';
import {RoomStatus} from '../../../models/RoomStatus';
import {Router} from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {OrderEquipment} from '../../../models/OrderEquipment';
import {AngularFireStorage, AngularFireStorageReference} from '@angular/fire/storage';

@Component({
  selector: 'app-create-meeting',
  templateUrl: './create-meeting.component.html',
  styleUrls: ['./create-meeting.component.css']
})
export class CreateMeetingComponent implements OnInit {
  areaList: Area[];
  typeMeetingRoom: TypeMeetingRoom[];
  statusRoomList: RoomStatus[];
  equipmentList: OrderEquipment[];

  selectedFile: File;
  ref: AngularFireStorageReference;
  downloadURL: string;
  checkUpLoadAvt = false;
  @Output()
  giveURL = new EventEmitter<string>();

  constructor(
    private meetingService: MeetingRoomService,
    private router: Router, private form: FormBuilder
    ,private afStorage: AngularFireStorage

  ) { }

  createMeetingRoom = this.form.group({
    name:['', Validators.required],
    floors:['', Validators.required],
    area:['', Validators.required],
    capacity:['', Validators.required],
    typeMeetingRoom:['', Validators.required],
    image:['', Validators.required],
    equipment: this.form.array(['', Validators.required])
  })

  ngOnInit(): void {
    this.getArea();
    // this.getRoomStatus();
    this.getTypeMeetingRoom();
  }

  onFileChanged($event){
    this.selectedFile = $event.target.files[0];
  }

  onUpLoad(){
    this.checkUpLoadAvt = true;
    const id = Math.random().toString(36).substring(2);
    this.ref = this.afStorage.ref(id);
    this.ref.put(this.selectedFile)
      .then(snapshot =>{
        return snapshot.ref.getDownloadURL();
      })
      .then(downloadURL => {
        this.downloadURL = downloadURL;
        this.giveURL.emit(this.downloadURL)
        this.checkUpLoadAvt = false;
        return downloadURL;
      })
      .catch(error => {
        console.log('error');
      })
  }

  onSubmit(createMeetingRoom: FormGroup){
    this.meetingService.addMeetingRoom(createMeetingRoom.value).subscribe(
      (data) => {
        // this._snackBar.open('Đã thêm thành công', 'Ok',{duration: 2000});
        this.router.navigateByUrl('');
      }, error => console.log('lỗi thêm mới ')
    )
  }

  getArea(){
    this.meetingService.getArea().subscribe((data) => {
      this.areaList = data;
    }, error => console.log('data area error'))
  }

  getTypeMeetingRoom(){
    this.meetingService.getTypeMeetingRoom().subscribe((data) => {
      this.typeMeetingRoom = data;
    }, error => console.log('data type meeting room error'))
  }

  getRoomStatus(){
    this.meetingService.getRoomStatus().subscribe((data) => {
      this.statusRoomList = data;
    }, error => console.log('data Room status error'))
  }

  deleteInfoCreate(){
    if (this.createMeetingRoom.value != null) {
      // this.createMeetingRoom.setValue("");
    }
  }

  getEquipment() {

  }
}
