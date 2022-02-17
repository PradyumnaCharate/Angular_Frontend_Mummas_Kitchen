import { Component, Inject, OnInit } from '@angular/core';
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
  errMsg?:string;


  constructor(private dishService:DishService, @Inject('baseUrl') public baseUrl:any) { }

  ngOnInit(): void {
    //2nd parameter is error if any error arises it is pushed to that 2 nd paramter function
    this.dishService.getDishes().subscribe(dishes => this.dishes = dishes,errmsg=>this.errMsg=<any>errmsg)


  }
  onSelect(dish:Dish){
    this.selectedDish=dish;
  }
}
