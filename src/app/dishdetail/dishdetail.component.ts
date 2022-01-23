import { Component, OnInit } from '@angular/core';
//to retrieve rouute paramter
import { Params,ActivatedRoute } from "@angular/router";
import {Location} from "@angular/common";
import { Dish } from '../shared/dish';
//to get specific dish
import { DishService } from '../services/dish.service';



@Component({
  selector: 'app-dishdetail',
  templateUrl: './dishdetail.component.html',
  styleUrls: ['./dishdetail.component.scss']
})
export class DishdetailComponent implements OnInit {
    //We are providing input of selected Dish from menu template so to acess that input we need @input 
    //Now instead of binding we are receiving route parameter so to retrieve that

    dish?:Dish;

  constructor(private dishService:DishService,private location:Location,private route:ActivatedRoute) {
    
   }

  ngOnInit(): void {
    //activated route .snpashot.parmas is array of params and we can acess our param by name
    let id=this.route.snapshot.params["id"];
    this.dishService.getDish(id)
    .then((dish)=>this.dish=dish);
  }
  goBack():void{
    //this is location packages method helps to go to back page in history
    this.location.back();

  }

}
