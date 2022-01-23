import { Component, OnInit } from '@angular/core';
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

  constructor(private dishService:DishService,private promotionService:PromotionsService,
    private leaderService:LeadersService) {

   }

  ngOnInit(): void {
    this.dishService.getFeatured()
    .then((dish)=>this.dish=dish);
    this.promotionService.getFeatured()
    .then((promotion)=>this.promotion=promotion);
    this.leaderService.getFeatured()
    .then((leader)=>this.leader=leader);
  }

}
