<<<<<<< HEAD:meeting-manager/src/app/client/employee/feedback/list-feedback/list-feedback.component.spec.ts
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListFeedbackComponent } from './list-feedback.component';

describe('ListFeedbackComponent', () => {
  let component: ListFeedbackComponent;
  let fixture: ComponentFixture<ListFeedbackComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListFeedbackComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListFeedbackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
=======
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeedbackListComponent } from './feedback-list.component';

describe('FeedbackListComponent', () => {
  let component: FeedbackListComponent;
  let fixture: ComponentFixture<FeedbackListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeedbackListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeedbackListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
>>>>>>> feedback-manager:meeting-manager/src/app/client/employee/client-feedback/feedback-list/feedback-list.component.spec.ts
