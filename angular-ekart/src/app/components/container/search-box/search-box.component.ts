import { Component,EventEmitter, Output } from '@angular/core';

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
  updateSearchText(inputEL : HTMLInputElement){

    console.log(inputEL);
    this.searchText= inputEL.value;
    console.log("search box component : "+this.searchText);
    this.searchTextChanged.emit(this.searchText);
  }
  onSearchTextChanged(){

    this.searchTextChanged.emit(this.searchText) 
    

  }

}
