import {Component, OnInit, Input} from '@angular/core';
import {IHotel} from '../../models/hotel.model';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.scss']
})
export class FavoritesComponent implements OnInit {

  @Input() public favoritesList: IHotel[];

  public removeFromFavorites(index) {
    this.favoritesList.splice(index, 1);
  }

  ngOnInit() {
  }

}
