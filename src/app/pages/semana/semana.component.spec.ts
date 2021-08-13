import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { Semana } from 'src/app/models/semana';
import { SemanaComponent } from './semana.component';
import { SemanasService } from 'src/app/services/semanas/semanas.service';

describe('SemanaComponent', () => {
  let component: SemanaComponent;
  let fixture: ComponentFixture<SemanaComponent>;

  const formulario = new FormBuilder();
  const servicio = new SemanasService(null as any);

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReactiveFormsModule, HttpClientTestingModule],
      declarations: [SemanaComponent],
      providers: [SemanasService],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SemanaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
