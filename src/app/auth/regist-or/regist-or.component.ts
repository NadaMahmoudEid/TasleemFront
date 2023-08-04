import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-regist-or',
  templateUrl: './regist-or.component.html',
  styleUrls: ['./regist-or.component.scss']
})
export class RegistORComponent implements OnInit {
  selectedOption: string="" 
  op:string='اشترك معنا'
  IsChecked: boolean = false;

  constructor(private router: Router) {}
  ngOnInit(): void {
    
  }

  onOptionSelected(option: string) {
    this.selectedOption = option;
  }

  onNavigate() {
    // console.log(this.selectedOption);
    if (this.selectedOption == "كعميل") {
      console.log(this.selectedOption);
      this.router.navigate(['/auth/RegisterClient']);
    } else if (this.selectedOption == 'كدليفري') {
      console.log(this.selectedOption);
      this.router.navigate(['/auth/RegisterDelivery']);
    } else {
      this.IsChecked = true;
    }
  }
}
