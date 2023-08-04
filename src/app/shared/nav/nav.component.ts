import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { LoginService } from 'src/app/auth/Services/login.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {


isLoggedIn = false;
isClient = false;
isDelivery = false;
isAdmin = false;

constructor(private _LoginService: LoginService, private _Router: Router) {}

ngOnInit(): void {
  this._LoginService.userData.subscribe((userData) => {
    if (userData !== null) {
      this.isLoggedIn = true;
      this.isClient = this._LoginService.getUserRole() === 'Client';
      this.isDelivery = this._LoginService.getUserRole() === 'Delivery';
      this.isAdmin = this._LoginService.getUserRole() === 'Admin';
    } else {
      this.isLoggedIn = false;
      this.isClient = false;
      this.isDelivery = false;
      this.isAdmin = false;
    }
  });
}

Logout() {
  this._LoginService.LogOut();
}
}
