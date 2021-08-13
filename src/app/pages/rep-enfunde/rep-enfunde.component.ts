import { Component, OnInit } from '@angular/core';
import { ChartDataSets, ChartType } from 'chart.js';
import { DatePipe } from '@angular/common';
import { RepEnfundadoSemanaService } from 'src/app/services/rep-semana/rep-enfundado-semana/rep-enfundado-semana.service';
import { Color } from 'ng2-charts';

@Component({
  selector: 'app-rep-enfunde',
  templateUrl: './rep-enfunde.component.html',
  styleUrls: ['./rep-enfunde.component.css'],
})
export class RepEnfundeComponent implements OnInit {
  date = null;

  public lineChartData: ChartDataSets[] = [
    { data: [65, 59, 80, 81, 56, 55, 40], label: 'Lote 1' },
    { data: [28, 48, 40, 19, 86, 27, 90], label: 'Lote 2' },
    { data: [ 480, 0,,,, 0, 150 ,,,,, 150 ,,, 12 , 25,32], label: 'Lote 3' },
    { data: [35, 200, 770, 90, 625, 270, 400], label: 'Lote 4' },
    { data: [35, 100, 770, 90, 122, 270, 550], label: 'Lote 5' },
    { data: [45, 300, 150, 90, 373, 270, 400], label: 'Lote 6' },
    { data: [35, 200, 300, 90, 224, 270, 400], label: 'Lote 7' },
  ];

  public lineChartOptions: any = {
    responsive: true,
  };

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
    this.cargarReportesEnfundados();
  }

  constructor(
    private RepEnfundadoSemanaService: RepEnfundadoSemanaService,
    public datepipe: DatePipe
  ) {}

  cargarReportesEnfundados(): void {
    this.RepEnfundadoSemanaService.cargarReporteEnfundado().subscribe(
      (resp: any) => {
        //this.lineChartData = resp;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  cargarSemanas(): void {
    let semanasL: Array<any> = new Array();
    semanasL.push(0);
    semanasL.push(3);
    semanasL.push(2);
    semanasL.push(8);
    semanasL.push(18);
    semanasL.push(21);
    semanasL.push(30);
    for (let index = 0; index < semanasL.length ; ++index) {
      this.lineChartLabels[index] = semanasL[index];
    }
  }

  /**
   * Aqui debe ir funcion por la que cada vez que haga un filtro,
   * se actualice el array ChartDataSets[].
   * Deberia tambien recibir las semanas de ese anio.
   * @param result Envio del anio por filtrar.
   */
  onChange(result: Date): void {
    let latest_date = this.datepipe.transform(result, 'yyyy');
    if (latest_date == null) latest_date = '2021';
    console.log('onChange: ' + latest_date);
  }

  /**
   * Aqui recibiria el anio por el que desea filtrar.
   * Solicita de nuevo los datos
   */
  public randomize(): void {
    let _lineChartData: Array<any> = new Array(this.lineChartData.length);

    for (let i = 0; i < this.lineChartData.length; i++) {
      let lengthDataSpecific = this.lineChartData[i].data?.length;
      if (lengthDataSpecific != undefined) {
        _lineChartData[i] = {
          data: new Array(lengthDataSpecific),
          label: this.lineChartData[i].label,
        };
        for (let j = 0; j < lengthDataSpecific; j++) {
          _lineChartData[i].data[j] = Math.floor(Math.random() * 100 + 1);
          console.log(_lineChartData[i].data[j]);
        }
      }
    }

    this.lineChartData = _lineChartData;
    console.log(_lineChartData);
  }
}
