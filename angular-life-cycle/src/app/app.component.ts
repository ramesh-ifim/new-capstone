import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-life-cycle';
  inputVal : string ='';

  constructor(){

    console.log("App component constructor called ...!!!");
  }

  onBtnClick(inputEL: HTMLInputElement){

    this.inputVal = (inputEL.value);
  }
}
