import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonajeValorantComponent } from './personaje-valorant.component';

describe('PersonajeValorantComponent', () => {
  let component: PersonajeValorantComponent;
  let fixture: ComponentFixture<PersonajeValorantComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PersonajeValorantComponent]
    });
    fixture = TestBed.createComponent(PersonajeValorantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
