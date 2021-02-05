import { getLocaleDateFormat } from '@angular/common';
import { Component } from '@angular/core';
import { DateService } from './services/dateService/date.service';
import { CurrentCalenderComponent } from './components/current-calender/current-calender.component';
import { GenerateTimeService } from './services/generateTimeService/generate-time.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  date: any;

  constructor(
    private dateservice: DateService,
    private generateTime: GenerateTimeService) {

  }
  ngOnInit(): void {
    this.dateservice.generateDate();
  }

  displayTimeDate() {
    this.generateTime.generateTime();
    this.dateservice.generateDate();
    alert("Time : " + this.generateTime.time + "\n" + "Date : " + this.dateservice.currentDate);
  }
}
