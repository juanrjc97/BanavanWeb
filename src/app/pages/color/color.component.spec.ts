import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import {from, empty} from 'rxjs';

import { Color } from 'src/app/models/color';
import { ColorComponent } from './color.component';
import { ColorService } from 'src/app/services/color/color.service';

describe('ColorComponent', () => {
  let component: ColorComponent;
  let fixture: ComponentFixture<ColorComponent>;

  const formulario = new FormBuilder();
  const servicio = new ColorService(null as any);

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReactiveFormsModule, HttpClientTestingModule],
      declarations: [ColorComponent],
      providers: [ColorService],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ColorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  beforeEach(() => {
    component = new ColorComponent(new FormBuilder(), servicio);
  });

  it('should create Color Component', () => {
    expect(component).toBeTruthy();
  });

  it('should be invalid form', () => {
    fixture = TestBed.createComponent(ColorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    const name = component.validateForm.controls['nombre'];
    name.setValue("");

    expect(component.validateForm.invalid).toBeTruthy();
  });

  it('Init should load ribbons', () => {
    const listOfCinta: Color[] = [
      {
        id: 1,
        nombre: 'Amarillo',
        hex_code: '#FFFF00',
      },
      {
        id: 2,
        nombre: 'Azul',
        hex_code: '#0000FF',
      },
    ];

    spyOn(servicio, 'cargarCinta').and.callFake(() => {
      return from([listOfCinta]);
    });
    component.ngOnInit();
    
    expect(component.listOfCinta.length).toBeGreaterThan(0);
  });

  it('Update ribbon', () => {
    const ribbon: Color = 
      {
        id: 1,
        nombre: 'Amarillo Patito',
        hex_code: '#FFFF00',
      };

    const espia = spyOn(servicio, 'actualizarCinta').and.callFake(() => {
      return empty(); // regresa un observable
    });
    component.actualizarCinta(ribbon, 1, 1);
    expect(espia).toHaveBeenCalled();
  });

  it('Delete ribbon', () => {
    const ribbon: Color = {
      id: 1,
      nombre: 'Amarillo Patito',
      hex_code: '#FFFF00',
    };

    const espia = spyOn(servicio, 'eliminarCinta').and.callFake(() => {
      return empty(); // regresa un observable
    });
    component.deleteRow(ribbon, 1);
    expect(espia).toHaveBeenCalled();
  });

});