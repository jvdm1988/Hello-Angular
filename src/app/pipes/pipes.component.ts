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

  rockSearchText: string = "";
  theRocks: object[] = [
    {
      name: "Wrestler Rock",
      pictureUrl: "https://media4.giphy.com/media/l0NwPZ027mabR6Tg4/200w.webp#7-grid1"
    },
    {
      name: "Turtle Neck The Rock",
      pictureUrl: "https://media4.giphy.com/media/AjkKC77JZVCEg/200w.webp#8-grid1"
    },
    {
      name: "Fast and Furious The Rock",
      pictureUrl: "https://media0.giphy.com/media/De0QzhpSj9sUo/200.webp#21-grid1"
    },
    {
      name: "Gym The Rock",
      pictureUrl: "https://media4.giphy.com/media/2Faz8AWeOgrfO4FHi/200.webp#36-grid1"
    },
    {
      name: "Scorpion King Rock",
      pictureUrl: "https://media2.giphy.com/media/3ohzdHWv4a5GNet5p6/200.webp#44-grid1"
    },
    {
      name: "Moana The Rock",
      pictureUrl: "https://media2.giphy.com/media/26ufbuJkdEJPKvQ9W/200.webp#47-grid1"
    },
  ];

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
