import { Component } from '@angular/core';
import { LoginService } from 'src/app/auth/Services/login.service';
import { JobService } from 'src/app/delivery/Services/job.service';

@Component({
  selector: 'app-my-project',
  templateUrl: './my-project.component.html',
  styleUrls: ['./my-project.component.scss']
})
export class MyProjectComponent {

  JobLists:any

  constructor(private _jobService :JobService, private _loginService:LoginService) {
    
  }
  ngOnInit(): void {
this._jobService.GetJobsByClientid(this._loginService.getUserId()).subscribe((resp)=>{
console.log(resp)
this.JobLists=resp;

console.log(this.JobLists)

})
 }
}
