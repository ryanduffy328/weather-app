import { Component, OnInit } from '@angular/core';
import { ICurrentWeather } from '../interfaces';
import { WeatherService } from '../weather.service';
import { fromEventPattern } from 'rxjs';

@Component({
  selector: 'app-current-weather',
  templateUrl: './current-weather.component.html',
  styleUrls: ['./current-weather.component.css']
})
export class CurrentWeatherComponent implements OnInit {
  current: ICurrentWeather;
  constructor(private weatherService: WeatherService) {}

  ngOnInit() {
    this.weatherService
    .getCurrentWeather('KIRKLAND', 'US')
    .subscribe(data => (this.current = data));
  }
}
