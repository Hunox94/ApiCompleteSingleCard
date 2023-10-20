import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonajePokemonComponent } from './personaje-pokemon.component';

describe('PersonajePokemonComponent', () => {
  let component: PersonajePokemonComponent;
  let fixture: ComponentFixture<PersonajePokemonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PersonajePokemonComponent]
    });
    fixture = TestBed.createComponent(PersonajePokemonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
