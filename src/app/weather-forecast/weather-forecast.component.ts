import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-weather-forecast',
  templateUrl: './weather-forecast.component.html',
  styleUrls: ['./weather-forecast.component.scss'],
})
export class WeatherForecastComponent implements OnInit {
  cities: any[] = [
    { name: 'Rio de Janeiro' },
    { name: 'Beijing' },
    { name: 'Los Angeles' },
  ];
  constructor() {}

  ngOnInit(): void {}
}
