import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-cool-bindings',
  templateUrl: './my-cool-bindings.component.html',
  styleUrls: ['./my-cool-bindings.component.css']
})
export class MyCoolBindingsComponent implements OnInit {
  feedbackMessage: string = "Please click on these things.";
  imageUrl: string = "https://media2.giphy.com/media/3o72Ffdfgr3lcGniU0/200.webp#8-grid1";
  // Here below we declare the property which is mandatory to use them in this file
  // Default is not necessary, but easier in use.
  clickCount: number = 0;
  isInputDisabled: boolean = false;
  buttonText: string = "Disable The Input";

  constructor() { }

  ngOnInit() {
  }

  changeTheImage() {
    // if current image is the 1st one
    if (this.imageUrl === "https://media2.giphy.com/media/3o72Ffdfgr3lcGniU0/200.webp#8-grid1") {
      // change it to the second one
      this.imageUrl = "https://media0.giphy.com/media/3o85xtXEra0Y6vRTj2/200.webp#0-grid1";
    }
    else {
      // Otherwise, change it back to the 1st one
      this.imageUrl = "https://media2.giphy.com/media/3o72Ffdfgr3lcGniU0/200.webp#8-grid1";
    }
    this.clickCount += 1;
  }

  updateMessage() {
    this.feedbackMessage = "Thanks for Clicking!";
    this.clickCount += 1;
  }

  toggleThatInput() {
    if (this.isInputDisabled === true) {
      this.isInputDisabled = false;
      this.buttonText = "Disable this input";
    }
    else {
      this.isInputDisabled = true;
      this.buttonText = "Enable this Input";
    }
  }
}
