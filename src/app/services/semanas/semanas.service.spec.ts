import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { SemanasService } from './semanas.service';

describe('SemanasService', () => {

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [SemanasService],
    });
  });

  it('should be created', () => {
    const service: SemanasService = TestBed.inject(SemanasService);
    expect(service).toBeTruthy();
  });
});
