import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Jobs } from 'src/app/delivery/Interfaces/Job';
import { JobService } from 'src/app/delivery/Services/job.service';

@Component({
  selector: 'app-porposal-details',
  templateUrl: './porposal-details.component.html',
  styleUrls: ['./porposal-details.component.scss'],
})
export class PorposalDetailsComponent {
  data: Jobs = {
    id: 0,
    requiredPoints: 0,
    numOfProposal: 0,
    budget: 0,
    details: '',
    title: '',
    countryName: '',
    cityName: '',
    addressDetails: '',
    isVerified: 0,
    client: {
      id: '',
      fullName: '',
      address: '',
      phoneNum: '',
      profileImg: undefined,
      overView: '',
      languges: [],
    },
  };

  constructor(
    private JobService: JobService,
    private _ActivatedRoute: ActivatedRoute
  ) {}
  ngOnInit(): void {
    this._ActivatedRoute.paramMap.subscribe((params) => {
      this.JobService.GetJobByID(params.get('id')).subscribe((Response) => {
        this.data = Response;
        console.log('JobID', Response);
      });
    });
  }
}
