import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AuthentificationService } from '../service/authentification.service';
import { SpaceXService } from '../service/space-x.service';


@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit{

  // credentials = {
  //   Identifiant : "aibo",
  //   mdp : 12345
  // }

  form = new FormGroup({
    Identifiant : new FormControl(),
    mdp : new FormControl()
  })

  constructor(private spaceX: SpaceXService, private authentificationService: AuthentificationService ){}

  launche: any;

  ngOnInit(): void {
    this.spaceX.getLaunches().subscribe((res) =>  {
    this.launche = res;
    console.log(this.launche, "okay");
    })
  }

  onSubmit(){
    if(!this.form.valid){
      return;
    }
    console.log('Bien vu !');
    console.log(this.form.value);
    this.authentificationService.login(this.form.value.Identifiant, this.form.value.mdp)
  }
}
