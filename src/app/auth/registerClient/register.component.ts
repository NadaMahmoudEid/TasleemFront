import { Component } from '@angular/core';
import { RegisterService } from '../Services/register.service';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PasswordValidator } from '../CustomValidator/PassValidator';
import { ConfirmPassVaildators } from '../CustomValidator/ConfirmPassword';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  userNameInvalid :any
  errors :any
  constructor(private formBuilder: FormBuilder,
    private _route: Router, 
    private _registerService: RegisterService) {}

  RegistrationForm = this.formBuilder.group(
    {
    userName: ['', [Validators.required, Validators.minLength(4)]],

    email: ['', [Validators.required, Validators.email]],
     password: ['',[Validators.required, Validators.minLength(8), PasswordValidator,Validators.maxLength(10)]],
    confirmPassword: ['', [Validators.required, Validators.minLength(8)]],
    Question: ['', [Validators.required]],
    answer: ['', [Validators.required]],
  }, { validators: [ConfirmPassVaildators] });

  get password() {
    return this.RegistrationForm.get('password');
  }
  get qui() {
    return this.RegistrationForm.get('Question');
  }
  get answer() {
    return this.RegistrationForm.get('answer');
  }
  get confirmPassword() {
    return this.RegistrationForm.get('confirmPassword');
  }
  get email() {
    return this.RegistrationForm.get('email');
  }

  get UserName() {
    return this.RegistrationForm.get('userName');
  }
  onSubmit(RegistrationFormData:any){
    if (this.RegistrationForm.valid) {
      console.log("after submit",RegistrationFormData.value)
    
    this._registerService.ClientRegitser(RegistrationFormData.value).subscribe((resp)=>{
      console.log(resp)
if(resp.Message=="Success"){
  this._route.navigate(['/auth/Login'])
}
else if(resp.message=="Success"){
  this._route.navigate(['/auth/Login'])
}
else if(resp.Message=="Duplicate UserName"){
  this.userNameInvalid =true
}
    })
    
    
    }
  }

}
