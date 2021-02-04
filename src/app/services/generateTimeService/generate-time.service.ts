import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GenerateTimeService {
  hh: any;
  mm: any;
  ss: any;
  time: any;
  timeObj: any;

  constructor() {
  }
  generateTime() {
    this.timeObj = new Date();
    this.hh = this.timeObj.getHours();
    this.mm = this.timeObj.getMinutes();
    this.ss = this.timeObj.getSeconds();
    this.time = this.hh + ':' + this.mm + ':' + this.ss;
    console.log(this.time);
  }

}
