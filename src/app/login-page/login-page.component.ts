import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { SpaceXService } from '../space-x.service';


@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit{

  credentials = {
    Identifiant : "aibo",
    mdp : 12345
  }

  form = new FormGroup({
    Identifiant : new FormControl(),
    mdp : new FormControl()
  })

  constructor(private router : Router, private spaceX: SpaceXService){}

  launche: any;

  ngOnInit(): void {
    this.spaceX.getLaunches().subscribe((res) =>  {
    this.launche = res;
    console.log(this.launche, "okay");
    })
  }

  onSubmit(){
    console.log('Bien vu !');
    console.log(this.form.value);
    if(!((this.form.value.Identifiant === this.credentials.Identifiant) && (this.form.value.mdp === this.credentials.mdp))){
      alert("Les informations de connexion sont incorrects !")
    }else{
      this.router.navigate(["/home"])
    }
    //this.form.reset()
  }
}
