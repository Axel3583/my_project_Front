import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthentificationService } from '../service/authentification.service';


@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.scss']
})
export class RegisterPageComponent {

  form = new FormGroup({
    type: new FormControl('local'),
    Identifiant: new FormControl(),
    Password: new FormControl(),
    rememberMe: new FormControl()
  })

  constructor(private authentificationService: AuthentificationService ){}

  onSubmit(){
    if(!this.form.valid){
      return;
    }
    console.log('Bien vu !');
    this.authentificationService.register(this.form.value.Identifiant, this.form.value.Password)
  }

}
