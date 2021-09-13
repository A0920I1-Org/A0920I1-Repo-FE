import {Component, Inject, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {Equipment} from '../../../model/Equipment';
import {EquipmentManagerService} from '../../../service/equipment-manager.service';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {formatDate} from '@angular/common';
import {MatSnackBar} from '@angular/material/snack-bar';
import {AngularFireStorage} from '@angular/fire/storage';
import {finalize} from 'rxjs/operators';

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
              @Inject(AngularFireStorage) private storage: AngularFireStorage) {
  }

  ngOnInit(): void {
    this.updateEquipment = this.fb.group({
      id: [('')],
      name: [('')],
      stock: [('')],
      repairQuantity: [('')],
      imageUrl: [('')],
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
      this.router.navigate(['/list-equipment']).then(e => this._snackBar.open("Sửa thành công!", "Ok", {duration: 2000}));
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
