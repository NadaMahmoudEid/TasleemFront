import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  url: string = "https://localhost:7132"

  constructor(private _HttpClient: HttpClient) { }

  
 ClientRegitser(formData: object): Observable<any> {
    return this._HttpClient
      .post(`${this.url}/api/Account/ClientRegister`, formData)
  }
  
DeliveryRegitser(formData: object): Observable<any> {
    return this._HttpClient
      .post(`${this.url}/api/Account/DeliveryRegister`, formData)
  }
}
