import { Injectable } from '@angular/core';
import { Leader } from '../shared/leader';
import { LEADERS } from '../shared/leaders';
@Injectable({
  providedIn: 'root'
})
export class LeadersService {
  

  constructor() { }
  getLeaders(): Promise<Leader[]>{
    return new Promise(resolve=>{
      //simulate server latency with 2 second delay
      setTimeout(()=>resolve(LEADERS),2000);
    });
  }
  getFeatured():Promise<Leader>{
    return new Promise(resolve=>{
      //simulate server latency with 2 second delay
      setTimeout(()=>resolve(LEADERS.filter((leader)=>leader.featured==true)[0]),2000);
    });
  }
}
