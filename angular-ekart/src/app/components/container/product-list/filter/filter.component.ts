import { Component,Input, EventEmitter,Output } from '@angular/core';

@Component({
  selector: 'app-filter',
  standalone: false,
  
  templateUrl: './filter.component.html',
  styleUrl: './filter.component.css'
})
export class FilterComponent {
  newSearchText:String='';
  @Input()
  allProducts: number = 0;
  @Input()
  inStock: number = 0;
  @Input()
  outOfStock: number = 0;
  @Output()
  selectFilterRadioButtonChanged: EventEmitter<String>= new EventEmitter<String>();
  selectedFilterRadioButton: String = "all";
  onSelectedRadioFilterButtonChanged(){

      console.log(this.selectedFilterRadioButton);
      this.selectFilterRadioButtonChanged.emit(this.selectedFilterRadioButton);
    }

}
