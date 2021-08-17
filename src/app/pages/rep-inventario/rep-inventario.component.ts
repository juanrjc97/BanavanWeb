import { Component, OnInit } from '@angular/core';
import { ChartDataSets, ChartType } from 'chart.js';
import { DatePipe } from '@angular/common';
import { RepRacimoSemanaService } from 'src/app/services/rep-semana/rep-racimo-semana/rep-racimo-semana.service';
import { LoteService } from '../../services/lote/lote.service';
import { Color } from 'ng2-charts';
@Component({
  selector: 'app-rep-inventario',
  templateUrl: './rep-inventario.component.html',
  styleUrls: ['./rep-inventario.component.css'],
})
export class RepInventarioComponent implements OnInit {
  date = null;
  listOfOption: Array<{ label: string; value: string }> = [];
  listOfTagOptions = [];
  listaOriginal : any= [];
  year = new Date().getFullYear();

  public lineChartData: ChartDataSets[] = [
    /*{ data: [65, 59, 80, 81, 56, 55, 40], label: 'Lote 1' },
    { data: [28, 48, 40, 19, 86, 27, 90], label: 'Lote 2' },
    { data: [180, 480, 770, 90, 750, 270, 400], label: 'Lote 3' },
    { data: [35, 200, 770, 90, 625, 270, 400], label: 'Lote 4' },
    { data: [35, 100, 770, 90, 122, 270, 550], label: 'Lote 5' },
    { data: [45, 300, 150, 90, 373, 270, 400], label: 'Lote 6' },
    { data: [35, 200, 300, 90, 224, 270, 400], label: 'Lote 7' },*/
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

  public lineChartOptions: any = {
    responsive: true,
  };

  public lineChartLegend = true;
  public lineChartType: ChartType = 'line';

  ngOnInit(): void {
    this.cargarReportesEnfundados();
    this.cargarLotes();
  }

  constructor(
    private RepRacimoSemanaService: RepRacimoSemanaService,
    public datepipe: DatePipe,
    private loteService: LoteService
  ) {}

  cargarReportesEnfundados(): void {
    this.RepRacimoSemanaService.cargarReporteCosechadoso().subscribe(
      (resp: any) => {
        let respuestaDataset = resp['dataset'];
        this.formatResponse(respuestaDataset);
        this.lineChartLabels = resp['semanas'];        
      },
      (error) => {
        console.log(error);
      }
    );
  }

  formatResponse(response: any) {
    let _lineChartData: Array<any> = new Array();
    let indice = 0;

    for (let objetos in response) {
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
    this.listaOriginal = _lineChartData;
  }

  cargarLotes() {
    this.loteService.cargarLotes().subscribe((resp: any) => {
      let lotesJson = resp.lotes;
      const children: Array<{ label: string; value: string }> = [];
      for (let i = 0; i < lotesJson.length; i++) {
        children.push({
          label: 'Lote ' + lotesJson[i].numero,
          value: lotesJson[i].numero,
        });
      }
      this.listOfOption = children;
    });
  }

  /**
   * Aqui recibiria el anio por el que desea filtrar.
   * Solicita de nuevo los datos
   */
  public filtrar_lote(): void {
    let lotesEscogidos: Array<any> = this.listOfTagOptions;
    let listaFiltro: Array<any> = new Array();
    console.log(lotesEscogidos);

    if (lotesEscogidos.length == 0) {
      this.lineChartData = this.listaOriginal;
    } else {
      let indice = 0;
      this.lineChartData = this.listaOriginal;
      for (let index = 0; index < this.lineChartData.length; index++) {
        console.log(this.lineChartData[index].label);
        let labelLine = this.lineChartData[index].label;
        if (labelLine != undefined) {
          var numeroLote = labelLine.replace(/[^0-9]/g, '');
          if (numeroLote.length>0 && lotesEscogidos.includes(numeroLote)) {
            listaFiltro[indice] = {
              data: this.lineChartData[index].data,
              label: this.lineChartData[index].label,
            };
            indice++;
          }
        }
      }
      console.log(listaFiltro);
      this.lineChartData = listaFiltro;
    }
  }
}
