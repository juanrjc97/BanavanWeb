import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RacimoComponent } from './racimo.component';

describe('RacimoComponent', () => {
  let component: RacimoComponent;
  let fixture: ComponentFixture<RacimoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RacimoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RacimoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
