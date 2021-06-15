import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApuntaladoComponent } from './apuntalado.component';

describe('ApuntaladoComponent', () => {
  let component: ApuntaladoComponent;
  let fixture: ComponentFixture<ApuntaladoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApuntaladoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ApuntaladoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
