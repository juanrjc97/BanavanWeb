import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ColorService } from './color.service';

describe('ColorService', () => {

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ColorService],
    });
  });

  it('should be created', () => {
    const service: ColorService = TestBed.inject(ColorService);
    expect(service).toBeTruthy();
  });

  it('should have getData function', () => {
    const service: ColorService = TestBed.inject(ColorService);
    expect(service.cargarCinta).toBeTruthy();
  });

});
