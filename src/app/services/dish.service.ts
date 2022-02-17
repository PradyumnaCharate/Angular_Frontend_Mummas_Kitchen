import { Injectable } from '@angular/core';
//Injectable decorator makes this class injectable within our app.
import { Dish } from "../shared/dish";
import { HttpClient } from '@angular/common/http';
import { of } from "rxjs";
import {catchError, delay} from "rxjs/operators";
import { Observable } from 'rxjs';
import { baseUrl } from '../shared/baseurl';
import { map } from 'rxjs';
import { ProcessHTTPMsgService } from './process-httpmsg.service';

@Injectable({
  providedIn: 'root'
})
export class DishService {

  constructor(private http:HttpClient,private ProcessHTTPMsgService:ProcessHTTPMsgService) { }
  //So this is method which returns DISHES which is type of Dish.and this we can use anywhere in program.
  //(can inject anywhere where it is needed) 
  getDishes(): Observable<Dish[]> {
    return this.http.get<Dish[]>(baseUrl+"dishes")
      .pipe(catchError(this.ProcessHTTPMsgService.handleError))
  }

  getDish(id: string): Observable<Dish> {
    return this.http.get<Dish>(baseUrl+"dishes/"+id)
    .pipe(catchError(this.ProcessHTTPMsgService.handleError))
  }

  getFeaturedDish(): Observable<Dish> {
    return this.http.get<Dish[]>(baseUrl + 'dishes?featured=true')
      .pipe(map(dishes => dishes[0]))
      .pipe(catchError(this.ProcessHTTPMsgService.handleError))
  }

  getDishIds(): Observable<string[] | any >{
    return this.getDishes().pipe(map(dishes => dishes.map(dish => dish.id)))
      .pipe(catchError(error=>error))
  }

}
