import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RepInventarioComponent } from './rep-inventario.component';

describe('RepInventarioComponent', () => {
  let component: RepInventarioComponent;
  let fixture: ComponentFixture<RepInventarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RepInventarioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RepInventarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
