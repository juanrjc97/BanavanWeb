import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { Observable } from 'rxjs';
import { from } from 'rxjs';
import { Inventario } from 'src/app/models/inventario';
import { InventarioService } from 'src/app/services/inventario/inventario.service';

import { InventarioComponent } from './inventario.component';


describe('InventarioComponent', () => {

  
  const formulario = new FormBuilder();
  let component: InventarioComponent;
  let fixture: ComponentFixture<InventarioComponent>;
  const servicio = new InventarioService(null as any);

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReactiveFormsModule, HttpClientTestingModule],
      declarations: [InventarioComponent],
      providers:[InventarioService]
    }).compileComponents();
   
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InventarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });


  beforeEach(() => {
    component = new InventarioComponent(formulario, servicio);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('The form should be created with maximo y minimo', ()=>{
    expect(component.semanafb.contains('minimo')).toBeTruthy();
    expect(component.semanafb.contains('maximo')).toBeTruthy();
});

it('Maximo is required', ()=>{
  const control = component.semanafb.get('maximo');
  control?.setValue('');
  expect(control?.valid).toBeFalsy();        
});

it('Minimo is required', ()=>{
  const control = component.semanafb.get('minimo');
  control?.setValue('');
  expect(control?.valid).toBeFalsy();        
});

  it('the filter always have to return not null', () => {
    const resp = component.buscarSemana();
    expect(resp).not.toBeNull();
  });

  it('the filter always have to return an array', () => {
    const resp = component.buscarSemana();
    expect(typeof resp ).toBe('object');
  });

  it('Init shoud load inventario', () => {
    
    const inventarioSem : Inventario[] = [
      {
        Semana: 1,
        Enfundado: 2,
        Cosechado:10,
        CPerdida: 2,
        fecha: '2/3/2019'
      }   
    ]
    spyOn(servicio,'cargarInventario').and.callFake( () => {
        return from([inventarioSem]);
    } );
    component.ngOnInit();
    
    expect(component.listOfData.length).toBeGreaterThan(0);
  });

});
