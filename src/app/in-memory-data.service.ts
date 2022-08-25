import { Injectable } from '@angular/core';
import {Hero} from '../app/hero';
import { InMemoryDbService, RequestInfo } from 'angular-in-memory-web-api';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService{

  constructor() { }
  createDb(){
    const heroes=[
      {id:12,name:'Salman'},
      {id:13,name:'Sarukh'},
      {id:14,name:'Sunil'},
      {id:15,name:'Jitendra'},
      {id:16,name:'Shahid'},
      {id:17,name:'Kapil'},
      {id:18,name:'Rajkumar'},
      {id:19,name:'Ranbir'},
      {id:20,name:'Abhishekh'},
      {id:21,name:'Amitabh'}
    ];
    return {heroes};
  }
  getId(heroes:Hero[]):number{
   return heroes.length >0 ? Math.max(...heroes.map(hero=>hero.id)) + 1 :11;
  }
}
