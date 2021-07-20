import { TestBed } from '@angular/core/testing';

import { RepEnfundadoSemanaService } from './rep-enfundado-semana.service';

describe('RepEnfundadoSemanaService', () => {
  let service: RepEnfundadoSemanaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RepEnfundadoSemanaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
