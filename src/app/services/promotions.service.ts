import { Injectable } from '@angular/core';
import { Promotion } from '../shared/promotion';
import { PROMOTIONS } from '../shared/promotions';
@Injectable({
  providedIn: 'root'
})
export class PromotionsService {
  getPromotions():Promise<Promotion[]>{
    return new Promise(resolve=>{
      //simulate server latency with 2 second delay
      setTimeout(()=>resolve(PROMOTIONS),2000);
    });

  }
  getPromotion(id:string):Promise<Promotion>{
    return new Promise(resolve=>{
      //simulate server latency with 2 second delay
      setTimeout(()=>resolve(PROMOTIONS.filter((promotion)=>promotion.id===id)[0]),2000);
    });
  }
  getFeatured():Promise<Promotion>{
    return new Promise(resolve=>{
      //simulate server latency with 2 second delay
      setTimeout(()=>resolve(PROMOTIONS.filter((promotion)=>promotion.featured==true)[0]),2000);
    });
  }
  constructor() { }
}
