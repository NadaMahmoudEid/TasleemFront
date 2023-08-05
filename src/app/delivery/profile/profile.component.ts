import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { GetDeliveryProfileData } from '../Interfaces/GetDeliveryProfileData.ts';
import { DeliveryService } from '../Services/delivery.service';
import { LoginService } from '../../../app/auth/Services/login.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  DeliveryProfileDTO:GetDeliveryProfileData | undefined;
  deliveryID:string="";
  isButtonClicked = false;
  constructor(private router :Router, private _deliveryService:DeliveryService, private _loginService:LoginService) {


  }
  ngOnInit() {
     this.deliveryID=this._loginService.getUserId();
     this._deliveryService.GetDeliveryProfileDataDTO(this.deliveryID).subscribe((resp)=>{
     if(resp.message=="Success"){
      this.DeliveryProfileDTO = resp.data;
        console.log("success",resp)

       }

    }, error => console.log(error) );
  }
  route(){
    this.router.navigate(['/delivery/ProfileData']);
  

  }
}
