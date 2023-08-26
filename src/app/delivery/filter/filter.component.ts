import { Component, OnInit } from '@angular/core';
import { DeliveryService } from '../Services/delivery.service';
import { Jobs } from '../Interfaces/Job';
import { JobService } from '../Services/job.service';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})

export class FilterComponent implements OnInit {

  JobLists: Jobs[] = [];
  JobByCountry: Jobs[] =[];
  JobByCountryCity: Jobs[]=[];
  JobByRequiredPoints: Jobs[]=[];
  JobByRequiredPointsCountry: Jobs[]=[];
  JobByRequiredPointsCountryCity: Jobs[]=[];

  IsJobList: boolean=true;
  IsJobByCountry: boolean=false;
  IsJobByCountryCity:boolean=false;
  IsJobByRequiredPoints: boolean=false;
  IsJobByRequiredPointsCountry: boolean=false;
  IsJobByRequiredPointsCountryCity: boolean=false;


  selectedCountry: string = '';
  selectedCity:string = '';
  selectedRequiredPoints:number=0;
  cities: string[] = [];

  citiesByCountry: { [key: string]: string[] } = {
    عمان: [
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
    الأمارات: [
      'أبوظبى',
      'دبى',
      'الشارقة',
      'عجمان',
      'رأس الخيمة',
      'الفجيرة',
      'أم القيوين',
      'العين',
    ],

  };

  constructor(private _deliveryService: DeliveryService)
   {

   }
   ngOnInit(): void {
    this._deliveryService.AllJobs().subscribe((resp) => {
      console.log("response manar",resp);
      this.JobLists = resp;

      console.log("jobList manar",this.JobLists);
    });

    this.selectedRequiredPoints = 0;

  }

  onCountryChange(event: Event) {
    const selectedValue = (event.target as HTMLSelectElement).value;
    this.selectedCountry=selectedValue;

     if(this.selectedCountry!="كل الدول" && (this.selectedRequiredPoints==null ||this.selectedRequiredPoints==0))
     {
      this.IsJobByCountry=true;
      this.IsJobByRequiredPointsCountry=false;
      this.IsJobList=false;
      this.IsJobByRequiredPoints=false;
      this.IsJobByCountryCity=false;
      this.IsJobByRequiredPointsCountryCity=false;

        this._deliveryService.FilterJobByCountry(this.selectedCountry).subscribe((data) =>
      {
        console.log(data);
          this.JobByCountry=data
      });
      this.cities = this.citiesByCountry[this.selectedCountry] || [];
     }
     else if(this.selectedCountry!="كل الدول" && (this.selectedRequiredPoints!=null ||this.selectedRequiredPoints!=0))
     {
      this.IsJobByRequiredPointsCountry=true;
      this.IsJobByCountry=false;
      this.IsJobList=false;
      this.IsJobByRequiredPoints=false;
      this.IsJobByCountryCity=false;
      this.IsJobByRequiredPointsCountryCity=false;

      this.JobByRequiredPointsCountry=this.JobLists?.filter(job => job.requiredPoints <= this.selectedRequiredPoints && job.countryName==this.selectedCountry)

      this.cities = this.citiesByCountry[this.selectedCountry] || [];
     }

     else if(this.selectedCountry=="كل الدول" && (this.selectedRequiredPoints>0))
     {
    this.IsJobByRequiredPoints=true;
    this.IsJobList=false;
    this.IsJobByCountry=false;
    this.IsJobByCountryCity=false;
    this.IsJobByRequiredPointsCountryCity=false;
    this.IsJobByRequiredPointsCountry=false;

     this.JobByRequiredPoints=this.JobLists?.filter(job => job.requiredPoints <= this.selectedRequiredPoints)


     }
     else if(this.selectedCountry=="كل الدول")
     {
       this.IsJobList=true;
       this.IsJobByCountry=false;
       this.IsJobByRequiredPoints=false;
       this.IsJobByCountryCity=false;
       this.IsJobByRequiredPointsCountry=false;
       this.IsJobByRequiredPointsCountryCity=false;


     }


    this.cities = this.citiesByCountry[this.selectedCountry] || [];
    console.log("Cities:", this.cities);
  }
  onCityChange(event:Event)
  {
    const selectedValue = (event.target as HTMLSelectElement).value;
    this.selectedCity=selectedValue;
   if(this.selectedCity!='كل المدن' && this.selectedCountry !="كل الدول" && (this.selectedRequiredPoints!=null ||this.selectedRequiredPoints!=0))
   {
    this.IsJobByRequiredPointsCountryCity=true;
    this.IsJobByCountryCity=false;
    this.IsJobList=false;
    this.IsJobByCountry=false;
    this.IsJobByRequiredPointsCountry=false;
    this.IsJobByRequiredPoints=false;

    this.JobByRequiredPointsCountryCity=this.JobLists?.filter(job => job.requiredPoints <= this.selectedRequiredPoints && job.countryName==this.selectedCountry && job.cityName==this.selectedCity)

   }
   if(this.selectedCity=='كل المدن' && this.selectedCountry !="كل الدول" && (this.selectedRequiredPoints!=null ||this.selectedRequiredPoints!=0))
   {
    this.IsJobByRequiredPointsCountry=true;
    this.IsJobByRequiredPointsCountryCity=false;
    this.IsJobByCountryCity=false;
    this.IsJobList=false;
    this.IsJobByCountry=false;
    this.IsJobByRequiredPoints=false;

    this.JobByRequiredPointsCountry=this.JobLists?.filter(job => job.requiredPoints <= this.selectedRequiredPoints && job.countryName==this.selectedCountry)

   }
    this.IsJobByCountryCity=true;
    this.IsJobList=false;
    this.IsJobByCountry=false;
    this.IsJobByRequiredPointsCountry=false;
    this.IsJobByRequiredPoints=false;
    this.IsJobByRequiredPointsCountryCity=false;
    this._deliveryService.FilterJobByCountryCity(this.selectedCountry, this.selectedCity).subscribe((result) =>
    {
         console.log(result);
         this.JobByCountryCity=result
    });
  }


  onRequiredPointsChanged(newValue: number) {
    this.selectedRequiredPoints = newValue;
    console.log('Selected Required Points:', this.selectedRequiredPoints);
    if((this.selectedRequiredPoints!=null||this.selectedRequiredPoints!=0) && this.selectedCountry!='كل الدول'&& this.selectedCity!='كل المدن'){
      this.IsJobByRequiredPointsCountryCity=true;
      this.IsJobByRequiredPoints=false;
      this.IsJobList=false;
      this.IsJobByCountry=false;
      this.IsJobByCountryCity=false;
      this.IsJobByRequiredPointsCountry=false;

       this.JobByRequiredPointsCountryCity=this.JobLists?.filter(job => job.requiredPoints <= this.selectedRequiredPoints&& job.countryName==this.selectedCountry && job.cityName==this.selectedCity)
    }
    this.IsJobByRequiredPoints=true;
    this.IsJobList=false;
    this.IsJobByCountry=false;
    this.IsJobByCountryCity=false;
    this.IsJobByRequiredPointsCountryCity=false;
    this.IsJobByRequiredPointsCountry=false;

     this.JobByRequiredPoints=this.JobLists?.filter(job => job.requiredPoints <= this.selectedRequiredPoints)


  }

}


