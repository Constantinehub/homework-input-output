import { Pipe, PipeTransform } from '@angular/core';
import {IHotel} from '../models/hotel.model';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: IHotel[], text?: string, stars?: number): any {
    if (!text) {
      return this.sortProducts(value, stars);
    }

    const filterProducts = value.filter((hotel: IHotel) => {
      return `${hotel.title.toLowerCase()}${hotel.description.toLowerCase()}`
        .includes(text.toLowerCase());
    });

    return this.sortProducts(filterProducts, stars);
  }

  private sortProducts(value: IHotel[], stars?: number): IHotel[] {
    return value.filter((hotel: IHotel) => {
      return `${hotel.stars}`.includes(String(stars));
    });
  }

}
