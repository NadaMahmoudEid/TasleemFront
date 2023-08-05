import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
   dataSubject:BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  constructor() { }
  updateData(newValue: boolean){
    this.dataSubject.next(newValue);
   
  }
}
