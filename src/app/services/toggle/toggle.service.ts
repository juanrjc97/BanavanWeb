import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ToggleService {
  isCollapsed = false;

  constructor() { }

  private _stateSideBar = new Subject<any>();
  
  updateStateSide$ = this._stateSideBar.asObservable();
  changeStateSide(value: boolean): void {
    console.log(value);
    this._stateSideBar.next(value);}


}
