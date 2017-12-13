import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import * as HighCharts from 'highcharts';
import { AngularFireDatabase } from 'angularfire2/database';
import { FirebaseListObservable } from 'angularfire2/database';
import { LedItemRed } from '../../models/led-item-Red/led-item-red.interface';
import { TemperatureItem } from '../../models/temperature-item/temperature-item.interface.ts';

@Component({
  selector: 'page-dashboard',
  templateUrl: 'dashboard.html'
})
export class DashboardPage {

  temperatureItem = {} as TemperatureItem
  temperatureItemRef$: FirebaseListObservable<TemperatureItem[]>

  constructor(public navCtrl: NavController,private database: AngularFireDatabase) {
  this.temperatureItemRef$ = this.database.list('temperature-list');
  }

  ionViewDidLoad() {
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
        data: [31, 30, 33, 32, 28, 29, 25, 29, 33, 31, 35, 37, 31, 35, 34]
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
        data: [52, 50, 48, 55, 62, 59, 62, 63, 63, 49, 52, 55, 50, 59, 65]
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
      series: [{//0 sumergido en agua, a 1023 en el aire
        name: 'Humedad - tierra',
        data: [480, 488, 550, 600, 690, 770, 785, 792, 795, 800, 803, 815, 821, 832, 833]
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
          text: 'Semanas'
        }
      },
      yAxis: {
        title: {
          text: 'Riego'
        }
      },
      series: [{
        name: 'Riego',
        data: [3, 1, 2, 1, 0]
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
