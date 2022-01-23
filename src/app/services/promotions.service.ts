import { Injectable } from '@angular/core';
import { Promotion } from '../shared/promotion';
import { PROMOTIONS } from '../shared/promotions';
@Injectable({
  providedIn: 'root'
})
export class PromotionsService {
  getPromotions():Promise<Promotion[]>{
    return Promise.resolve(PROMOTIONS);

  }
  getPromotion(id:string):Promise<Promotion>{
    return Promise.resolve(PROMOTIONS.filter((promotion)=>promotion.id===id)[0]);
  }
  getFeatured():Promise<Promotion>{
    return Promise.resolve(PROMOTIONS.filter((promotion)=>promotion.featured==true)[0]);
  }
  constructor() { }
}
