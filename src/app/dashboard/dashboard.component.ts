import { Component, Input, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  heroes: Hero[] = [];
  villains: Hero[] = [];
  results: string = "";
  battleVillain: string = "";
  @Input() randomHero?: Hero;

  constructor(private heroService: HeroService){}
 
  ngOnInit(): void {
    this.getHeroes();
    this.getVillains();
    this.getRandomHero();
  }

  getHeroes(): void {
    this.heroService.getHeroes().subscribe(heroes =>
      this.heroes = heroes.filter(x => x.isHero === true).slice(0, 10))
  }

  getVillains(): void {
    this.heroService.getHeroes().subscribe(heroes =>
      this.villains = heroes.filter(x => x.isHero === false))
  }

  getRandomHero(): void {
    const id = Math.floor((Math.random() * this.heroes.length) + 1);
    const hero =  this.heroService.getHero(id).subscribe(hero =>
      this.randomHero = hero);
  }

  startBattle(): string {
    const hero = this.randomHero;
    const villain = this.battleVillain;
    if ((villain.length > 5)) {
      this.results =  "You have won the game";
      return this.results;
    }
    this.results = "You lost the game";

    return this.results;
  }



}
