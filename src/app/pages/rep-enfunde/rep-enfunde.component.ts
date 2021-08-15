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
  public latest_date : any = 0;
  public currentYear: number = 0;

  public lineChartData: ChartDataSets[] = [
    /*{ data: [65, 59, 80, 81, 56, 55, 40], label: 'Lote 1' },
    { data: [28, 48, 40, 19, 86, 27, 90], label: 'Lote 2' },
    { data: [ 480, 0,,,, 0, 150 ,,,,, 150 ,,, 12 , 25,32], label: 'Lote 3' },
    { data: [35, 200, 770, 90, 625, 270, 400], label: 'Lote 4' },
    { data: [35, 100, 770, 90, 122, 270, 550], label: 'Lote 5' },
    { data: [45, 300, 150, 90, 373, 270, 400], label: 'Lote 6' },
    { data: [35, 200, 300, 90, 224, 270, 400], label: 'Lote 7' },*/
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
    this.currentYear = new Date().getFullYear();
    this.cargarReportesEnfundados(this.currentYear); //Cambiar al anio actual
  }

  constructor(
    private RepEnfundadoSemanaService: RepEnfundadoSemanaService,
    public datepipe: DatePipe
  ) {}

  cargarReportesEnfundados(year: number): void {
    this.RepEnfundadoSemanaService.cargarReporteEnfundado(year).subscribe(
      (resp: any) => {
        //this.lineChartData = resp;
        let respuestaDataset  = resp["dataset"];
        this.formatResponse(respuestaDataset);
        this.lineChartLabels = resp["semanas"];
      },
      (error) => {
        console.log(error);
      }
    );
  }

  formatResponse(response: any){
    let _lineChartData: Array<any> = new Array();
    let indice = 0;

    for (let objetos in response){
      let objeto = response[objetos];
      let data = Object.values(objeto['data']);
      let label = objeto['label'];

      _lineChartData[indice] = {
        data: data,
        label: label,
      };
      indice++;
    }
    this.lineChartData = _lineChartData;
  }

  /**
   * Aqui debe ir funcion por la que cada vez que haga un filtro,
   * se actualice el array ChartDataSets[].
   * Deberia tambien recibir las semanas de ese anio.
   * @param result Envio del anio por filtrar.
   */
  onChange(result: Date): void {
    this.latest_date = this.datepipe.transform(result, 'yyyy');
    //this.latest_date = anio_escogido != null ? anio_escogido : this.currentYear;
    if (this.latest_date == null) this.latest_date = this.currentYear;
    //console.log('onChange: ' + latest_date);
  }

  /**
   * Aqui recibiria el anio por el que desea filtrar.
   * Solicita de nuevo los datos
   */
  public filtro_anio(): void {
    this.cargarReportesEnfundados(this.latest_date);
  }
}
