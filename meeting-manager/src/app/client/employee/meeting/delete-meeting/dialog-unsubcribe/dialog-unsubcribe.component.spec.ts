import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogUnsubcribeComponent } from './dialog-unsubcribe.component';

describe('DialogUnsubcribeComponent', () => {
  let component: DialogUnsubcribeComponent;
  let fixture: ComponentFixture<DialogUnsubcribeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogUnsubcribeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogUnsubcribeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
