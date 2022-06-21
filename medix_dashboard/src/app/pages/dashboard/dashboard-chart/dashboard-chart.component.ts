import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { Chart, registerables } from 'chart.js';

@Component({
  selector: 'app-dashboard-chart',
  templateUrl: './dashboard-chart.component.html',
  styleUrls: ['./dashboard-chart.component.scss'],
})
export class DashboardChartComponent implements OnInit, AfterViewInit {
  canvas: any;
  ctx: any;
  @ViewChild('mychart') mychart: any;
  @ViewChild('chart') chart: any;

  constructor() {
    Chart.register(...registerables);
  }

  ngOnInit() {}

  ngAfterViewInit(): void {
    this.canvas = this.mychart.nativeElement;
    this.ctx = this.canvas.getContext('2d');

    new Chart(this.ctx, {
      type: 'line',
      data: {
        datasets: [
          {
            label: 'Current Vallue',
            data: [0, 20, 40, 50],
            backgroundColor: 'rgb(115 185 243 / 65%)',
            borderColor: '#007ee7',
            fill: true,
          },
          {
            label: 'Invested Amount',
            data: [0, 20, 40, 60, 80],
            backgroundColor: '#47a0e8',
            borderColor: '#007ee7',
            fill: true,
          },
        ],
        labels: ['January 2019', 'February 2019', 'March 2019', 'April 2019'],
      },
    });
  }
}
