import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AuthentificationService } from '../service/authentification.service';


@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.scss']
})
export class RegisterPageComponent {

  form = new FormGroup({
    Identifiant : new FormControl(),
    mdp : new FormControl()
  })

  constructor(private authentificationService: AuthentificationService ){}

  onSubmit(){
    if(!this.form.valid){
      return;
    }
    console.log('Bien vu !');
    console.log(this.form.value);
    this.authentificationService.register(this.form.value.Identifiant, this.form.value.mdp)
  }

}
