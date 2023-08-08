import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/auth/Services/login.service';

import { SharedService } from 'src/app/shared/service/shared.service';
import { ClientService } from '../Services/client.service';
import { GetclientProfileData } from 'src/app/delivery/Interfaces/GetclientProfileData';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent {
  GetclientProfileData: GetclientProfileData | undefined;
  HaveaProData: boolean = true;
  deliveryID: string = "";
  isButtonClicked = false;
  constructor(private router: Router, private _clientService: ClientService,private Shardservice:SharedService, private _loginService: LoginService) {


  }
  ngOnInit() {
    this.deliveryID = this._loginService.getUserId();
    console.log(this.deliveryID)
    this._clientService.GetClientProfileDataDTO(this.deliveryID).subscribe((resp) => {
      if (resp.message == "Success") {
        
        this.GetclientProfileData = resp.data;
        if (this.GetclientProfileData?.fullName !=null ) {
          this.Shardservice.dataSubject.next(true)
          this.HaveaProData = this.Shardservice.dataSubject.value;
          
        }else{  
          this.Shardservice.dataSubject.next(false)
        }
        console.log("success", resp)
      
      }

    }, error => console.log(error));

  }

  route() {
    this.router.navigate(['/client/dataProfile']);


  }
}
