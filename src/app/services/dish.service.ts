import { Injectable } from '@angular/core';
//Injectable decorator makes this class injectable within our app.
import { Dish } from "../shared/dish";
import {DISHES} from "../shared/dishes";

@Injectable({
  providedIn: 'root'
})
export class DishService {

  constructor() { }
  //So this is method which returns DISHES which is type of Dish.and this we can use anywhere in program.
  //(can inject anywhere where it is needed) 
  getDishes(): Promise<Dish[]> {
    //here we know We are getting DISHES immediately so we directly resolved promise
    return Promise.resolve(DISHES);
  }
  getDish(id:string): Promise<Dish>{
    return Promise.resolve(DISHES.filter((dish)=>dish.id=== id )[0]);
  }
  getFeatured():Promise<Dish>{
    return Promise.resolve(DISHES.filter((dish)=>dish.featured)[0]);
  }
 
}
