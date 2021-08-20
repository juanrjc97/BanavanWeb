import {HttpClientTestingModule} from '@angular/common/http/testing';
import {ComponentFixture, TestBed} from '@angular/core/testing';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { InventarioService } from 'src/app/services/inventario/inventario.service';

import {RacimoComponent} from './racimo.component';

describe('RacimoComponent', () => {
  let component: RacimoComponent;
  let fixture: ComponentFixture<RacimoComponent>;
  let servicio = new InventarioService(null as any);

 
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, ReactiveFormsModule],
      declarations: [RacimoComponent],
      providers: [InventarioService],
    }).compileComponents();
  });
  beforeEach(() => {
    component = new RacimoComponent(
      new FormBuilder(),
      new FormBuilder(),
      servicio
    );
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RacimoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
