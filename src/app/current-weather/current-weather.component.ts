import { Component, OnInit } from '@angular/core';
import { ICurrentWeather } from '../interfaces'
@Component({
  selector: 'app-current-weather',
  templateUrl: './current-weather.component.html',
  styleUrls: ['./current-weather.component.css']
})
export class CurrentWeatherComponent implements OnInit {
  current: ICurrentWeather
  constructor() {
    this.current = {
      city: 'Kirkland',
      country: 'US',
      date: new Date,
      image: 'assets/img/sunny.jpg',
      temperature: 39,
      description: 'Cold and wet!'
    } as ICurrentWeather
   }

  ngOnInit() {
  }

}