import { Component } from '@angular/core';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.scss']
})
export class ReportComponent {
  suggestList!:any[]
  constructor(private sugesstion:AdminService) {
  
  }
    ngOnInit(): void {
  this.sugesstion.getAllSuggestions().subscribe((resp)=>{
  console.log(resp);
  
    this.suggestList=resp.data
  
  
  })
    }
}
