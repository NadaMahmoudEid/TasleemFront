import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { JobService } from 'src/app/delivery/Services/job.service';

@Component({
  selector: 'app-porposal-details',
  templateUrl: './porposal-details.component.html',
  styleUrls: ['./porposal-details.component.scss']
})
export class PorposalDetailsComponent {
  data:any

  constructor(private JobService:JobService,  private _ActivatedRoute: ActivatedRoute) {}
    ngOnInit(): void {
  
     this._ActivatedRoute.paramMap.subscribe(params => {
     
        this.JobService.GetJobByID(params.get('id')).subscribe(Response => {
       this.data=Response
          console.log("SingleCusMeallll", Response)
        });
      });
  
     }
}
