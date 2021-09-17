<<<<<<< HEAD:meeting-manager/src/app/admin/equipment-manager/delete-equipment/delete-equipment.component.spec.ts
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteEquipmentComponent } from './delete-equipment.component';

describe('DeleteEquipmentComponent', () => {
  let component: DeleteEquipmentComponent;
  let fixture: ComponentFixture<DeleteEquipmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteEquipmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteEquipmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
=======
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListEquipmentComponent } from './list-equipment.component';

describe('ListEquipmentComponent', () => {
  let component: ListEquipmentComponent;
  let fixture: ComponentFixture<ListEquipmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListEquipmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListEquipmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
>>>>>>> meeting-room:meeting-manager/src/app/admin/equipment-manager/list-equipment/list-equipment.component.spec.ts
