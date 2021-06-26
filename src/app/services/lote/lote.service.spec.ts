import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { LoteService } from './lote.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

describe('LoteService', () => {

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [LoteService],
    });
  });

  it('should be created', () => {
    const service: LoteService = TestBed.inject(LoteService);
    expect(service).toBeTruthy();
  });

  it('should use ValueService', () => {
    const service: LoteService = TestBed.inject(LoteService);
    expect(service.cargarLotes).toBeTruthy();
  });
  it('should use ValueService', () => {
    const service: LoteService = TestBed.inject(LoteService);
    expect(service.eliminarLote).toBeTruthy();
  });
});
