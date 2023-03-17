import { Component, OnInit } from '@angular/core';
import { SpaceXService } from '../service/space-x.service';


@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  launches: any

  constructor(public spaceX: SpaceXService){}

  ngOnInit(): void {
    this.spaceX.getLaunches().subscribe((res: any) => this.launches = res)
  }
}
