import { Component, OnInit ,Input } from '@angular/core';
import { Dish } from '../shared/dish';



@Component({
  selector: 'app-dishdetail',
  templateUrl: './dishdetail.component.html',
  styleUrls: ['./dishdetail.component.scss']
})
export class DishdetailComponent implements OnInit {
    //We are providing input of selected Dish from menu template so to acess that input we need @input 
    @Input()
    dish?:Dish;

  constructor() {
    
   }

  ngOnInit(): void {
  }

}
