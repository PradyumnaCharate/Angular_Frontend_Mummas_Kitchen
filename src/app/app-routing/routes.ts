import { Routes } from "@angular/router";
import { MenuComponent } from '../menu/menu.component';
import { DishdetailComponent } from '../dishdetail/dishdetail.component';
import { DishService } from '../services/dish.service';
import { HomeComponent } from '../home/home.component';
import { AboutComponent } from '../about/about.component';
import { ContactComponent } from '../contact/contact.component';
import { AppRoutingModule } from "../app-routing/app-routing.module";


export const routes:Routes=[
    {path:"home",component:HomeComponent},
    {path:"menu",component:MenuComponent},
    {path:"contactus",component:ContactComponent},
    {path:"dishdetail/:id",component:DishdetailComponent},
    {path:"aboutus",component:AboutComponent},
    {path:"",redirectTo:"/home",pathMatch:"full"}

];