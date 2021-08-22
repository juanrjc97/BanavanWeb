/* eslint-disable require-jsdoc */
/* eslint-disable guard-for-in */
import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {PersonalService} from '../../services/personal/personal.service';
import Swal from 'sweetalert2';
import {AuthService} from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  // validateForm!: FormGroup;
  public validateForm = this.fb.group({
    email: [null, [Validators.required, Validators.email,
      Validators.minLength(3)]],
    password: [null, [Validators.required, Validators.minLength(3)]],
  });


  constructor(private fb: FormBuilder, private router: Router,
    private auth: AuthService) {}

  ngOnInit(): void {
  }

  submitForm(): void {
    if (!this.validateForm.valid) {
      for (const i in this.validateForm.controls) {
        this.validateForm.controls[i].markAsDirty();
        this.validateForm.controls[i].updateValueAndValidity();
      }
    } else {
      const data = {
        email: this.validateForm.get('email')?.value,
        password: this.validateForm.get('password')?.value,
      };
      this.auth.login(data)
          .subscribe( (resp) =>{
            //console.log(resp);
            if (resp.rol ==='Gerente') {
              this.router.navigateByUrl('/');
            } else if (resp.rol === 'Administrador') {
              this.router.navigateByUrl('dashboard/inventarioRacimos');
            }
          }, (err)=>{
            Swal.fire('Error', 'Error al iniciar sesión', 'error');
          });
    }
  }
}
