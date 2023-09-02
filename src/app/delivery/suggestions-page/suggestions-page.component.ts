import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/auth/Services/login.service';
import { DeliveryService } from '../Services/delivery.service';

@Component({
  selector: 'app-suggestions-page',
  templateUrl: './suggestions-page.component.html',
  styleUrls: ['./suggestions-page.component.scss']
})
export class SuggestionsPageComponent {
  loading:boolean=false
  isDone:boolean=false
  constructor(private formBuilder: FormBuilder,
     private _router: Router,
     private _deliveryService: DeliveryService,
     private _LoginService:LoginService) { }
  suggestionsForm = this.formBuilder.group({
    name: [''],
    message: ['', [Validators.required]],
    email: ['',[Validators.email]],
  });
  onSubmit(suggestionsForm: any) {
    this.loading=true
    const formData = new FormData();
    if (this.suggestionsForm.valid) {
    
      const data={
        name:suggestionsForm.get("name")?.value || '',
        msg:suggestionsForm.get("message")?.value,
        email:suggestionsForm.get("email")?.value || '',
        applicationUserId:this._LoginService.getUserId()
      }
      this._deliveryService.AddComplaintsِnAndSuggestions(data).subscribe((resp)=>{
        console.log(resp)
        this.suggestionsForm.reset()
        this.loading=true
        this.isDone=true
      })
    }

    
  }
  get email() {
    return this.suggestionsForm.get('email');
  }
}
