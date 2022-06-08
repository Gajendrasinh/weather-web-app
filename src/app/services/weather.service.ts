import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  wshost: string;
  apiKey: string;

  constructor(public _http: HttpClient) {
    this.wshost = environment.apiUrl;
    this.apiKey = environment.apiKey;
  }

  async getWeatherByCity(city: string): Promise<any> {
    return new Promise((resolve, reject) => {
      this._http
        .get(
          this.wshost +
            'forecast?q=' +
            city +
            '&appid=' +
            this.apiKey +
            '&cnt=4&units=metric'
        )
        .subscribe(
          (resp) => {
            resolve(resp);
          },
          (error) => {
            reject(error);
          }
        );
    });
  }
}
