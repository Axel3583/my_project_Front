import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SpaceXService {

  constructor(private http : HttpClient) { }

  getLaunches(): Observable<any>{
    return this.http.get('https://api.spacexdata.com/v4/launches');
  }

  getCapsules(): Observable<any>{
    return this.http.get('https://api.spacexdata.com/v4/capsules');
  }
}
