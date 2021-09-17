import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HandlebarsMeetinghouseComponent } from './handlebars-meetinghouse.component';

describe('HandlefeedbackMeetingroomComponent', () => {
  let component: HandlebarsMeetinghouseComponent;
  let fixture: ComponentFixture<HandlebarsMeetinghouseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HandlebarsMeetinghouseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HandlebarsMeetinghouseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
