import { Component, OnInit } from '@angular/core';
//import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { InMemoryDataService } from '../in-memory-data.service';

@Component({
  selector: 'app-battle',
  templateUrl: './battle.component.html',
  styleUrls: ['./battle.component.css']
})
export class BattleComponent implements OnInit {
  
  constructor(private heroService: HeroService){}

  ngOnInit(): void {
  }

}
