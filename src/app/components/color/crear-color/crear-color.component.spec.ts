import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearColorComponent } from './crear-color.component';

describe('CrearColorComponent', () => {
  let component: CrearColorComponent;
  let fixture: ComponentFixture<CrearColorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrearColorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearColorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
