import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PersonalService } from '../../services/personal/personal.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  //validateForm!: FormGroup;
  public validateForm = this.fb.group({
    userName: [null, [Validators.required, Validators.minLength(3)]],
    password: [null, [Validators.required, Validators.minLength(3)]]
  });

  

  constructor(private fb: FormBuilder, private router: Router,private personalService: PersonalService) {}

  ngOnInit(): void {
    
  }

  submitForm(): void {
    if (!this.validateForm.valid) {
      for (const i in this.validateForm.controls) {
        this.validateForm.controls[i].markAsDirty();
        this.validateForm.controls[i].updateValueAndValidity();
      }
      
    }else{
        
        this.personalService.login(this.validateForm.value)
                            .subscribe( (resp) =>{
                              this.router.navigateByUrl('/');
                            },(err)=>{
                              Swal.fire('Error', 'error al iniciar sesión', 'error');
                            })
    }

  }

}