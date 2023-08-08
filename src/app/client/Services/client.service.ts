import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClientService {
  url: string = "https://localhost:7132"
  constructor(private _httpClient :HttpClient) {
    
   }



 
  GetClientProfileDataDTO(clientid:string):Observable<any>
  {
     return this._httpClient.get<any>(`${this.url}/api/Client/GetClientProfileData/ClientId?clientId=${clientid}`);
  }

  AddClientProfile(clientData:any):Observable<any>
  {
     return this._httpClient.put(`${this.url}/api/Client/AddClientProfile`,
     clientData);
  }
}
