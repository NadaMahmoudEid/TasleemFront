import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-subadmin-form',
  templateUrl: './subadmin-form.component.html',
  styleUrls: ['./subadmin-form.component.scss']
})
export class SubadminFormComponent implements OnInit {
  userForm: any;
  constructor(private formBuilder: FormBuilder) { }
  ngOnInit() {
    this.userForm = this.formBuilder.group({
      userName: ['',[Validators.required, Validators.pattern('^[a-zA-Z]+$'),Validators.minLength(3)]],
      password: ['', [Validators.required ,Validators.minLength(4)]],
    });
  }

  get password() {
    return this.userForm.get('password');
  }
  
  get userName() {
    return this.userForm.get('userName');
  }
}
