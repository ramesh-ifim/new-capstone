import { Component,EventEmitter, Output, ViewChild, ElementRef } from '@angular/core';
import { viewChild } from '../../../../../node_modules/@angular/core/index';

@Component({
  selector: 'app-search-box',
  standalone: false,  
  templateUrl: './search-box.component.html',
  styleUrl: './search-box.component.css'
})
export class SearchBoxComponent {

  searchText: string = "";
  @Output()
  searchTextChanged : EventEmitter<string> = new EventEmitter<string>();
  //optional 2nd argument of @ViewChild()
  //1. read: use to read the different token from the queried element
  //2. static: determines when the query resolved:
    //True is when the view initialized (before the first change detection) for the first time
    //False if you want it to be resolved after every change detection
    //@ViewChild('searchInput',{static:false}) searchInputElement : ElementRef;
    @ViewChild('searchInput') searchInputElement : ElementRef;
  updateSearchText(){

    console.log(this.searchInputElement.nativeElement.value);
    this.searchText= this.searchInputElement.nativeElement.value;
    console.log("search box component : "+this.searchText);
    this.searchTextChanged.emit(this.searchText);
  }
  onSearchTextChanged(){

    this.searchTextChanged.emit(this.searchText) 
    

  }

}
