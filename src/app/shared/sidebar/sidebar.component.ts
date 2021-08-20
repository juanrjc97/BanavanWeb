/* eslint-disable require-jsdoc */
import {Component, OnInit} from '@angular/core';
import {SidebarService} from 'src/app/services/sidebar.service';
import {ToggleService} from '../../services/toggle/toggle.service';
import {AuthService} from '../../services/auth/auth.service';


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent implements OnInit {
  isCollapsed = false;
  public userRol :string = 'Gerente';
  menuItems: any[];
  constructor(
     public sidebarService: SidebarService, private auth: AuthService) {
    this.menuItems = sidebarService.menu;
  }

  ngOnInit(): void {
  }
}
