import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RepSemanasComponent } from './rep-semanas.component';

describe('RepSemanasComponent', () => {
  let component: RepSemanasComponent;
  let fixture: ComponentFixture<RepSemanasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RepSemanasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RepSemanasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
