import { Component, OnInit } from '@angular/core';
//to retrieve rouute paramter
import { Params,ActivatedRoute } from "@angular/router";
import {Location} from "@angular/common";
import { Dish } from '../shared/dish';
//to get specific dish
import { DishService } from '../services/dish.service';
import { switchMap } from 'rxjs/operators';
import { faChevronLeft,faChevronRight } from '@fortawesome/free-solid-svg-icons';



@Component({
  selector: 'app-dishdetail',
  templateUrl: './dishdetail.component.html',
  styleUrls: ['./dishdetail.component.scss']
})
export class DishdetailComponent implements OnInit {
    //We are providing input of selected Dish from menu template so to acess that input we need @input 
    //Now instead of binding we are receiving route parameter so to retrieve that

    dish!:Dish;
    dishIds!: string[];
    prev!:string;
    next!:string;
    faChevronLeft=faChevronLeft;
    faChevronRight=faChevronRight;

  constructor(private dishService:DishService,private location:Location,private route:ActivatedRoute) {
    

    
   }

  ngOnInit(): void {
    this.dishService.getDishIds()
      .subscribe((dishIds)=>this.dishIds=dishIds);
    //activated route .snpashot.parmas is array of params and we can acess our param by name
    //now instead of snapshot we will use params observable which will observe param in url and act 
    //according to it instantly and directly.mapping params observable into another observable which is going 
    //and fetching dish from service and making that available as observable and then we are subscribing
    //to that observable and then we are equating to this.dish .
    this.route.params.pipe(switchMap((params:Params)=>this.dishService.getDish(params["id"])) )
      .subscribe(dish => {this.dish = dish; this.setPrevNext(dish.id);});
  }
  goBack():void{
    //this is location packages method helps to go to back page in history
    this.location.back();

  }
  setPrevNext(dishId:string){
    const index=this.dishIds?.indexOf(dishId);
    this.prev=this.dishIds[(this.dishIds.length + index-1)% this.dishIds.length];
    this.next = this.dishIds[(this.dishIds.length + index + 1) % this.dishIds.length];


  }

}
