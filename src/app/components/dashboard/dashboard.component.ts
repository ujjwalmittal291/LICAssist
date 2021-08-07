import { Component, OnInit } from '@angular/core';
import { DateService } from '../../services/dateService/date.service';
import { CurrentCalenderComponent } from '../current-calender/current-calender.component';
import { GenerateTimeService } from '../../services/generateTimeService/generate-time.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  date: any;
  // a: string;
  data = '';
  list = ['apple', 'banana', 'orange'];

  constructor(
    public dateservice: DateService,
    public generateTime: GenerateTimeService
  ) { }

  ngOnInit(): void {
    this.dateservice.generateDate();
    // console.log("Component name is : " + this.constructor.name);

  }

  displayTimeDate() {
    this.generateTime.generateTime();
    this.dateservice.generateDate();
    alert("Time : " + this.generateTime.time + "\n" + "Date : " + this.dateservice.currentDate);
  }


  // To concat string and clear input
  en(d) {
    console.log(d.value.a);
    // this.data = this.data + d.value.a;
    console.log(this.list);
    this.list.push(d.value.a)
    d.reset();
  }

}
