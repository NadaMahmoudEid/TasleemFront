import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  url: string = "https://localhost:7132"
  constructor(private _Httpclient:HttpClient) {}
  GetWaiting():Observable<any>{
    return this._Httpclient.get(`${this.url}/api/Jobs/GetAllJobsWaiting`)
  }
  confirmjob(ClientID:string,JobID:number):Observable<any>{
    return this._Httpclient.put(`${this.url}/api/Jobs/ConfirmJob/${ClientID}/${JobID}`,{})
  }
  rejectjob(ClientID:string,JobID:number):Observable<any>{
    return this._Httpclient.put(`${this.url}/api/Jobs/RejectJob/${ClientID}/${JobID}`,{})
  }
}
