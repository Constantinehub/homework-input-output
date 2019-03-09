import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent implements OnInit {
  public title = 'Et harum quidem';
  @Input() public currentHotel: object;

  constructor() { }

  ngOnInit() {
    console.log(this.currentHotel);
  }

}
