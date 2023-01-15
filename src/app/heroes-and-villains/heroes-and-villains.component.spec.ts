import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroesAndVillainsComponent } from './heroes-and-villains.component';

describe('HeroesAndVillainsComponent', () => {
  let component: HeroesAndVillainsComponent;
  let fixture: ComponentFixture<HeroesAndVillainsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeroesAndVillainsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeroesAndVillainsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
