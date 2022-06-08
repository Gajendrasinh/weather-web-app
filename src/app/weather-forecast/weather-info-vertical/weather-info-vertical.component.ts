import { Component, OnInit, Input } from '@angular/core';
import { WeatherService } from './../../services/weather.service';

@Component({
  selector: 'app-weather-info-vertical',
  templateUrl: './weather-info-vertical.component.html',
  styleUrls: ['./weather-info-vertical.component.scss'],
})
export class WeatherInfoVerticalComponent implements OnInit {
  @Input() city: string = '';
  weatherList: any = [];

  constructor(public weatherService: WeatherService) {}

  ngOnInit(): void {
    this.weatherService.getWeatherByCity(this.city).then((resp) => {
      console.log(resp);
      this.weatherList = resp.list;
    });
  }
}
