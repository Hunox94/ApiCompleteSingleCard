import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValorantComponent } from './valorant.component';

describe('ValorantComponent', () => {
  let component: ValorantComponent;
  let fixture: ComponentFixture<ValorantComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ValorantComponent]
    });
    fixture = TestBed.createComponent(ValorantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
