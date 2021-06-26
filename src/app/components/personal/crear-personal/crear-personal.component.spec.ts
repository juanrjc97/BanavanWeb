import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CrearPersonalComponent } from './crear-personal.component';
import { PersonalService } from 'src/app/services/personal/personal.service';
import { RolService } from 'src/app/services/rol/rol.service';
import { Rol } from 'src/app/models/rol';
import { empty, from } from 'rxjs';
import { Personal } from 'src/app/models/personal';

describe('CrearPersonalComponent', () => {

  const formulario = new FormBuilder() ;
  let component: CrearPersonalComponent;
  let fixture: ComponentFixture<CrearPersonalComponent>;
  const serviciopersonal = new PersonalService(null as any);
  const serviciorol = new RolService(null as any);

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReactiveFormsModule, FormsModule,
        HttpClientTestingModule],
      declarations: [CrearPersonalComponent],
      providers: [PersonalService,RolService]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearPersonalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    component.ngOnInit();
    //component = new CrearPersonalComponent(formulario,serviciopersonal, serviciorol);
  });


  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Init shoud load  roles', () => {
    component = new CrearPersonalComponent(formulario,serviciopersonal, serviciorol);
    const listOfRol: Rol[] = [
      {
        id: 1,
        nombre: 'admin'
      }
    ] 
    spyOn(serviciorol,'cargarRol').and.callFake( () => {
      return from([listOfRol]);
  } );
    component.ngOnInit();
    expect(component.listOfRol.length).toBeGreaterThan(0);
  });

 it('form invalid when empty', ()=>{
 
  expect(component.validateForm!.valid).toBeFalsy();
 } )

 it('form invalid when empty', ()=>{
 let nombre = component.validateForm.controls['nombre'];
  expect(nombre.valid).toBeFalsy();
 } )

 it('calling CrearPersonal', () => {

  expect(component.validateForm.valid).toBeFalsy();
  component.validateForm.controls['nombre'].setValue("juan");
  component.validateForm.controls['apellido'].setValue("jimenez");
  component.validateForm.controls['rol'].setValue("admin");
  component.validateForm.controls['cedula'].setValue("12345679");
  component.validateForm.controls['correo'].setValue("test@test.com");
  component.validateForm.controls['password'].setValue("123456789");
  component.validateForm.controls['checkPassword'].setValue("123456789");
  component.validateForm.controls['nickname'].setValue("juanjd");

  expect(component.validateForm.valid).toBeTruthy();

  const espia = spyOn(serviciopersonal,'crearPersonal').and.callFake( () =>{
            return empty(); // regresa un observable 
        });
  component.crearPersonal();
  expect( espia).not.toHaveBeenCalled();

});



});
