import { Component, OnInit } from '@angular/core';
import { ToggleService } from '../../services/toggle/toggle.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  
  isCollapsed : boolean = false;

  constructor(private serviceToggle: ToggleService) { }

  ngOnInit(): void {
  }

  changeCollapsed(){
    this.isCollapsed = !this.isCollapsed;
    this.serviceToggle.changeStateSide(this.isCollapsed);
  }


}
