import { Component, OnInit } from '@angular/core';
//to retrieve rouute paramter
import { Params,ActivatedRoute } from "@angular/router";
import {Location} from "@angular/common";
import { Dish } from '../shared/dish';
//to get specific dish
import { DishService } from '../services/dish.service';
import { switchMap } from 'rxjs/operators';
import { FormBuilder,FormGroup,Validators } from '@angular/forms';
import { faChevronLeft,faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { Comment } from '../shared/comment';
import { DISHES } from "../shared/dishes";



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
    commentForm!: FormGroup;
    comment!:Comment;
    formErrors: { [key: string]: any } = {
      'author': '',
      'comment': ''
    };
  
    validationMessages: { [key: string]: any } = {
      
      'author': {
        'required':      'Name is required.',
        'minlength':     'Name must be at least 2 characters long.',
        'maxlength':     'FirstName cannot be more than 25 characters long.'
      },
      'comment': {
        'required':      'Comment is required.',
        'minlength':     'Comment must be at least 2 characters long.'
      }
    };

  constructor(private dishService:DishService,private location:Location,private route:ActivatedRoute,private fb:FormBuilder) {
    this.createForm();
    

    
   }

  ngOnInit(): void {
    this.dishService.getDishIds()
      .subscribe((dishIds)=>this.dishIds=dishIds);
    //activated route .snpashot.parmas is array of params and we can acess our param by name
    //now instead of snapshot we will use params observable which will observe param in url and act 
    //according to it instantly and directly.mapping params observable into another observable which is going 
    //and fetching dish from service and making that available as observable and then we are subscribing
    //to that observable and then we are equating to this.dish .
    //And each time dish changes we also change prev and next.
    this.route.params.pipe(switchMap((params:Params)=>this.dishService.getDish(params["id"])) )
      .subscribe(dish => {this.dish = dish; this.setPrevNext(dish.id);});
  }

  createForm():void{
    this.commentForm=this.fb.group({
      //to validate put this into array and specify validations
      author: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(25)] ],
      comment: ['', [Validators.required, Validators.minLength(2)] ],
      rating:5

    });
    this.commentForm.valueChanges
    .subscribe(data => this.onValueChanged(data));
    
    this.onValueChanged();

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
  onValueChanged(data?:any){
    if (!this.commentForm) { return; }
    const form = this.commentForm;
    for (const field in this.formErrors) {
      if (this.formErrors.hasOwnProperty(field)) {
        // clear previous error message (if any)
        this.formErrors[field ] = '';
        const control = form.get(field);
        if (control && control.dirty && !control.valid) {
          const messages = this.validationMessages[field];
          for (const key in control.errors) {
            if (control.errors.hasOwnProperty(key)) {
              this.formErrors[field] += messages[key] + ' ';
            }
          }
        }
      }
    }
  }
  onSubmit(id:any){
    this.comment=this.commentForm.value;
    const d = new Date();
    this.comment.date = d.toISOString();
    DISHES[id].comments.push(this.comment)
    
    //reset to initial state
    this.commentForm.reset({
      author: '',
      comment: '',
      rating: 5,

    });
  }

}
