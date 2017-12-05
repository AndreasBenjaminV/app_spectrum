import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HomePage } from '../home/home';
import { ConfigurationPage } from '../configuration/configuration';
import { DashboardPage } from '../dashboard/dashboard';

@Component({
  selector: 'page-tabs-controller',
  templateUrl: 'tabs-controller.html'
})
export class TabsControllerPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  tab1Root: any = HomePage;
  tab2Root: any = ConfigurationPage;
  tab3Root: any = DashboardPage;
  constructor(public navCtrl: NavController) {
  }
  
}
