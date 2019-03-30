import { Injectable } from '@angular/core';
import {Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  public subject: Subject<any> = new Subject();

  public getData(): void {
    this.subject.next();
  }
}
