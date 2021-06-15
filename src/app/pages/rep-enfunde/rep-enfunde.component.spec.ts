import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RepEnfundeComponent } from './rep-enfunde.component';

describe('RepEnfundeComponent', () => {
  let component: RepEnfundeComponent;
  let fixture: ComponentFixture<RepEnfundeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RepEnfundeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RepEnfundeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
