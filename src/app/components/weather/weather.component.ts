import {Component, Input, OnInit} from '@angular/core';
import {IWeather} from '../../models/hotel.model';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent implements OnInit {
  public title = 'Et harum quidem';
  @Input() public currentHotel: IWeather[];

  constructor() { }

  ngOnInit() {
  }

}
