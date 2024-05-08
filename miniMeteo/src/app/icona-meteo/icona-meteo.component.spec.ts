import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IconaMeteoComponent } from './icona-meteo.component';

describe('IconaMeteoComponent', () => {
  let component: IconaMeteoComponent;
  let fixture: ComponentFixture<IconaMeteoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IconaMeteoComponent]
    });
    fixture = TestBed.createComponent(IconaMeteoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
