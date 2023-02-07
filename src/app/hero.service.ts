import { Injectable } from '@angular/core';
import { Hero } from './hero';
import {Observable} from 'rxjs';
import {HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HeroService {
  private heroesUrl = 'https://tourofheroesbackendtjabane.azurewebsites.net/api/heroes';

  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  };

  constructor(private http: HttpClient){
  }

  getHeroes(): Observable<Hero[]>{

    return this.http.get<Hero[]>(this.heroesUrl);
  }

  getHero(id: number, location: string = "Moscow"): Observable<Hero> {
    const url = `${this.heroesUrl}/${id}?location=${location}`;
    return this.http.get<Hero>(url);
  }

  addHero(hero: Hero): Observable<Hero> {
    return this.http.post<Hero>(this.heroesUrl, hero, this.httpOptions);
  }

  deleteHero(id: number): Observable<Hero> {
    const url = `${this.heroesUrl}/${id}`;
    return this.http.delete<Hero>(url, this.httpOptions);
  }
  updateHero(hero: Hero): Observable<any> {
    return this.http.put(this.heroesUrl, hero, this.httpOptions);
  }
}
