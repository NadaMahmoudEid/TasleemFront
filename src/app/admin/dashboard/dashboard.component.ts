import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(private _adminservice: AdminService, private _Router: Router) {


  }
  waitingclient: any
  plans: any
  errorMsg = ""
  PatientId: any
  AlertMsg = ""
  showAlert = false
  DoctorName: string | undefined
  showConfirmation = false;
  ngOnInit() {
    this.GetwaitingList();
  }

  details(jobid: number) {
    this._Router.navigate([`/client/porpDetails/` + jobid])
  }
  AcceptOrder(jobid: number, clientid: string) {
    this._adminservice.confirmjob(clientid, jobid).subscribe((resp) => {
      console.log(resp)
      if (resp.msg == 'Confirmed') {
        this.GetwaitingList();

        this.showConfirmation = true;
        this.showAlert = true;
        this.AlertMsg = "تم قبول طلب العميل بنجاح"
        this.Time();
        
      }
    })
  }
  RejectOrder(jobid: number, clientid: string) {
    this._adminservice.rejectjob(clientid, jobid).subscribe((resp) => {
      console.log(resp)
      if (resp.msg == "Rejected") {
        this.GetwaitingList();

        this.showAlert = true;
        this.AlertMsg = "تم رفض طلب العميل بنجاح"

        console.log("donnne")
      }
    })
  }

  Time() {
    setTimeout(() => {
      this.showAlert = false
    }, 3000);
  }
  GetwaitingList(){
    this._adminservice.GetWaiting().subscribe((resp) => {

      console.log(resp)
      this.waitingclient = resp;
    });
  }
}