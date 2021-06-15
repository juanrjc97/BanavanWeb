import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnfundadoComponent } from './enfundado.component';

describe('EnfundadoComponent', () => {
  let component: EnfundadoComponent;
  let fixture: ComponentFixture<EnfundadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnfundadoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EnfundadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
