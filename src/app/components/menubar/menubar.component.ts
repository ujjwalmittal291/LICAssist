import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-menubar',
  templateUrl: './menubar.component.html',
  styleUrls: ['./menubar.component.css']
})
export class MenubarComponent implements OnInit {

  @Input() addButton: boolean;
  @Input() componentName: string;
  constructor() {
    this.addButton = true;
  }
  ngOnInit(): void {
    console.log("Component name : "+this.componentName);
    
  }

}
