<<<<<<< HEAD:meeting-manager/src/app/client/employee/feedback/detail-feedback/detail-feedback.component.spec.ts
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailFeedbackComponent } from './detail-feedback.component';

describe('DetailFeedbackComponent', () => {
  let component: DetailFeedbackComponent;
  let fixture: ComponentFixture<DetailFeedbackComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailFeedbackComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailFeedbackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
=======
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteFeedbackComponent } from './delete-feedback.component';

describe('DeleteFeedbackComponent', () => {
  let component: DeleteFeedbackComponent;
  let fixture: ComponentFixture<DeleteFeedbackComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteFeedbackComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteFeedbackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
>>>>>>> feedback-manager:meeting-manager/src/app/admin/feedback-manager/delete-feedback/delete-feedback.component.spec.ts
