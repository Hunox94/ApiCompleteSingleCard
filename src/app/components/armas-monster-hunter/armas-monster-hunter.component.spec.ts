import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArmasMonsterHunterComponent } from './armas-monster-hunter.component';

describe('ArmasMonsterHunterComponent', () => {
  let component: ArmasMonsterHunterComponent;
  let fixture: ComponentFixture<ArmasMonsterHunterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ArmasMonsterHunterComponent]
    });
    fixture = TestBed.createComponent(ArmasMonsterHunterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
