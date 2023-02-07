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
  location: string = "";
  score: string = "";
  @Input() randomVillain = {} as Hero;
  @Input() randomHero = {} as Hero;


  constructor(private heroService: HeroService){}
 
  ngOnInit(): void {
    this.getHeroes();
    this.getVillains();
    this.getRandomHero();
    this.getRandomVillain()
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

  getRandomVillain(): void {
    const id = Math.floor((Math.random() * this.villains.length) + 6);
    const villain =  this.heroService.getHero(id, this.location).subscribe(villain =>
      this.randomVillain = villain);
  }

  startBattle(): string {
    const hero = this.randomHero;
    const villain = this.randomVillain;
    if (hero.weatherboost > villain.weatherboost){
      this.results = "You have won the Game";
    }
    else if (hero.weatherboost < villain.weatherboost){
      this.results = "You have lost the Game";
    }
    else this.results = "Its a draw";
    const heroScore = hero.weatherboost.toString();
    const villainScore = villain.weatherboost.toString();
    this.score = "Hero Score: " + heroScore + " " + "," + "Villain Score: " + villainScore;
    return this.results;
  }



}
