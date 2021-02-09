import { Component, OnInit } from '@angular/core';
import { FirestoreService } from 'src/app/services/firestoreService/firestore.service';

@Component({
  selector: 'app-policymaster',
  templateUrl: './policymaster.component.html',
  styleUrls: ['./policymaster.component.css']
})
export class PolicymasterComponent implements OnInit {

  constructor(public fsService: FirestoreService) { }

  ngOnInit(): void {
  }

  //   export interface policyDetails{
  //     policyNumber: number,
  //     proposerName:string,
  //     sumInsured: number,
  //     premium:number,
  //     termTable:string,
  //     nominee: string,
  //     doc: string,
  //     dom: string,
  //     mode: string,
  //     status:string,
  //     moneyBack: boolean
  // }

}
