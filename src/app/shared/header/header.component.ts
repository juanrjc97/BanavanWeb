/* eslint-disable require-jsdoc */
import {Component, OnInit} from '@angular/core';
import {AuthService} from 'src/app/services/auth/auth.service';
import {ToggleService} from '../../services/toggle/toggle.service';
import { SidebarService } from '../../services/sidebar.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  isCollapsed : boolean = false;

  constructor(private sidebarService: SidebarService,
      private auth: AuthService) { }

  ngOnInit(): void {
  }

  logout() {
    this.auth.logout();
    this.sidebarService.menu = [];
  }
}
