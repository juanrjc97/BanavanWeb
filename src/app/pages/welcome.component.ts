/* eslint-disable require-jsdoc */
import {Component, OnInit} from '@angular/core';
import {SidebarService} from '../services/sidebar.service';
import {AuthService} from '../services/auth/auth.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css'],
})
export class WelcomeComponent implements OnInit {
  constructor(private menuSide: SidebarService) {
    this.menuSide.cargarMenu();
  }

  ngOnInit() {
  }
}
