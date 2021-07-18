import { Component, OnInit } from '@angular/core';
import { ChartDataSets, ChartType } from 'chart.js';
import { Color, Label } from 'ng2-charts';

@Component({
  selector: 'app-rep-enfunde',
  templateUrl: './rep-enfunde.component.html',
  styleUrls: ['./rep-enfunde.component.css'],
})
export class RepEnfundeComponent implements OnInit {
  public lineChartData: ChartDataSets[] = [
    { data: [65, 59, 80, 81, 56, 55, 40], label: 'Lote 1' },
    { data: [28, 48, 40, 19, 86, 27, 90], label: 'Lote 2' },
    { data: [180, 480, 770, 90, 1000, 270, 400], label: 'Lote 3' },
    { data: [35, 200, 770, 90, 1000, 270, 400], label: 'Lote 4' },
    { data: [35, 100, 770, 90, 1000, 270, 400], label: 'Lote 5' },
    { data: [45, 300, 150, 90, 1000, 270, 400], label: 'Lote 6' },
    { data: [35, 200, 300, 90, 1000, 270, 400], label: 'Lote 7' },
  ];

  public lineChartLabels: Array<any> = [];
  public lineChartColors: Color[] = [
    {
      borderColor: 'blue',
      backgroundColor: 'rgba(0,0,0,0.0)',
      pointBorderColor: '#000',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)',
    },
    {
      borderColor: 'red',
      backgroundColor: 'rgba(0,0,0,0.0)',
      pointBorderColor: '#000',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)',
    },
    {
      borderColor: 'orange',
      backgroundColor: 'rgba(0,0,0,0.0)',
      pointBorderColor: '#000',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)',
    },
    {
      borderColor: 'brown',
      backgroundColor: 'rgba(0,0,0,0.0)',
      pointBorderColor: '#000',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)',
    },
    {
      borderColor: 'green',
      backgroundColor: 'rgba(0,0,0,0.0)',
      pointBorderColor: '#000',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)',
    },
    {
      borderColor: 'yellow',
      backgroundColor: 'rgba(0,0,0,0.0)',
      pointBorderColor: '#000',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)',
    },
    {
      borderColor: 'black',
      backgroundColor: 'rgba(0,0,0,0.0)',
      pointBorderColor: '#000',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)',
    },
  ];

  public lineChartLegend = true;
  public lineChartType: ChartType = 'line';

  ngOnInit(): void {
    this.cargarSemanas();
  }

  cargarSemanas(): void {
    for (let index = 0; index < 10; ++index) {
      this.lineChartLabels[index] = index + 1;
    }
  }
}
