import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Jobs } from '../Interfaces/Job';

@Injectable({
  providedIn: 'root'
})
export class DeliveryService {
  url: string = "https://localhost:7132"
  constructor(private _httpClient :HttpClient) {

   }



   AllJobs(): Observable<Jobs[]> {
    return this._httpClient.get<Jobs[]>(`${this.url}/api/Jobs/GetAllJobsConfirmed`);
  }
  GetDeliveryProfileDataDTO(deliveryId:string):Observable<any>
  {
     return this._httpClient.get<any>(`${this.url}/api/Deivery/GetDeliveryProfileData/${deliveryId}`);
  }

  AddDeliveryProfile(DeliveryProfileDTO:any):Observable<any>
  {
     return this._httpClient.put(`${this.url}/api/Deivery/AddDeliveryProfile`,
     DeliveryProfileDTO);
  }
  FilterJobByCountry(country: string): Observable<any>
  {
    return this._httpClient.get(`${this.url}/api/Jobs/GetJobsByCountryName/${country}`);
  }
  FilterJobByCountryCity(country: string,city:string): Observable<any>
  {
      return this._httpClient.get(`${this.url}/api/Jobs/GetJobsByCountryName/${country}/${city}`);
  }
AddComplaintsِnAndSuggestions(data:any): Observable<any>
{

  const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  return this._httpClient.post(`${this.url}/api/ComplaintsAndSuggestions/AddComplaintsAndSuggestions`, data);

  // return this._httpClient.post(`${this.url}/api/ComplaintsAndSuggestions/AddComplaintsAndSuggestions`,data);

}

}
