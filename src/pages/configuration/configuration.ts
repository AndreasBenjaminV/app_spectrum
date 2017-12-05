import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AngularFireDatabase } from 'angularfire2/database';
import { FirebaseListObservable } from 'angularfire2/database';
import { LedItem } from '../../models/led-item/led-item.interface';
import { TimerItem } from '../../models/timer-item/timer-item.interface';

@Component({
  selector: 'page-configuration',
  templateUrl: 'configuration.html'
})
export class ConfigurationPage {
  //new object

  timerItem = {} as TimerItem
  timerItemRef$: FirebaseListObservable<TimerItem[]>

  ledItem = {} as LedItem
  ledItemRef$: FirebaseListObservable<LedItem[]>

  timerListRef$: FirebaseListObservable<TimerItem[]>

  constructor(public navCtrl: NavController,private database: AngularFireDatabase) {
    this.ledItemRef$ = this.database.list('led-list');
    this.timerItemRef$ = this.database.list('timer-list');
    this.timerListRef$ = this.database.list('timer-list');
 
  }

  

  addLedItem(ledItem: LedItem){
    // log the result out to the console
	this.ledItemRef$.push({
		itemNumber: Number(this.ledItem.itemNumber)
	});
  }

  addTimerItem(timerItem: TimerItem){
     

    this.timerItemRef$.push({
      itemHourOn: Number(this.timerItem.itemHourOn),
      itemHourOff: Number(24 - this.timerItem.itemHourOn)
    });
  }
}
