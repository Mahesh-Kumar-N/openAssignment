import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoanFeaturesComponent } from './loan-features.component';

describe('LoanFeaturesComponent', () => {
  let component: LoanFeaturesComponent;
  let fixture: ComponentFixture<LoanFeaturesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoanFeaturesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoanFeaturesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
