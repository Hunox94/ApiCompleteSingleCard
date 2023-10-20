import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonajeFinalSpaceComponent } from './personaje-final-space.component';

describe('PersonajeFinalSpaceComponent', () => {
  let component: PersonajeFinalSpaceComponent;
  let fixture: ComponentFixture<PersonajeFinalSpaceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PersonajeFinalSpaceComponent]
    });
    fixture = TestBed.createComponent(PersonajeFinalSpaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
