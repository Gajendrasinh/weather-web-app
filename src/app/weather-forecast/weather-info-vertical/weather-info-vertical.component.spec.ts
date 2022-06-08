import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherInfoVerticalComponent } from './weather-info-vertical.component';

describe('WeatherInfoVerticalComponent', () => {
  let component: WeatherInfoVerticalComponent;
  let fixture: ComponentFixture<WeatherInfoVerticalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WeatherInfoVerticalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatherInfoVerticalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
