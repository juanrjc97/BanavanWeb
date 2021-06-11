import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RolService } from './rol.service';

describe('RolService', () => {

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [RolService],
    });
  });

  it('should be created', () => {
    const service: RolService = TestBed.inject(RolService);
    expect(service).toBeTruthy();
  });

  it('should have getData function', () => {
    const service: RolService = TestBed.inject(RolService);
    expect(service.cargarRol).toBeTruthy();
  });

});
