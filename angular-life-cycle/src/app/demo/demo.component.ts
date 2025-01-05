import { Component , Input } from '@angular/core';


@Component({
  selector: 'app-demo',
  standalone: false,
  
  templateUrl: './demo.component.html',
  styleUrl: './demo.component.css'
})
export class DemoComponent {

  title : string = 'app-demo';
  @Input() message:String ='Hello';

  constructor(){

    console.log("Demo constructore called ...!!!");
    console.log(this.title);
    console.log(this.message);
  }

}
