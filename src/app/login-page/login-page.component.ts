import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthentificationService } from '../service/authentification.service';
import { SpaceXService } from '../service/space-x.service';


@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

  // credentials = {
  //   Identifiant : "aibo",
  //   mdp : 12345
  // }

  form = new FormGroup({
    type: new FormControl('local'),
    Identifiant: new FormControl(),
    Password: new FormControl(),
    rememberMe: new FormControl()
  })

  constructor(private spaceX: SpaceXService, private authentificationService: AuthentificationService) { }

  launche: any;

  ngOnInit(): void {
    this.spaceX.getLaunches().subscribe((res) => {
      this.launche = res;
    })
  }

  onSubmit() {
    if (!this.form.valid) {
      return;
    }
    console.log('Bien vu !');
    this.authentificationService.login(this.form.value.Identifiant, this.form.value.Password)
  }

  // get Identifiant() {
  //   return this.form.get('Identifiant');
  // }

  // get Password() {
  //   return this.form.get('Password');
  // }
}
