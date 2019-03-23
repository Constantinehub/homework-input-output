import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {IHotel} from '../../models/hotel.model';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  public title = 'Righteous indignation & like';
  public isLoading = true;

  @Input() public hotels: IHotel[];
  @Input() public currentHotel: IHotel;
  @Input() public searchText: string;
  @Input() public starAmount: number;
  @Input() public favoritesList: IHotel;
  @Output() public hotelSelected: EventEmitter<IHotel> = new EventEmitter();
  @Output() public addToFavorite: EventEmitter<any> = new EventEmitter();

  constructor() {
  }

  ngOnInit() {
    setTimeout(() => {
      this.isLoading = false;
    }, 2000);
  }

  public selectHotel(event: IHotel) {
    this.hotelSelected.emit(event);
  }

  public pushBtn(event, hotel) {
    this.addToFavorite.emit(hotel);
    event.stopPropagation();
  }

}
