import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {
  createDb(){
  
  const heroes =  [
  {id:1, name: 'Magneto', power: this.powers[1], weatherboost: true, isHero: true},
  {id:2, name: 'Bombasto', power: this.powers[0], weatherboost: false, isHero: true},
  {id:3, name: 'Celeritas', power: this.powers[2], weatherboost: true, isHero: true},
  {id:4, name: 'RubberMane', power: this.powers[3], weatherboost: true, isHero: true},
  {id:5, name: 'Dynamo', power: this.powers[2], weatherboost: true, isHero: true},
  {id:6, name: 'Dr. IQ', power: this.powers[3], weatherboost: false, isHero: true},
  {id:7, name: 'Magma', power: this.powers[5], weatherboost: false, isHero: true},
  {id:8, name: 'Tornado', power: this.powers[7], weatherboost: true, isHero: true},
  {id:9, name: 'Lex Luther', power: this.powers[0], weatherboost: false, isHero: false},
  {id:10, name: 'Joker', power: this.powers[0], weatherboost: false, isHero: false},
  {id:11, name: 'Green thingy', power: this.powers[0], weatherboost: false, isHero: false},

  ];
  return {heroes};
  }
  powers = ['Fire', 'Air', 'Earth', 'Water', 'Ice'];



  constructor() { }

  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
  }
}
