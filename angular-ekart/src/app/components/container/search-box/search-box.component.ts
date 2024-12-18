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
  updateSearchText(event:any){

    console.log(event.target.value);
    this.searchText= event.target.value;
    console.log("search box component : "+this.searchText);
  }
  onSearchTextChanged(){

    this.searchTextChanged.emit(this.searchText) 
    

  }

}
