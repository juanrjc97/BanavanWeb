/* eslint-disable require-jsdoc */
import {Component, OnInit} from '@angular/core';
import {AuthService} from 'src/app/services/auth/auth.service';
import {ToggleService} from '../../services/toggle/toggle.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  isCollapsed : boolean = false;

  constructor(private serviceToggle: ToggleService,
      private auth: AuthService) { }

  ngOnInit(): void {
  }

  changeCollapsed() {
    this.isCollapsed = !this.isCollapsed;
    this.serviceToggle.changeStateSide(this.isCollapsed);
  }

  logout() {
    this.auth.logout();
  }
}
