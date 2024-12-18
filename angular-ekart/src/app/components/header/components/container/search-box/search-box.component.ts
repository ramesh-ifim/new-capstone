import { Component, EventEmitter , Output} from '@angular/core';


@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  styleUrl: './search-box.component.css'
})
export class SearchBoxComponent {

  searchText: String = "";
  @Output()
  searchTextChanged : EventEmitter<String> = new EventEmitter<String>();
  updateSearchText(event:any){

    console.log(event.target.value);
    this.searchText= event.target.value;
  }
  onSearchTextChanged(inputEL: HTMLInputElement){

    console.log(inputEL.value);
    this.searchText=inputEL.value;
    console.log(this.searchText);

  }
  




}
