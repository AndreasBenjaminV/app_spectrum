import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import * as HighCharts from 'highcharts';

@Component({
  selector: 'page-dashboard',
  templateUrl: 'dashboard.html'
})
export class DashboardPage {
  constructor(public navCtrl: NavController) {
  }
  ionViewDidLoad() {
    /*Datos historicos*/
    var myChart = HighCharts.chart('container', {
      chart: {
        type: 'spline',
        color: 'black'
      },
      title: {
        text: 'Temperatura'
      },
      xAxis: {
        title: {
          text: 'Días'
        }
      },
      yAxis: {
        title: {
          text: 'Temperatura'
        }
      },
      series: [{
        name: 'Temperatura',
        data: [31, 35, 33, 31, 35, 33, 31, 35, 33, 31, 35, 33, 31, 35, 33]
      }]
    });

    var myChart2 = HighCharts.chart('container2', {
      chart: {
        type: 'spline',
        color: 'red'
      },
      title: {
        text: 'Humedad'
      },
      xAxis: {
        title: {
          text: 'Días'
        }
      },
      yAxis: {
        title: {
          text: 'Temperatura'
        }
      },
      series: [{
        name: 'Temperatura',
        colors: 'black',
        data: [31, 35, 33, 31, 35, 33, 31, 35, 33, 31, 35, 33, 31, 35, 33]
      }]
    });

    var myChart2 = HighCharts.chart('container2', {
      chart: {
        type: 'spline',
      },
      title: {
        text: 'Humedad'
      },
      xAxis: {
        title: {
          text: 'Días'
        }
      },
      yAxis: {
        title: {
          text: 'Humedad'
        }
      },
      series: [{
        name: 'Humedad',
        data: [31, 35, 33, 31, 35, 33, 31, 35, 33, 31, 35, 33, 31, 35, 33]
      }]
    });

    var myChart3 = HighCharts.chart('container3', {
      chart: {
        type: 'spline'
      },
      title: {
        text: 'Humedad - tierra'
      },
      xAxis: {
        title: {
          text: 'Días'
        }
      },
      yAxis: {
        title: {
          text: 'Humedad - tierra'
        }
      },
      series: [{
        name: 'Humedad - tierra',
        data: [31, 35, 33, 31, 35, 33, 31, 35, 33, 31, 35, 33, 31, 35, 33]
      }]
    });

    var myChart4 = HighCharts.chart('container4', {
      chart: {
        type: 'spline'
      },
      title: {
        text: 'Riego'
      },
      xAxis: {
        title: {
          text: 'Días'
        }
      },
      yAxis: {
        title: {
          text: 'Riego'
        }
      },
      series: [{
        name: 'Riego',
        data: [35, 33, 31, 35, 33]
      }]
    });
  }

  /*Sensores en tiempo real*/
  public event = {
    month: '1990-02-19',
    timeStarts: '07:43',
    timeEnds: '1990-02-20'
  }
}
