import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeedbackTechnicalUpdateComponent } from './feedback-technical-update.component';

describe('FeedbackTechnicalUpdateComponent', () => {
  let component: FeedbackTechnicalUpdateComponent;
  let fixture: ComponentFixture<FeedbackTechnicalUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeedbackTechnicalUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeedbackTechnicalUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
