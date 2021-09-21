import {Component, Inject, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {EquipmentManagerService} from '../../../service/equipment-manager.service';
import {Router} from '@angular/router';
import {formatDate} from '@angular/common';
import {finalize} from 'rxjs/operators';
import {AngularFireStorage} from '@angular/fire/storage';
import {ToastrService} from 'ngx-toastr';
import {HttpErrorResponse} from '@angular/common/http';
import {Equipment} from '../../../model/entity/Equipment';
@Component({
  selector: 'app-create-equipment',
  templateUrl: './create-equipment.component.html',
  styleUrls: ['./create-equipment.component.css']
})
export class CreateEquipmentComponent implements OnInit {
  createEquipment: FormGroup;
  filePath: string = null;
  inputImage: any = null;
  equipment: Equipment;
  listError: any = '';
  defaultImage = 'https://doanhnhanplus.vn/wp-content/uploads/2020/03/Dnp-Plus-Default-Avatar.png';


  constructor(private equipmentManagerService: EquipmentManagerService, private router: Router,
              @Inject(AngularFireStorage) private storage: AngularFireStorage,
              private toastrService: ToastrService,
              private formBuilder: FormBuilder,) {
  }

  validationMessage = {
    name: [
      {type: 'required', message: 'Tên tài sản không được để trống.'},
      {type: 'minlength', message: 'Tên tài sản phải tối thiểu 4 ký tự.'},
      {type: 'maxlength', message: 'Tên tài sản tối đa 32 ký tự.'},
      {type: 'pattern', message: 'Tên tài sản không được nhập số.'}
    ],
    stock: [
      {type: 'required', message: 'Số lượng không được để trống.'},
      {type: 'pattern', message: 'Vui lòng nhập ký tự số.'}

    ],
    repairQuantity: [
      {type: 'required', message: 'Số lượng không được để trống.'},
      {type: 'pattern', message: 'Vui lòng nhập ký tự số.'}
    ]
  };

  ngOnInit(): void {
    this.initForm();
  }

  onSubmit() {
    if (this.inputImage != null) {
      const imageName = formatDate(new Date(), 'dd-MM-yyyyhhmmssa', 'en-US') + this.inputImage.name;
      const fileRef = this.storage.ref(imageName);
      this.storage.upload(imageName, this.inputImage).snapshotChanges().pipe(
        finalize(() => {
          fileRef.getDownloadURL().subscribe((url) => {

            this.equipmentManagerService.addNewEquipment({...this.createEquipment.value, imageUrl: url}).subscribe(
              () => {
                this.router.navigateByUrl('/list-equipment').then(
                  re => this.toastrService.success(
                    'Bạn đã thêm mới thành công',
                    'Thông báo',
                    {timeOut: 3000, extendedTimeOut: 1500})
                );
              },
              (error: HttpErrorResponse) => {
                console.log(error);
                if (error.status === 400) {
                  console.log(error.error);
                  this.listError = error.error;
                }
                this.toastrService.error(
                  'Bạn đã thêm mới thất bại',
                  'Thông báo',
                  {timeOut: 3000, extendedTimeOut: 1500});

              });
          });
        })
      ).subscribe();
    }else {
      this.equipmentManagerService.addNewEquipment(this.createEquipment.value).subscribe(
        () => {
          this.router.navigateByUrl('/list-equipment').then(
            r => this.toastrService.success(
              'Bạn đã thêm mới thành công',
              'Thông báo',
              {timeOut: 3000, extendedTimeOut: 1500})
          );
        },
        (error: HttpErrorResponse) => {
          console.log(error);
          // tslint:disable-next-line:triple-equals
          if (error.status == 400) {
            console.log(error.error);
            this.listError = error.error;
          }

          this.toastrService.error(
            'Bạn đã thêm mới thất bại',
            'Thông báo',
          );
        });
    }
  }

  initForm() {
    this.createEquipment = this.formBuilder.group({
      name: this.formBuilder.control('', [
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(32),
        Validators.pattern("^[\\D]+$")
      ]),
      stock: this.formBuilder.control('', [
        Validators.required, Validators.pattern('^[0-9]+$')],
       ),
      repairQuantity: this.formBuilder.control('', [
        Validators.required,Validators.pattern('^[0-9]+$')
      ]),
      imageURL: this.formBuilder.control('')
    });
  }

  selectImage(event) {
    this.inputImage = event.target.files[0];
    this.createEquipment.get('imageURL').updateValueAndValidity();
    const reader = new FileReader();
    reader.onload = () => {
      this.filePath = reader.result as string;
    };
    reader.readAsDataURL(this.inputImage);
  }

  getImageUrl(){
    if (this.filePath != null){
      return this.filePath;
    }
    if (this.createEquipment.value.imageUrl != null){
      return this.createEquipment.value.imageUrl;
    }
    return this.defaultImage;
  }
}
