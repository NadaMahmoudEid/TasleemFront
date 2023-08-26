import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AddProposalDto } from '../Interfaces/AddProposalDto';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProposalService {

  url: string = "https://localhost:7132"
  constructor(private _httpClient :HttpClient) {

   }

   AddProposal(proposalDto:AddProposalDto):Observable<any>
   {
    return this._httpClient.post(`${this.url}/api/Proposal/AddProposal`,proposalDto)
   }


}
