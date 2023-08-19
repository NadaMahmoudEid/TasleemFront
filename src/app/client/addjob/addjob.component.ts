import { Component, OnInit } from '@angular/core';
import { LocationService } from '../Services/location.service';
import { Location } from '../Interfaces/Location';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { JobService } from 'src/app/delivery/Services/job.service';
import { LoginService } from 'src/app/auth/Services/login.service';

@Component({
  selector: 'app-addjob',
  templateUrl: './addjob.component.html',
  styleUrls: ['./addjob.component.scss']
})
export class AddjobComponent implements OnInit {
  LocationLists: Location[] | undefined
  constructor(private _locationService: LocationService, private _JobService: JobService
    , private formBuilder: FormBuilder, public _route: Router, private _LoginS:LoginService) { }

    selectedCountry: string = '';
    cities: string[] = [];

    citiesByCountry: { [key: string]: string[] } = {
      oman: [
        'مسقط',
        'مسندم',
        ' البريمي',
        'شمال الباطنة',
        'جنوب الباطنة',
        'شمال الشرقية',
        'جنوب الشرقية',
        'الداخلية',
        'الظاهرة',
        'ظفار',
        'الوسطى',
      ],
      uae: [
        'أبوظبى',
        'دبى',
        'الشارقة',
        'عجمان',
        'رأس الخيمة',
        'الفجيرة',
        'أم القيوين',
      ],

    };


  AddJobForm = this.formBuilder.group({
    Title: ['', [Validators.required]],

    JobDescription: ['', [Validators.required]],
    CountryName: ['', [Validators.required]],
    CityName: ['', [Validators.required]],
    AddressDescription: ['', [Validators.required]],
    budget: ['', [Validators.required]],
    requiredPoint: ['', [Validators.required]],

  });
  get Title() {
    return this.AddJobForm.get('Title');
  }
  get CountryName() {
    return this.AddJobForm.get('CountryName');
  }
  get CityName()
  {
    return this.AddJobForm.get('CityName');

  }
  get requiredPoint() {
    return this.AddJobForm.get('requiredPoint');
  }
  get AddressDescription() {
    return this.AddJobForm.get('AddressDescription');
  }
  get JobDescription() {
    return this.AddJobForm.get('JobDescription');
  }
  get budget() {
    return this.AddJobForm.get('budget');
  }
  ngOnInit(): void {


  }

  submit(JobData: FormGroup) {
    console.log(JobData.value)



    const jobDataToSend = {
      Title: this.Title?.value,
      Details: this.JobDescription?.value,
      CountryName: this.CountryName?.value,
      CityName:this.CityName?.value,
      AddressDetails: this.AddressDescription?.value,
      budget: this.budget?.value,
      requiredPoints: this.requiredPoint?.value,
      ClientId :this._LoginS.getUserId()
    };
    console.log(jobDataToSend)




    this._JobService.AddJob(jobDataToSend).subscribe((resp) => {
      console.log(resp)
      if (resp.message == "Success") {
        this._route.navigate(['/client/Projcts'])
      }



    })

  }

  onCountryChange(event: Event) {
    const selectedValue = (event.target as HTMLSelectElement).value;
    this.selectedCountry=selectedValue;
    this.cities = this.citiesByCountry[this.selectedCountry] || [];
    console.log("Cities:", this.cities);
  }
}
