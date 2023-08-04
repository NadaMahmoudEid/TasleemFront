import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-job-details',
  templateUrl: './job-details.component.html',
  styleUrls: ['./job-details.component.scss']
})
export class JobDetailsComponent implements OnInit{
 
  JobId!:any
  constructor(private _ActivatedRoute: ActivatedRoute ) {
    
  }
  ngOnInit(): void {
    this._ActivatedRoute.paramMap.subscribe(params => {
      this.JobId=params.get('id');
    });
    console.log(this.JobId)
  }

}
