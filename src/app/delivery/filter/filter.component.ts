import { Component, OnInit } from '@angular/core';
import { DeliveryService } from '../Services/delivery.service';
import { Jobs } from '../Interfaces/Job';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})

  export class FilterComponent implements OnInit {
   
JobLists:Jobs[] | undefined

    constructor(private _deliveryService :DeliveryService) {
      
    }
    ngOnInit(): void {
this._deliveryService.AllJobs().subscribe((resp)=>{
  console.log(resp)
 this.JobLists=resp;
 
  console.log(this.JobLists)

})
   }
   
  }

