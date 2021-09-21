import {Component, Inject, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {EquipmentManagerService} from '../../../service/equipment-manager.service';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {formatDate} from '@angular/common';
import {AngularFireStorage} from '@angular/fire/storage';
import {finalize} from 'rxjs/operators';
import {ToastrService} from 'ngx-toastr';
import {Equipment} from '../../../model/entity/Equipment';
import {HttpErrorResponse} from "@angular/common/http";

@Component({
  selector: 'app-update-equipment',
  templateUrl: './update-equipment.component.html',
  styleUrls: ['./update-equipment.component.css']
})
export class UpdateEquipmentComponent implements OnInit {
  updateEquipment: FormGroup;
  editEquipment: Equipment;
  filePath: string = null;
  inputImage: any = null;
  listError: any = '';
  defaultImage: string;
  idEquipment:number;

  constructor(private equipmentManagerService: EquipmentManagerService, private router: Router,
              @Inject(AngularFireStorage) private storage: AngularFireStorage, private activatedRoute: ActivatedRoute,
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
    this.updateEquipment = this.formBuilder.group({
      id: [''],
      name:['',[ Validators.required,
        Validators.minLength(4),
        Validators.maxLength(32),
        Validators.pattern("^[\\D]+$")]],
      stock: ['', [Validators.required, Validators.pattern('^[0-9]+$')]],
      repairQuantity: ['',[Validators.required, Validators.pattern('^[0-9]+$')]],
      imageURL: ['']
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
          imageURL: this.editEquipment.imageUrl
        });
      });
    });
  }




  onSubmit() {
    if (this.inputImage != null) {
      const imageName = formatDate(new Date(), 'dd-MM-yyyyhhmmssa', 'en-US') + this.inputImage.name;
      const fileRef = this.storage.ref(imageName);
      this.storage.upload(imageName, this.inputImage).snapshotChanges().pipe(
        finalize(() => {
          fileRef.getDownloadURL().subscribe((url) => {

            this.equipmentManagerService.updateEquipment({...this.updateEquipment.value, imageUrl: url}).subscribe(
              () => {
                this.router.navigateByUrl('/list-equipment').then(
                  re => this.toastrService.success(
                    'Bạn đã cập nhật thành công',
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
                  'Bạn đã cập nhật thất bại',
                  'Thông báo',
                  {timeOut: 3000, extendedTimeOut: 1500});

              });
          });
        })
      ).subscribe();
    }else {
      this.equipmentManagerService.updateEquipment(this.updateEquipment.value).subscribe(
        () => {
          this.router.navigateByUrl('/list-equipment').then(
            r => this.toastrService.success(
              'Bạn đã cập nhật thành công',
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
            'Bạn đã cập nhật thất bại',
            'Thông báo',
          );
        });
    }
  }

  initForm() {
    this.updateEquipment = this.formBuilder.group({
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
      imageURL: this.formBuilder.control(null, [
        Validators.required
      ])
    });
  }

  selectImage(event) {
    this.inputImage = event.target.files[0];
    this.updateEquipment.get('imageURL').updateValueAndValidity();
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
    else if (this.editEquipment){
      return this.editEquipment.imageUrl;
    }
    return this.defaultImage;
  }
}
