import { Component , Input,OnChanges ,SimpleChanges} from '@angular/core';



@Component({
  selector: 'app-demo',
  standalone: false,
  
  templateUrl: './demo.component.html',
  styleUrl: './demo.component.css'
})
export class DemoComponent implements OnChanges {

  title : string = 'app-demo';
  @Input() message:string ='';

  constructor(){

    console.log("Demo constructore called ...!!!");
    console.log(this.title);
    console.log(this.message);
  }

  ngOnChanges(changes:SimpleChanges){
    console.log("ngOnChanges Hook called ...!!!");
    console.log(this.message);
    console.log(changes);

  }

}
