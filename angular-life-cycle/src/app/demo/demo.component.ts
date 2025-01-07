import { Component , Input,OnChanges ,SimpleChanges, OnInit, ElementRef,ViewChild} from '@angular/core';



@Component({
  selector: 'app-demo',
  standalone: false,
  
  templateUrl: './demo.component.html',
  styleUrl: './demo.component.css'
})
export class DemoComponent implements OnChanges, OnInit {

  title : string = 'app-demo';
 // @Input() message:string ='';
 @Input() message:string [] ;

  @ViewChild('temp') tempPara: ElementRef;
  constructor(){

    console.log("Demo constructore called ...!!!");
    console.log(this.title);
    //console.log(this.message);
  }

  ngOnChanges(changes:SimpleChanges){
    console.log("ngOnChanges Hook called ...!!!");
    //console.log(this.message);
    console.log(changes);

  }

  ngOnInit(){

    console.log("ngOnint Hook called ...!!!")
    //console.log(this.tempPara.nativeElement.innerHTML);
  }

}
