import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeedbackTechnicalCreateComponent } from './feedback-technical-create.component';

describe('FeedbackTechnicalCreateComponent', () => {
  let component: FeedbackTechnicalCreateComponent;
  let fixture: ComponentFixture<FeedbackTechnicalCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeedbackTechnicalCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeedbackTechnicalCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
