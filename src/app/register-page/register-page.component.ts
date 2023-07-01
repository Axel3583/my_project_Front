import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthentificationService } from '../service/authentification.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.scss'],
})
export class RegisterPageComponent {
  form = new FormGroup({
    type: new FormControl('local'),
    Identifiant: new FormControl(),
    Password: new FormControl(),
    rememberMe: new FormControl(),
  });

  constructor(
    private authentificationService: AuthentificationService,
    private router: Router
  ) {}

  onSubmit() {
    if (!this.form.valid) {
      return;
    }
  
    const identifiant = this.form.value.Identifiant;
    const password = this.form.value.Password;
  
    this.authentificationService.register(identifiant, password).subscribe((res: any) => {
      console.log(res)
      this.router.navigate(['/'])
    }, (err) => {
      if(err.error && err.error.message === "Email already exists"){
        console.log('Email already exists')
      }else{
        console.log(err)
      }
    });
  }
}
