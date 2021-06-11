import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { PersonalService } from './personal.service';

describe('PersonalService', () => {

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [PersonalService],
    });
  });

  it('should be created', () => {
    const service: PersonalService = TestBed.inject(PersonalService);
    expect(service).toBeTruthy();
  });

  it('should have getData function', () => {
    const service: PersonalService = TestBed.inject(PersonalService);
    expect(service.cargarPersonal).toBeTruthy();
  });
});
