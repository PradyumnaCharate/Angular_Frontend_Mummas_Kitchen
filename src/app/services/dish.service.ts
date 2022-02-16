import { Injectable } from '@angular/core';
//Injectable decorator makes this class injectable within our app.
import { Dish } from "../shared/dish";
import {DISHES} from "../shared/dishes";
import { of } from "rxjs";
import {delay} from "rxjs/operators";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DishService {

  constructor() { }
  //So this is method which returns DISHES which is type of Dish.and this we can use anywhere in program.
  //(can inject anywhere where it is needed) 
  getDishes(): Observable<Dish[]> {
    return of(DISHES).pipe(delay(2000));
  }

  getDish(id: string): Observable<Dish> {
    return of(DISHES.filter((dish) => (dish.id === id))[0]).pipe(delay(2000));
  }

  getFeaturedDish(): Observable<Dish> {
    return of(DISHES.filter((dish) => dish.featured)[0]).pipe(delay(2000));
  }

}
