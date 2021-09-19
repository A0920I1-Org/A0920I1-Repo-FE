import { async, ComponentFixture, TestBed } from '@angular/core/testing';

<<<<<<< HEAD:meeting-manager/src/app/admin/employee-manager/create-employee/create-employee.component.spec.ts
import { CreateEmployeeComponent } from './create-employee.component';

describe('CreateEmployeeComponent', () => {
  let component: CreateEmployeeComponent;
  let fixture: ComponentFixture<CreateEmployeeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateEmployeeComponent ]
=======
import { ChooseEquipmentComponent } from './choose-equipment.component';

describe('ChooseEquipmentComponent', () => {
  let component: ChooseEquipmentComponent;
  let fixture: ComponentFixture<ChooseEquipmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChooseEquipmentComponent ]
>>>>>>> meeting-room:meeting-manager/src/app/admin/meeting-room/create-meeting/choose-equipment/choose-equipment.component.spec.ts
    })
    .compileComponents();
  }));

  beforeEach(() => {
<<<<<<< HEAD:meeting-manager/src/app/admin/employee-manager/create-employee/create-employee.component.spec.ts
    fixture = TestBed.createComponent(CreateEmployeeComponent);
=======
    fixture = TestBed.createComponent(ChooseEquipmentComponent);
>>>>>>> meeting-room:meeting-manager/src/app/admin/meeting-room/create-meeting/choose-equipment/choose-equipment.component.spec.ts
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
