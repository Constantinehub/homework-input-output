import {Component, OnInit} from '@angular/core';
import {IHotel} from './models/hotel.model';
import Hotels from './utils/mockedHotels.js';
import {MatSnackBar} from '@angular/material';
import { RequestService } from './services/request.service';
import {Observable} from 'rxjs';
import {NotificationComponent} from './components/notification/notification.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  public header = 'Hot Weather Widget';
  public title = 'Righteous indignation & like';

  public hotels$: Observable<IHotel[]>;
  public hotels: IHotel[] = Hotels;
  private initialHotel = this.hotels[0];
  public currentHotel = this.initialHotel;
  public text: string;
  public stars = '';
  public favoritesList: IHotel[] = [];

  constructor(
    private snackBar: MatSnackBar,
    private requestService: RequestService
  ) {}

  public ngOnInit(): void {
    this.hotels$ = this.requestService.getHotels();
  }

  public getHotel(event: IHotel) {
    this.currentHotel = event;
  }

  public searchText(inputText: string) {
    this.text = inputText;
  }

  public starCatch(event: string) {
    this.stars = event;
  }

  public favoriteHotel(hotel: IHotel) {
    if (this.favoritesList.indexOf(hotel) === -1) {
      this.favoritesList.push(hotel);
    } else {
      console.log('element already added');
    }
  }

  openSnackBar() {
    this.snackBar.openFromComponent(NotificationComponent, {
      duration: 3000,
      announcementMessage: 'tst'
    });
  }

}
