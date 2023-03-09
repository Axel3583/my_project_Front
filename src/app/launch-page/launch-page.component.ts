import { Component, OnInit } from '@angular/core';
import { SpaceXService } from '../space-x.service';


@Component({
  selector: 'app-launch-page',
  templateUrl: './launch-page.component.html',
  styleUrls: ['./launch-page.component.scss']
})
export class LaunchPageComponent implements OnInit {

  launche: any;
  searchTerm: string = '';
  searchResults: any[] = [];

  constructor(private spaceX: SpaceXService) { }

  ngOnInit(): void {
    this.spaceX.getLaunches().subscribe((res) =>  {
    this.launche = res
    this.searchResults = res;
    console.log(this.launche, "okay");
    console.log(this.searchResults);
    })
  }

  search(term: string): void {
    this.searchTerm = term;
    this.searchResults = this.launche.filter((res: any) => res.name.toLowerCase().includes(this.searchTerm.toLowerCase()))
  }

  
}

