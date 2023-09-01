import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Jobs } from '../Interfaces/Job';
import { JobService } from '../Services/job.service';
import { ProposalService } from '../Services/proposal.service';
import { AddProposalDto } from '../Interfaces/AddProposalDto';
import { LoginService } from 'src/app/auth/Services/login.service';

@Component({
  selector: 'app-job-details',
  templateUrl: './job-details.component.html',
  styleUrls: ['./job-details.component.scss'],
})
export class JobDetailsComponent implements OnInit {
  IsButtonClicked: boolean = false;
  proposalmsg: string | undefined;
  AddProposalDto: AddProposalDto = {
    proposalDate: new Date(),
    deliveryId: '',
    jobID: 0,
  };
  JobId!: any;
  JobObj: Jobs = {
    id: 0,
    requiredPoints: 0,
    budget: 0,
    details: '',
    title: '',
    countryName: '',
    cityName: '',
    addressDetails: '',
    isVerified:0,
    client: {
      id: '',
      fullName: '',
      address: '',
      phoneNum: '',
      profileImg: undefined,
      overView: '',
      languges: [],
    },
    numOfProposal: 0,
  };
  constructor(
    private _ActivatedRoute: ActivatedRoute,
    private _jobService: JobService,
    private _proposalService: ProposalService,
    private _loginService: LoginService
  ) {}
  ngOnInit(): void {
    this._ActivatedRoute.paramMap.subscribe((params) => {
      this.JobId = params.get('id');
    });
    console.log(this.JobId);
    const data = {
      jobId: this.JobId,
      deliveryId: this._loginService.getUserId(),
    };
    this._proposalService
      .checkDeliveryAvilableinJobPostDTO(data)
      .subscribe((resp) => {
        if (resp.message == 'Success') {
          if (resp.data == true) {
            this.IsButtonClicked = true;
          } else {
            this.IsButtonClicked = false;
          }
        }
      });
    this._jobService.GetJobByID(this.JobId).subscribe((resp) => {
      this.JobObj = resp;
    });
  }

  AddProposal(jobId: number) {
    this.AddProposalDto = {
      proposalDate: new Date(),
      deliveryId: this._loginService.getUserId(),
      jobID: jobId,
    };
    this._proposalService.AddProposal(this.AddProposalDto).subscribe((resp) => {
      if (resp.message == 'Success') {
        this.IsButtonClicked = true;
        this.JobObj={
          id: 0,
          requiredPoints: 0,
          budget: 0,
          details: '',
          title: '',
          countryName: '',
          cityName: '',
          addressDetails: '',
          isVerified:0,
          client: {
            id: '',
            fullName: '',
            address: '',
            phoneNum: '',
            profileImg: undefined,
            overView: '',
            languges: [],
          },
          numOfProposal: 0,
        };
        this._jobService.GetJobByID(this.JobId).subscribe((resp) => {
          this.JobObj = resp;
        });
        this.proposalmsg = 'تم التقديم بنجاح';
      } else {
        this.proposalmsg =
          'عدد التقديمات أكبر من 10 أو عدد النقاط المطلوبة للتوصيل أكبر من عدد النقاط المتبقية لك';
      }
    });
  }
}
