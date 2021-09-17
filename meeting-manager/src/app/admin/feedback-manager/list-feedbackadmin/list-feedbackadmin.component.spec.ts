import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListFeedbackadminComponent } from './list-feedbackadmin.component';

describe('ListFeedbackadminComponent', () => {
  let component: ListFeedbackadminComponent;
  let fixture: ComponentFixture<ListFeedbackadminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListFeedbackadminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListFeedbackadminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
