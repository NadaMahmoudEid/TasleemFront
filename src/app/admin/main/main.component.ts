import { Component } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {
resetBehaviourNotification: any;
resetBehavioursubs() {
throw new Error('Method not implemented.');
}

  userName: String | undefined;
  decodedImage: any;
  behaviorSubjectforNotificationsnumber: number = 0;
  behaviorSubjectforSubscribtionsnumber: number = 0;
  behaviorSubjectforCountNotifications: number = 0;

  doctorId!: string;
  errorMsg: any;
  counter: number = 0;
  CounterSubscription: number = 0
}
