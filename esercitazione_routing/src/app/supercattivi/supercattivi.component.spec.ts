import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SupercattiviComponent } from './supercattivi.component';

describe('SupercattiviComponent', () => {
  let component: SupercattiviComponent;
  let fixture: ComponentFixture<SupercattiviComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SupercattiviComponent]
    });
    fixture = TestBed.createComponent(SupercattiviComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
