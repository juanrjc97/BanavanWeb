import { DatePipe } from '@angular/common';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RepEnfundadoSemanaService } from 
'src/app/services/rep-semana/rep-enfundado-semana/rep-enfundado-semana.service';

import { RepEnfundeComponent } from './rep-enfunde.component';

describe('RepEnfundeComponent', () => {
  let component: RepEnfundeComponent;
  let fixture: ComponentFixture<RepEnfundeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [RepEnfundeComponent],
      providers: [RepEnfundadoSemanaService, DatePipe],
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
