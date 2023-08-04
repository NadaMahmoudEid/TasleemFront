import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, Validators } from '@angular/forms';
import { EducationLevelDTO } from '../Interfaces/export interface DeliveryProfileDTO ';
import { DeliveryProfileDTO } from '../Interfaces/DeliveryProfileDTO';
import { LoginService } from 'src/app/auth/Services/login.service';
import { DeliveryService } from '../Services/delivery.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-data-profile',
  templateUrl: './data-profile.component.html',
  styleUrls: ['./data-profile.component.scss']
})
export class DataProfileComponent implements OnInit{
  selectedFile!: File;
  showError :boolean=false
  changedInputs: string[] = [];
EducationLevel :EducationLevelDTO={
  Name:"",
  DateFrom : new Date(),
  DateTo :new Date (),
  DeliveryID :""
}
DeliveryProfileDTO:DeliveryProfileDTO={
  Id: '',
  FullName: '',
  Address: '',
  ProfileImg: undefined,
  OverView: '',
  YearExperinces: 0,
  EducationLevelDTO: {
    Name:"",
  DateFrom : new Date(),
  DateTo :new Date (),
  DeliveryID :""
  },
  Skills: [],
  Languges: [],
  properties: []
}



  constructor(private formBuilder: FormBuilder , private _loginService : LoginService ,
     private _deliveryService : DeliveryService , private _router :Router) {
  }
  ngOnInit(): void {
  }

   DataProfileForm = this.formBuilder.group({
    name: ['', [Validators.required]],
    description: ['', [Validators.required]],
    YearExperinces: ['', [Validators.required] ],
    address: ['', [Validators.required]],
    titleEdu: ['', [Validators.required]],
    titleEdufrom: ['', [Validators.required]],
    titleEduto: [''],
    ProfileImage: [''],
    skill:new FormArray([]),
    languge:new FormArray([]),


  });

  get name() {
    return this.DataProfileForm.get('name');
  }

  get description() {
    return this.DataProfileForm.get('description');
  }
  get YearExperinces() {
    return this.DataProfileForm.get('YearExperinces');
  }
  get address() {
    return this.DataProfileForm.get('address');
  }
  get titleEdu() {
    return this.DataProfileForm.get('titleEdu');
  }
  get titleEdufrom() {
    return this.DataProfileForm.get('titleEdufrom');
  }
  get titleEduto() {
    return this.DataProfileForm.get('titleEduto');
  }
  get profileImage() {
    return this.DataProfileForm.get('ProfileImage');
  }
  get skill(){
    return (<FormArray>this.DataProfileForm.get("skill")).controls;
  }
  addall(){
    const control=new FormControl(null,[Validators.required]);

    (<FormArray>this.DataProfileForm.get('skill')).push(control);

  }

  get languge(){
    return (<FormArray>this.DataProfileForm.get("languge")).controls;
  }
  addlan(){
    const control=new FormControl(null,[Validators.required]);

    (<FormArray>this.DataProfileForm.get('languge')).push(control);

  }

  changeImg(event:any){
    this.DeliveryProfileDTO.ProfileImg = event.target.files[0]
  }

  onInputChange(fieldName: string, value: any) {

    if (!this.changedInputs.includes(fieldName)) {
      this.changedInputs.push(fieldName);
      console.log(this.changedInputs)


    }



  }

