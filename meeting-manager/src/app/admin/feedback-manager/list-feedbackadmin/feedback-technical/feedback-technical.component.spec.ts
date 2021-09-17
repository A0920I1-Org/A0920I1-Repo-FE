import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeedbackTechnicalComponent } from './feedback-technical.component';

describe('FeedbackTechnicalComponent', () => {
  let component: FeedbackTechnicalComponent;
  let fixture: ComponentFixture<FeedbackTechnicalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeedbackTechnicalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeedbackTechnicalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
