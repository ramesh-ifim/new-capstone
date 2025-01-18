import { ContentChild, Component , Input,OnChanges ,SimpleChanges, OnInit, ElementRef,ViewChild, DoCheck, AfterContentInit} from '@angular/core';



@Component({
  selector: 'app-demo',
  standalone: false,
  
  templateUrl: './demo.component.html',
  styleUrl: './demo.component.css'
})
export class DemoComponent implements OnChanges, OnInit , DoCheck, AfterContentInit{

  title : string = 'app-demo';
 // @Input() message:string ='';
 @Input() message:string;

 @ContentChild('temp') paraContent: ElementRef;

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

  ngDoCheck(){
    console.log("ngDoCheck  Hook called ...!!!");
    console.log("In ngDoCheck ",this.paraContent)  
  }

  ngAfterContentInit(){
    console.log("ngAfterContentInit  Hook called ...!!!")
    console.log("In ngAfterContentInit ",this.paraContent.nativeElement);
  }

}
