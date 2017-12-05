import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public event = {
    month: '1990-02-19',
    timeStarts: '07:43',
    timeEnds: '1990-02-20'
  }
  constructor(public navCtrl: NavController) {
  }
  onViewLoad(){
  }
}