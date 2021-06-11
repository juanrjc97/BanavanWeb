import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MotivoService } from './motivo.service';

describe('MotivoService', () => {

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [MotivoService],
    });
  });

  it('should be created', () => {
    const service: MotivoService = TestBed.inject(MotivoService);
    expect(service).toBeTruthy();
  });
});
