import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, Validators } from '@angular/forms';
import { LoginService } from 'src/app/auth/Services/login.service';
import { DeliveryService } from '../Services/delivery.service';
import { Router } from '@angular/router';
import { SharedService } from 'src/app/shared/service/shared.service';

@Component({
  selector: 'app-data-profile',
  templateUrl: './data-profile.component.html',
  styleUrls: ['./data-profile.component.scss']
})
export class DataProfileComponent implements OnInit{
  selectedFile!: File;
  showError :boolean=false
  changedInputs: string[] = [];

  constructor(private formBuilder: FormBuilder ,private Shardservice:SharedService, private _loginService : LoginService ,
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
  get languge(){
    return (<FormArray>this.DataProfileForm.get("languge")).controls;
  }

  addskill(){
    const control=new FormControl(null,[Validators.required]);

    (<FormArray>this.DataProfileForm.get('skill')).push(control);

  }


  addlan(){
    const control=new FormControl(null,[Validators.required]);

    (<FormArray>this.DataProfileForm.get('languge')).push(control);

  }



  onInputChange(fieldName: string, value: any) {

    if (!this.changedInputs.includes(fieldName)) {
      this.changedInputs.push(fieldName);
      console.log(this.changedInputs)


    }



  }

  submitData(DataProfileForm: any) {
    this.Shardservice.dataSubject.next(true)

    if (this.DataProfileForm.valid) {

      const skillFormArray = this.DataProfileForm.get('skill') as FormArray;
      const LangugeFormArray = this.DataProfileForm.get('languge') as FormArray;

      console.log("Skill Length",skillFormArray.length);
      console.log("Language Length",LangugeFormArray.length);

      if(skillFormArray.length >=1 && LangugeFormArray.length >=1){
        console.log("enterCondtion")


        console.log("Data Delivery Profile Form",DataProfileForm.value);



              const formData = new FormData();
              formData.append('Id',this._loginService.getUserId());
              formData.append('FullName',this.DataProfileForm.get('name')?.value!) ;
              formData.append('Address', this.DataProfileForm.get('address')?.value!);

              formData.append('ProfileImg',  this.selectedFile, this.selectedFile.name);
              formData.append('OverView', this.DataProfileForm.get('description')?.value!);
              formData.append('YearExperinces', this.DataProfileForm.get('YearExperinces')?.value!);

              formData.append('EducationLevelDTO.Name', this.DataProfileForm.get('titleEdu')?.value!);

              formData.append('EducationLevelDTO.DateFrom', this.DataProfileForm.get('titleEdufrom')?.value!);

              formData.append('EducationLevelDTO.DateTo', this.DataProfileForm.get('titleEduto')?.value!);

              formData.append('EducationLevelDTO.DeliveryID', this._loginService.getUserId());

              for (const control of skillFormArray.controls) {
                formData.append('Skills', control.value);


              }
              for (const control of LangugeFormArray.controls) {
                formData.append('Languges', control.value);
              }

              for (let i = 0; i < this.changedInputs.length; i++) {
                formData.append('properties', this.changedInputs[i]);

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