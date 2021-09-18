import {Component, Inject, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Equipment} from '../../../model/Equipment';
import {EquipmentManagerService} from '../../../service/equipment-manager.service';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {formatDate} from '@angular/common';
import {MatSnackBar} from '@angular/material/snack-bar';
import {AngularFireStorage} from '@angular/fire/storage';
import {finalize} from 'rxjs/operators';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-update-equipment',
  templateUrl: './update-equipment.component.html',
  styleUrls: ['./update-equipment.component.css']
})
export class UpdateEquipmentComponent implements OnInit {
  updateEquipment: FormGroup;
  editEquipment: Equipment;
  idEquipment: number;
  imgUpdate: any;

  constructor(private equipmentManagerService: EquipmentManagerService, private fb: FormBuilder,
              private router: Router, private activatedRoute: ActivatedRoute,
              private _snackBar: MatSnackBar,
              @Inject(AngularFireStorage) private storage: AngularFireStorage,
              private toastrService: ToastrService) {
  }
  validationMessage = {
    name: [
      { type: 'required', message: 'Tên tài sản không được để trống.' },
      { type: 'minlength', message: 'Tên tài sản phải tối thiểu 4 ký tự.' },
      { type: 'maxlength', message: 'Tên tài sản tối đa 32 ký tự.' },
      {type: 'pattern', message: 'Vui lòng nhập tên không có ký tự số.'}
    ],
    stock: [
      { type: 'required', message: 'Số lượng không được để trống.' },
      {type: 'pattern', message: 'Vui lòng nhập số.'}
    ],
    repairQuantity: [
      { type: 'required', message: 'Số lượng không được để trống.' },
      {type: 'pattern', message: 'Vui lòng nhập số.'}
    ]
  };

  ngOnInit(): void {
    this.updateEquipment = this.fb.group({
      id: [''],
      name: ['',[Validators.required,Validators.minLength(4),Validators.maxLength(32),Validators.pattern("\\D+")]],
      stock: [(''),[Validators.required,Validators.pattern("^[0-9]+$")]],
      repairQuantity: [(''),[Validators.required,Validators.pattern("^[0-9]+$")]],
      imageUrl: [('')]
    });
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      // tslint:disable-next-line:radix
      this.idEquipment = parseInt(paramMap.get('id'));
      this.equipmentManagerService.findById(this.idEquipment).subscribe((data) => {
        this.editEquipment = data;
        console.log(this.editEquipment);
        this.updateEquipment.patchValue({
          id : this.editEquipment.id,
          name: this.editEquipment.name,
          stock: this.editEquipment.stock,
          repairQuantity: this.editEquipment.repairQuantity,
          imageUrl: this.editEquipment.imageUrl
        });
      });
    });
  }
  getUpdate() {
    this.equipmentManagerService.updateEquipment(this.updateEquipment.value).subscribe((data) => {
      console.log(data);
      this.router.navigate(['/list-equipment']).then(e => this.toastrService.success("Bạn đã cập nhật thành công!", "Thông báo"));
    });
  }
  getCurrentDateTime(): string {
    return formatDate(new Date(), 'dd-MM-yyyyhhmmssa', 'en-US');
  }

   onSubmit(updateEquipment: FormGroup){
    console.log(updateEquipment.value);
    const nameImage = this.getCurrentDateTime() + this.imgUpdate.name;
    const fileRef = this.storage.ref(nameImage);

    // chưa set name khi up firebase
    this.storage.upload(nameImage, this.imgUpdate).snapshotChanges().pipe(
      finalize(() => {
        fileRef.getDownloadURL().subscribe((url) => {
          this.updateEquipment.patchValue({imageUrl: url});
          this.getUpdate();
        });
      })
    ).subscribe();
  }
  showImage($event: any) {
    this.imgUpdate = $event.target.files[0];
  }

 }
