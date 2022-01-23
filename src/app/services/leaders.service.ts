import { Injectable } from '@angular/core';
import { Leader } from '../shared/leader';
import { LEADERS } from '../shared/leaders';
@Injectable({
  providedIn: 'root'
})
export class LeadersService {
  

  constructor() { }
  getLeaders(): Promise<Leader[]>{
    return Promise.resolve(LEADERS);
  }
  getFeatured():Promise<Leader>{
    return Promise.resolve(LEADERS.filter((leader)=>leader.featured==true)[0]);
  }
}
