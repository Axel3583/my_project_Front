import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
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

  constructor(private spaceX: SpaceXService, private authentificationService: AuthentificationService, private router: Router) { }

  launche: any;
  loggedIn = false;
  loginError = false;

  ngOnInit(): void {
    this.spaceX.getLaunches().subscribe((res) => {
      this.launche = res;
    })
  }

  onSubmit() {
    if (!this.form.valid) {
      return;
    }
      this.authentificationService.login(this.form.value.Identifiant, this.form.value.Password).then(() => {
        this.loggedIn = true;
        localStorage.setItem('token', 'true')
        this.router.navigate(["/home"])
      }, err => {
        this.loginError = true;
        console.log(err);
        this.router.navigate(["/"])
      });
  }
}
