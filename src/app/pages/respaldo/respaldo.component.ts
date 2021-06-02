import { Component, OnInit } from '@angular/core';
import { NzButtonSize } from 'ng-zorro-antd/button';

@Component({
  selector: 'app-respaldo',
  templateUrl: './respaldo.component.html',
  styleUrls: ['./respaldo.component.css'],
})
export class RespaldoComponent implements OnInit {
  size: NzButtonSize = 'large';
  constructor() {}

  ngOnInit(): void {}
}
