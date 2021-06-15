import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RepRacimosPComponent } from './rep-racimos-p.component';

describe('RepRacimosPComponent', () => {
  let component: RepRacimosPComponent;
  let fixture: ComponentFixture<RepRacimosPComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RepRacimosPComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RepRacimosPComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
