import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinalSpaceComponent } from './final-space.component';

describe('FinalSpaceComponent', () => {
  let component: FinalSpaceComponent;
  let fixture: ComponentFixture<FinalSpaceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FinalSpaceComponent]
    });
    fixture = TestBed.createComponent(FinalSpaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
