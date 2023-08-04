import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../Services/login.service';
import { PasswordValidator } from '../CustomValidator/PassValidator';
import jwtDecode from 'jwt-decode';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  errors: string = '';
  loginUserRole :any
  public loginInvalid = false;
  invaliduser!: string;
  decodedToken: any;

  constructor(private formBuilder: FormBuilder,public _route: Router, private LoginService: LoginService) { }
  LoginForm = this.formBuilder.group({
    username: ['', [Validators.required, Validators.minLength(5)]],

    password: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(10), PasswordValidator]],

  });
  get UserName() {
    return this.LoginForm.get('username');
  }

  get password() {
    return this.LoginForm.get('password');
  }
  submitLogin(Loginform: FormGroup) {
    if (this.LoginForm.valid) {
      console.log(Loginform.value)

      this.LoginService.Login(Loginform.value).subscribe((resp) => {
        console.log(resp)
        if (resp.messege == 'Success') {
          localStorage.setItem('userToken', resp.token);
        console.log(resp.token)
        // let encodedUserData = JSON.stringify(localStorage.getItem('userToken'));
        // this.decodedToken = jwtDecode(encodedUserData);
        //     this.loginUserRole = this.decodedToken['http://schemas.microsoft.com/ws/2008/06/identity/claims/role'];
          this.LoginService.saveUserData();
           this.loginUserRole=this.LoginService.getUserRole()
          console.log(this.loginUserRole)

          if( this.loginUserRole=='Client' || this.loginUserRole=='Delivery' ){
            this._route.navigate(['/home'])
             }
                 else if(this.loginUserRole=='Admin'||this.loginUserRole=='SubAdmin' ){
                 this._route.navigate([''])
                 }
                  else{
                 this._route.navigate(['home'])
               }
    
     
        }

      }, error => {
        this.invaliduser = " اسم المستخدم او كلمه سر غير صحيحه";
      })


    }
  }



}
