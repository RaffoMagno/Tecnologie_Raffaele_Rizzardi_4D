import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SupereroiComponent } from './supereroi.component';

describe('SupereroiComponent', () => {
  let component: SupereroiComponent;
  let fixture: ComponentFixture<SupereroiComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SupereroiComponent]
    });
    fixture = TestBed.createComponent(SupereroiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
