import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { Motivo } from 'src/app/models/motivo';
import { MotivoComponent } from './motivo.component';
import { MotivoService } from 'src/app/services/motivo/motivo.service';

describe('MotivoComponent', () => {
  let component: MotivoComponent;
  let fixture: ComponentFixture<MotivoComponent>;

  const formulario = new FormBuilder();
  const servicio = new MotivoService(null as any);

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReactiveFormsModule, HttpClientTestingModule],
      declarations: [MotivoComponent],
      providers: [MotivoService],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MotivoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
