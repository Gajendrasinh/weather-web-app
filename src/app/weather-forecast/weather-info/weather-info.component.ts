import { Component, OnInit, Input } from '@angular/core';
import { WeatherService } from './../../services/weather.service';

@Component({
  selector: 'app-weather-info',
  templateUrl: './weather-info.component.html',
  styleUrls: ['./weather-info.component.scss'],
})
export class WeatherInfoComponent implements OnInit {
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
