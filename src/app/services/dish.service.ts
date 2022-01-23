import { Injectable } from '@angular/core';
//Injectable decorator makes this class injectable within our app.
import { Dish } from "../shared/dish";
import {DISHES} from "../shared/dishes";
import { of } from "rxjs";
import {delay} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class DishService {

  constructor() { }
  //So this is method which returns DISHES which is type of Dish.and this we can use anywhere in program.
  //(can inject anywhere where it is needed) 
  getDishes(): Promise<Dish[]> {
    //here we know We are getting DISHES immediately so we directly resolved promise.SO will now also have 
    //to edit menu component so handle promise.(then and catch)
    return new Promise(resolve=>{
      //simulate server latency with 2 second delay
      setTimeout(()=>resolve(DISHES),2000);
    });
  }
  getDish(id: string): Promise<Dish> {
    return new Promise(resolve=> {
      // Simulate server latency with 2 second delay
        setTimeout(() => resolve(DISHES.filter((dish) => (dish.id === id))[0]), 2000);
    });
  }

  getFeatured(): Promise<Dish> {
    return  new Promise(resolve=> {
      // Simulate server latency with 2 second delay
        setTimeout(() => resolve(DISHES.filter((dish) => dish.featured)[0]), 2000);
    });
  }

}
