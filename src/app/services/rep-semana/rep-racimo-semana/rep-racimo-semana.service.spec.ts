import { TestBed } from '@angular/core/testing';

import { RepRacimoSemanaService } from './rep-racimo-semana.service';

describe('RepRacimoSemanaService', () => {
  let service: RepRacimoSemanaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RepRacimoSemanaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
