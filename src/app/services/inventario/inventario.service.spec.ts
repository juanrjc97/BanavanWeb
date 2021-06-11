import { TestBed } from '@angular/core/testing';

import { InventarioService } from './inventario.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('InventarioService', () => {

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [InventarioService],
    });
  });

  it('should be created', () => {
    const service: InventarioService = TestBed.inject(InventarioService);
    expect(service).toBeTruthy();
  });

  it('should have getData function', () => {
    const service: InventarioService = TestBed.inject(InventarioService);
    expect(service.cargarInventario).toBeTruthy();
  });
});