  submitData(DataProfileForm: any) {
    if (this.DataProfileForm.valid) {

      const skillFormArray = this.DataProfileForm.get('skill') as FormArray;
      const LangugeFormArray = this.DataProfileForm.get('languge') as FormArray;
      console.log(skillFormArray.length);
      console.log(LangugeFormArray.length);
      if(skillFormArray.length >=1 && LangugeFormArray.length >=1){
        console.log("enterCondtion")

      this.changedInputs.push("Skills");
      this.changedInputs.push("Languages");

        console.log(DataProfileForm.value);
        this.EducationLevel.Name= this.DataProfileForm.get('titleEdu')?.value!;
        this.EducationLevel.DateFrom= new Date (this.DataProfileForm.get('titleEdufrom')?.value!);
        this.EducationLevel.DateTo= new Date (this.DataProfileForm.get('titleEduto')?.value!);

        this.EducationLevel.DeliveryID= this._loginService.getUserId();

        console.log(this.EducationLevel);

            this.DeliveryProfileDTO.Id=this._loginService.getUserId();
            this.DeliveryProfileDTO.Address = this.DataProfileForm.get('address')?.value!;
            this.DeliveryProfileDTO.OverView = this.DataProfileForm.get('description')?.value!;
            this.DeliveryProfileDTO.FullName = this.DataProfileForm.get('name')?.value!;
            this.DeliveryProfileDTO.YearExperinces = Number(this.DataProfileForm.get('YearExperinces')?.value);
            this.DeliveryProfileDTO.YearExperinces = Number(this.DataProfileForm.get('YearExperinces')?.value);
            this.DeliveryProfileDTO.EducationLevelDTO = this.EducationLevel
            this.DeliveryProfileDTO.properties = this.changedInputs;

            for (const control of skillFormArray.controls) {
              this.DeliveryProfileDTO.Skills.push(control.value);}

            for (const control of LangugeFormArray.controls) {
              this.DeliveryProfileDTO.Languges.push(control.value);}


              const formData = new FormData();
              formData.append('Id',this.DeliveryProfileDTO.Id);
              formData.append('FullName',this.DeliveryProfileDTO.FullName) ;
              formData.append('Address', this.DeliveryProfileDTO.Address);

              formData.append('ProfileImg', this.DeliveryProfileDTO.ProfileImg);
              formData.append('OverView', this.DeliveryProfileDTO.OverView);
              formData.append('YearExperinces', this.DeliveryProfileDTO.YearExperinces.toString());

              formData.append('EducationLevelDTO.Name', this.DeliveryProfileDTO.EducationLevelDTO.Name);

              formData.append('EducationLevelDTO.DateFrom', this.DeliveryProfileDTO.EducationLevelDTO.DateFrom.toDateString());

              formData.append('EducationLevelDTO.DateTo', this.DeliveryProfileDTO.EducationLevelDTO.DateTo.toDateString());

              formData.append('EducationLevelDTO.DeliveryID', this.DeliveryProfileDTO.EducationLevelDTO.DeliveryID);
              for (let i = 0; i < this.DeliveryProfileDTO.Skills.length; i++) {
                formData.append('Skills', this.DeliveryProfileDTO.Skills[i]);


              }
              for (let i = 0; i < this.DeliveryProfileDTO.Languges.length; i++) {
                formData.append('Languges', this.DeliveryProfileDTO.Languges[i]);


              }
              for (let i = 0; i < this.DeliveryProfileDTO.properties.length; i++) {
                formData.append('properties', this.DeliveryProfileDTO.properties[i]);


              }
              this._deliveryService.AddDeliveryProfile(formData).subscribe((resp)=>{
                console.log("manar",resp)
                if(resp.message=="Success"){
                  this._router.navigate(['/delivery/profile'])
                }

              }, error => console.log(error) );



      }else{
           this.showError=true
      }
    } else {
      console.error("DataProfileForm is null");
    }
  }

  hide()
  {
    this.showError=false
  }


  onSelectFile(fileInput: any) {
    this.selectedFile = <File>fileInput.target.files[0];
    console.log(this.selectedFile)
    const dataTransfer = new ClipboardEvent('').clipboardData || new DataTransfer();
    dataTransfer.items.add(new File(['my-file'], 'new-file-name'));
    const inputElement: HTMLInputElement = document.getElementById('formFile') as HTMLInputElement

    inputElement.files = dataTransfer.files;
  }



}