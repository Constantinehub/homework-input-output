import {Component} from '@angular/core';
import {IHotel} from './models/hotel.model';
import Hotels from './utils/mockedHotels.js';
import { ModalComponent } from './components/modal/modal.component';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  public header = 'Hot Weather Widget';
  public title = 'Righteous indignation & like';
  public hotels: IHotel[] = Hotels;
  private initialHotel = this.hotels[0];
  public currentHotel = this.initialHotel;
  public text: string;
  public stars = '';
  public favoritesList: IHotel[] = [];

  constructor(public dialog: MatDialog) {
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

  public getModal(): void {
    const dialogRef = this.dialog.open(ModalComponent, {});
  }

  public favoriteHotel(hotel: IHotel) {
    if (this.favoritesList.indexOf(hotel) === -1) {
      this.favoritesList.push(hotel);
    } else {
      console.log('element already added');
    }
  }

}
