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
  currentDateName : any;
  dateObj: any;

  constructor() {
    
  }
  generateDate() {
    this.dateObj = new Date();

    this.dayOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    this.month = this.dateObj.getMonth() + 1;
    this.months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    this.monthName = this.months[this.month];
    this.date = this.dateObj.getDate();
    this.day = this.dayOfWeek[this.dateObj.getDay()];
    this.year = this.dateObj.getFullYear();
    this.currentDate = this.date + '/' + this.month + '/' + this.year;
    this.currentDateName = this.day+', '+this.date + ' '+ this.monthName+', '+this.year;
    // console.log("Date : " + this.day + ', ' + this.date + ' ' + this.monthName + ' ' + this.year)
    console.log(this.currentDate);
  }
}
