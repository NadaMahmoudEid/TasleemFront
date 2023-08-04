import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Location } from '../Interfaces/Location';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LocationService {
  url: string = "https://localhost:7132"
  constructor(private HttpClient:HttpClient) { }

  AllLocation(): Observable<Location[]> {
    return this.HttpClient.get<Location[]>(`${this.url}/api/Location/GetLocation`);
  }
  
}
