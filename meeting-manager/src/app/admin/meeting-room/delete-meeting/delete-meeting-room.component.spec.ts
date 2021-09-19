import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteMeetingRoomComponent } from './delete-meeting-room.component';

describe('DeleteMeetingComponent', () => {
  let component: DeleteMeetingRoomComponent;
  let fixture: ComponentFixture<DeleteMeetingRoomComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteMeetingRoomComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteMeetingRoomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
