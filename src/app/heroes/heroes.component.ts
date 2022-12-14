import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero'
// import { HEROES } from '../mock-heroes'
import { HeroService } from '../hero.service';
// import { MessageService } from '../message.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  heroes: Hero[] = [];
  
  constructor(private heroService: HeroService) {

  }

  ngOnInit(): void {
      this.getHeroes();
  }

  getHeroes() {
    this.heroService.getData().subscribe(heroes=>this.heroes=heroes);
  }

add(name:string ){
  name=name.trim();
  if(!name){
    return ;
  }
  this.heroService.addHeroes({ name } as Hero).subscribe((data: Hero)=>this.heroes.push(data))
}

delete(hero:Hero){
  this.heroes=this.heroes.filter(h=>h!==hero);
  this.heroService.deleteHero(hero.id).subscribe();
}

}
