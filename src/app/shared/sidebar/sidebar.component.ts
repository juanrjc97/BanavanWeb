import { Component, OnInit } from '@angular/core';
import { ToggleService } from '../../services/toggle/toggle.service';


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  isCollapsed = false;

  constructor(private  serviceToggle:ToggleService) { }

  ngOnInit(): void {
    this.serviceToggle.updateStateSide$.subscribe((value)=>{
      this.isCollapsed = value;
    })
  }



}
