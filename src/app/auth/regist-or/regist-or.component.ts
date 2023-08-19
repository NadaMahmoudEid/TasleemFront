import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-regist-or',
  templateUrl: './regist-or.component.html',
  styleUrls: ['./regist-or.component.scss']
})
export class RegistORComponent implements OnInit {

  selectedOption: string = "";
  op: string = 'اشترك معنا';
  IsChecked:boolean=false;
  constructor(private router: Router) { }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  onOptionSelected(option: string) {
    this.IsChecked=false;
    if (this.selectedOption === option) {
      // Clicked on the selected option, do nothing
      return;
    }

    this.selectedOption = option;
  }

  onNavigate() {

    if (this.selectedOption === "كعميل") {
      this.router.navigate(['/auth/RegisterClient']);
    } else if (this.selectedOption === 'كدليفري') {
      this.router.navigate(['/auth/RegisterDelivery']);
    }
     else {
      this.IsChecked=true;

      // No option selected, handle this case accordingly
    }
  }
}
