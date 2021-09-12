import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChooseEquipmentComponent } from './choose-equipment.component';

describe('ChooseEquipmentComponent', () => {
  let component: ChooseEquipmentComponent;
  let fixture: ComponentFixture<ChooseEquipmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChooseEquipmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChooseEquipmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
