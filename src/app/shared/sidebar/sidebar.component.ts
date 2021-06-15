import { Component, OnInit } from '@angular/core';
import { SidebarService } from 'src/app/services/sidebar.service';
import { ToggleService } from '../../services/toggle/toggle.service';


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  
  isCollapsed = false;
  menuItems: any[];
  constructor(private  serviceToggle:ToggleService, public sidebarService: SidebarService) {
    this.menuItems = sidebarService.menu;
   }

  ngOnInit(): void {
    this.serviceToggle.updateStateSide$.subscribe((value)=>{
      this.isCollapsed = value;
    })
  }



}
