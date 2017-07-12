import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent implements OnInit {
  randomText: string;

  rightNow: Date = new Date();

  currentBitcoinInvestment: number = 100000;

  constructor() { }

  ngOnInit() {
  }

  addOneHour() {
    //make a copy of the date
    let updated = new Date(this.rightNow);
    //Increase the hours of the copy
    updated.setHours(this.rightNow.getHours() +1);
    //Save the copy in the object
    this.rightNow = updated;
  };

}
