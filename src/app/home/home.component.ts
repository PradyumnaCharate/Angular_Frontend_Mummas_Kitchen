import { Component, Inject, OnInit } from '@angular/core';
import { DishService } from '../services/dish.service';
import { Dish } from '../shared/dish';
import { Promotion } from '../shared/promotion';
import { PromotionsService } from '../services/promotions.service';
import { Leader } from '../shared/leader';
import { LeadersService } from '../services/leaders.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  dish?:Dish;
  promotion?:Promotion;
  leader?:Leader;
  dishErrMsg?:string;

  constructor(private dishService:DishService,private promotionService:PromotionsService,
    private leaderService:LeadersService,@Inject('baseUrl') public baseUrl:any) {

   }

  ngOnInit(): void {
    this.dishService.getFeaturedDish().subscribe(dish => this.dish = dish,errmsg=>this.dishErrMsg=<any>errmsg);
    this.leaderService.getFeatured().subscribe(leader => this.leader = leader);
    this.promotionService.getFeatured().subscribe(promotion => this.promotion = promotion);
  }

}
