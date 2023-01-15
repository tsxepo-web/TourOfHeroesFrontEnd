import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroesAndVillainsComponent } from './heroes-and-villains/heroes-and-villains.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { BattleComponent } from './battle/battle.component';

const routes: Routes = [
  {path: '', redirectTo:'/dashboard', pathMatch: 'full'},
  {path: 'heroes', component: HeroesAndVillainsComponent},
  {path: 'dashboard', component:DashboardComponent},
  {path: 'detail/:id', component:HeroDetailComponent},
  {path: 'battle', component:BattleComponent},
];
@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
