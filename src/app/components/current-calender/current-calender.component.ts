import { Component, OnInit, Output } from '@angular/core';
import { DateService} from '../../services/dateService/date.service'

@Component({
  selector: 'app-current-calender',
  templateUrl: './current-calender.component.html',
  styleUrls: ['./current-calender.component.css']
})
export class CurrentCalenderComponent implements OnInit {

  constructor(private dateService : DateService) { }
  ngOnInit() {
    // this.generateCalender();
    console.log(this.dateService.currentDate);
  }

}
