import { Component, OnInit } from '@angular/core';
import { ToggleService } from './services/toggle/toggle.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isCollapsed = false;


}
