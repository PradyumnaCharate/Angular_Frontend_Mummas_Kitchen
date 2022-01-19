import { Component, OnInit } from '@angular/core';
import { Dish } from '../shared/dish';
import { DishService } from '../services/dish.service';
//here we {} becauuse we havent used default export in Dish class.if we have default export then we can just import 
//without {}



@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  //new variable dishes which will be array of dish type elements.
  dishes?:Dish[];
  selectedDish?:Dish;

  constructor(private dishService:DishService) { }

  ngOnInit(): void {
    this.dishes=this.dishService.getDishes();

  }
  onSelect(dish:Dish){
    this.selectedDish=dish;
  }
}
