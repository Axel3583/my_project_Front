import { Component, OnInit } from '@angular/core';
import { SpaceXService } from '../service/space-x.service';


@Component({
  selector: 'app-capsuls-page',
  templateUrl: './capsuls-page.component.html',
  styleUrls: ['./capsuls-page.component.scss']
})
export class CapsulsPageComponent implements OnInit{

  capsules: any;

  constructor( private spaceX: SpaceXService){}

  ngOnInit(): void {
    this.spaceX.getCapsules().subscribe((res) => {
    this.capsules = res
    console.log(this.capsules, 'okkk');
    })
  }
}
