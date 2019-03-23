import {Component, Input, OnInit} from '@angular/core';
import {IProfile} from '../../models/hotel.model';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  public title = 'Nam libero voluptatem';
  @Input() currentHotel: IProfile[];

  constructor() { }

  ngOnInit() {
  }

}
