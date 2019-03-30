import { Injectable } from '@angular/core';
import {IHotel} from '../models/hotel.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class RequestService {
  private endpoint = 'http://localhost:3000/hotels';

  constructor(
    private http: HttpClient
  ) { }

  public getHotels(): Observable<IHotel[]> {
    return this.http.get<IHotel[]>(this.endpoint);
  }
}
