import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-menubar',
  templateUrl: './menubar.component.html',
  styleUrls: ['./menubar.component.css']
})
export class MenubarComponent implements OnInit {

  @Input()
  addButton: boolean;
  constructor() {
    this.addButton = true;
  }
  ngOnInit(): void {
  }

}
