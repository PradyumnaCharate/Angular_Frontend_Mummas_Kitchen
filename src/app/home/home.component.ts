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
    this.dish=this.dishService.getFeatured();
    this.promotion=this.promotionService.getFeatured();
    this.leader=this.leaderService.getFeatured();
  }

}
