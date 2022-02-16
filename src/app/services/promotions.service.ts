import { Injectable } from '@angular/core';
import { Promotion } from '../shared/promotion';
import { PROMOTIONS } from '../shared/promotions';
import { of } from "rxjs";
import {delay} from "rxjs/operators";
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class PromotionsService {
  getPromotions(): Observable<Promotion[]>{
    return of(PROMOTIONS).pipe(delay(2000));
  }

  getPromotion(id:string):Observable<Promotion> {
    return of(PROMOTIONS.filter((promotion) => (promotion.id === id))[0]).pipe(delay(2000));
  }
  getFeatured():Observable<Promotion> {
    return of(PROMOTIONS.filter((promotion) => promotion.featured)[0]).pipe(delay(2000));
  }
  
  constructor() { }
}
