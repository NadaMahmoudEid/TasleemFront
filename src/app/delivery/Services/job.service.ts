import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JobService {

  url: string = "https://localhost:7132"
  constructor(private _httpClient :HttpClient) {
    
   }


   GetJobByID(jobId:number): Observable<any> {
    return this._httpClient.get(`${this.url}/api/Jobs/GetJobById/${jobId}`);
  }
  
   AddJob(JobData:any): Observable<any> {
    return this._httpClient.post(`${this.url}/api/Jobs/AddJob`,JobData);
  }
}
