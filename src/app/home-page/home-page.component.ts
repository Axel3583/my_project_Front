import { Component, OnInit } from '@angular/core';
import { AuthentificationService } from '../service/authentification.service';
import { SpaceXService } from '../service/space-x.service';


@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  launches: any;

  constructor(public spaceX: SpaceXService, private authentificationService: AuthentificationService){}

  ngOnInit(): void {
    this.spaceX.getLaunches().subscribe((res: any) => this.launches = res)
  }

  logOut(){
  this.authentificationService.logout()
  }
}
