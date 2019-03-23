import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {IHotel} from '../../models/hotel.model';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {
  public starDefault = '';
  public stars = [];

  @Input() hotels: IHotel[];
  @Output()
  public searchRequest: EventEmitter<string> = new EventEmitter();
  @Output()
  public starAmount: EventEmitter<string> = new EventEmitter();

  constructor() {
  }

  public search(event: Event): void {
    this.searchRequest.emit((event.target as HTMLInputElement).value);
  }

  public sortByStars(star: any): void {
    this.starAmount.emit(String(star));
  }

  public pickStars(hotels: IHotel[]) {
    hotels.map((hotel: IHotel) => {
      this.stars.push(hotel.stars);
    });
    return this.stars;
  }

  ngOnInit() {
    this.pickStars(this.hotels);
  }
}
