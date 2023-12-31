import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonajeComponent } from './personaje.component';

describe('PrincipalComponent', () => {
  let component: PersonajeComponent;
  let fixture: ComponentFixture<PersonajeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PersonajeComponent]
    });
    fixture = TestBed.createComponent(PersonajeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
