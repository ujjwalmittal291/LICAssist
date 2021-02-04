import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DateService {
  months: string[];
  month: string | number;
  monthName: any;
  day: any;
  year: string | number;
  dayOfWeek = [];
  date: string | number;
  currentDate: string;
  dateObj: any;

  constructor() {
    
  }
  generateCalender() {
    this.dateObj = new Date();

    this.dayOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    this.months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    this.month = this.dateObj.getMonth() + 1;
    this.monthName = this.months[this.month];
    this.date = this.dateObj.getDate();
    this.day = this.dayOfWeek[this.dateObj.getDay()];
    this.year = this.dateObj.getFullYear();
    this.currentDate = this.date + '/' + this.month + '/' + this.year;

    // console.log("Date : " + this.day + ', ' + this.date + ' ' + this.monthName + ' ' + this.year)
    console.log(this.currentDate);
  }
}
