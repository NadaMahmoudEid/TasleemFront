import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/auth/Services/login.service';
import { SharedService } from 'src/app/shared/service/shared.service';
import { ClientService } from '../Services/client.service';

@Component({
  selector: 'app-data-profile',
  templateUrl: './data-profile.component.html',
  styleUrls: ['./data-profile.component.scss']
})
export class DataProfileComponent {
  selectedFile!: File;
  showError :boolean=false
  changedInputs: string[] = [];


  constructor(private formBuilder: FormBuilder ,private Shardservice:SharedService, private _loginService : LoginService ,
     private _ClientService : ClientService , private _router :Router) {
  }
  ngOnInit(): void {
  }

   DataProfileForm = this.formBuilder.group({
    FullName: ['', [Validators.required]],
    OverView: ['', [Validators.required]],

    Address: ['', [Validators.required]],
    PhoneNum:['', [Validators.required]],
    profileImage: ['',[Validators.required]],
    languge:new FormArray([]),


  });

  get FullName() {
    return this.DataProfileForm.get('FullName');
  }

  get OverView() {
    return this.DataProfileForm.get('OverView');
  }
  get Address() {
    return this.DataProfileForm.get('Address');
  }
  get PhoneNum()
  {
    return this.DataProfileForm.get('PhoneNum');
  }
  get profileImage() {
    return this.DataProfileForm.get('ProfileImage');
  }

  get languge(){
    return (<FormArray>this.DataProfileForm.get("languge")).controls;
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


      const LangugeFormArray = this.DataProfileForm.get('languge') as FormArray;

      console.log(LangugeFormArray.length);
      if( LangugeFormArray.length >=1){
        console.log("enterCondtion")


        console.log(DataProfileForm.value);



              const formData = new FormData();
              formData.append('Id',this._loginService.getUserId());
              formData.append('FullName',this.DataProfileForm.get('FullName')?.value!) ;
              formData.append('Address', this.DataProfileForm.get('Address')?.value!);
              formData.append('PhoneNum',this.DataProfileForm.get('PhoneNum')?.value!);
              formData.append('ProfileImg', this.selectedFile, this.selectedFile.name);
              formData.append('OverView', this.DataProfileForm.get('OverView')?.value!);

              for (const control of LangugeFormArray.controls) {
                formData.append('Languges', control.value);
              }


              for (let i = 0; i < this.changedInputs.length; i++) {
                formData.append('properties', this.changedInputs[i]);

              }

              this._ClientService.AddClientProfile(formData).subscribe((resp)=>{
                console.log("manar",resp)
                if(resp.message=="Success"){
                  this._router.navigate(['/client/profile'])
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