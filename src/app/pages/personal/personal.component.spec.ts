import {HttpClientTestingModule} from '@angular/common/http/testing';
import {ComponentFixture, TestBed} from '@angular/core/testing';
import {Personal} from 'src/app/models/personal';
import {PersonalService} from 'src/app/services/personal/personal.service';
import {RolService} from 'src/app/services/rol/rol.service';
import {from, empty} from 'rxjs';
import {PersonalComponent} from './personal.component';
import {Rol} from 'src/app/models/rol';
import {FormBuilder, ReactiveFormsModule} from '@angular/forms';

describe('PersonalComponent', () => {
  let component: PersonalComponent;
  let fixture: ComponentFixture<PersonalComponent>;
  const serviciopersonal = new PersonalService(null as any);
  const serviciorol = new RolService();
  //const personalForm: FormBuilder = new FormBuilder();

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, ReactiveFormsModule],
      declarations: [PersonalComponent],
      providers: [PersonalService, RolService],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  beforeEach(() => {
    component = new PersonalComponent(new FormBuilder(), serviciopersonal,
        serviciorol );
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


  it('Init shoud load personal and roles', () => {
    const listOfPersonal : Personal[] = [
      {
        id: 1,
        nombres: 'juan',
        apellidos: 'jimenez',
        cedula: '12323434',
        email: 'jj@gmail.com',
        rol: 'admin',
        activo: '1',
        username: 'juanj',
      },
    ];

    const listOfRol: Rol[] = [
      {
        id: 1,
        nombre: 'admin',
      },
    ];

    spyOn(serviciopersonal, 'cargarPersonal').and.callFake( () => {
      return from([listOfPersonal]);
    } );

    spyOn(serviciorol, 'cargarRol').and.callFake( () => {
      return listOfRol;
    } );
    component.ngOnInit();

    expect(component.listOfPersonal.length).toBeGreaterThan(0);
    expect(component.listOfRol.length).toBeGreaterThan(0);
  });

  it('Debe de llamar al servidor para actualizar un trabajador', () => {
    const persona : Personal =
      {
        id: 1,
        nombres: 'juan',
        apellidos: 'jimenez',
        cedula: '12323434',
        email: 'jj@gmail.com',
        rol: 'admin',
        activo: '1',
        username: 'juanj',
      };

    const espia = spyOn(serviciopersonal,
        'actualizarPersonal').and.callFake( () =>{
      return empty(); // regresa un observable
    });
    component.actualizarPersonal(persona, 1, 1);
    expect( espia).toHaveBeenCalled();
  });

  it('Debe cambiar estado de  isVisible ', ()=>{
    component.showModal();
    expect(component.isVisible).toBeTruthy();
  });
});
