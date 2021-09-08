import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterMeetingComponent } from './register-meeting.component';

describe('RegisterMeetingComponent', () => {
  let component: RegisterMeetingComponent;
  let fixture: ComponentFixture<RegisterMeetingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterMeetingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterMeetingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
