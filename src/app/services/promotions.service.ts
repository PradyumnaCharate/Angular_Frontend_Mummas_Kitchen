import { Injectable } from '@angular/core';
import { Promotion } from '../shared/promotion';
import { PROMOTIONS } from '../shared/promotions';
@Injectable({
  providedIn: 'root'
})
export class PromotionsService {
  getPromotions():Promotion[]{
    return PROMOTIONS;

  }
  getPromotion(id:string):Promotion{
    return PROMOTIONS.filter((promotion)=>promotion.id===id)[0];
  }
  getFeatured():Promotion{
    return PROMOTIONS.filter((promotion)=>promotion.featured==true)[0];
  }
  constructor() { }
}
