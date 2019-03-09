import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  public title = 'Righteous indignation & like';
  public hotel: object;

  @Input() public hotels;
  @Output() public hotelSelected: EventEmitter<object> = new EventEmitter();

  constructor() {
  }

  ngOnInit() {
  }

  public selectHotel(event) {
    this.hotelSelected.emit(event);
    return this.hotel = event;
  }

}
