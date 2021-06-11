import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { LoteService } from './lote.service';

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
});
