import { Component, OnInit } from '@angular/core';
import { DeliveryService } from '../Services/delivery.service';
import { Jobs } from '../Interfaces/Job';

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

  IsJobList: boolean=true;
  IsJobByCountry: boolean=false;
  IsJobByCountryCity:boolean=false;
  IsJobByRequiredPoints: boolean=false;

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
  }

  onCountryChange(event: Event) {
    const selectedValue = (event.target as HTMLSelectElement).value;
    this.selectedCountry=selectedValue;

     if(this.selectedCountry=="كل الدول")
     {
       this.IsJobList=true;
       this.IsJobByCountry=false;
       this.cities = this.citiesByCountry[this.selectedCountry] || [];
       console.log("manar",this.cities)

     }
     else
     {
      this.IsJobList=false;
      this.IsJobByCountry=true;
      this._deliveryService.FilterJobByCountry(this.selectedCountry).subscribe((data) =>
      {
        console.log(data);
          this.JobByCountry=data
      });
      this.cities = this.citiesByCountry[this.selectedCountry] || [];

     }

    this.cities = this.citiesByCountry[this.selectedCountry] || [];
    console.log("Cities:", this.cities);
  }
  onCityChange(event:Event)
  {
    const selectedValue = (event.target as HTMLSelectElement).value;
    this.selectedCity=selectedValue;

    this.IsJobByCountryCity=true;
    this.IsJobList=false;
    this.IsJobByCountry=false;
    this._deliveryService.FilterJobByCountryCity(this.selectedCountry, this.selectedCity).subscribe((result) =>
    {
         console.log(result);
         this.JobByCountryCity=result
    });
  }


  // onRequiredPointsChanged(event: any) {
  //     this.selectedRequiredPoints=Number(event.target.value);
  //     console.log('Selected Required Points:', this.selectedRequiredPoints);

  //   this._deliveryService.FilterJobByRequiredPoints(this.selectedRequiredPoints).subscribe((data) =>{
  //       console.log(data);
  //       this.JobByRequiredPoints=data;
  //   });
  //   //this.JobByRequiredPoints=this.JobLists?.filter(job => job.requiredPoints <= this.selectedRequiredPoints)


  //  // console.log('Filtered Jobs:', this.JobByRequiredPoints);
  //  this.IsJobByRequiredPoints=true;
  //  this.IsJobList=false;
  //  this.IsJobByCountry=false;
  //  this.IsJobByCountryCity=false;

  // }

}


