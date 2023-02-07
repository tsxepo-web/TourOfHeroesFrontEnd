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
  battleVillain = {} as Hero;
  location: string = "";
  @Input() randomHero = {} as Hero;

  constructor(private heroService: HeroService){}
 
  ngOnInit(): void {
    this.getHeroes();
    this.getVillains();
    this.getRandomHero();
  }

  getHeroes(): void {
    this.heroService.getHeroes().subscribe(heroes =>
      this.heroes = heroes.filter(x => x.isVillain === false).slice(0, 10))
  }

  getVillains(): void {
    this.heroService.getHeroes().subscribe(heroes =>
      this.villains = heroes.filter(x => x.isVillain === true))
  }

  getRandomHero(): void {
    const id = Math.floor((Math.random() * this.heroes.length) + 1);
    const hero =  this.heroService.getHero(id, this.location).subscribe(hero =>
      this.randomHero = hero);
  }

  startBattle(): string {
    const hero = this.randomHero;
    const villain = this.battleVillain;
    this.results = this.location;
    return this.results;
  }



}
