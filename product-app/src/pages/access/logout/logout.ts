import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import {LoginPage}      from '../../access/login/login';

/*
  Generated class for the Logout page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-logout',
  templateUrl: 'logout.html'
})
export class LogoutPage {

  constructor(public navCtrl: NavController,public storage: Storage) {}



  ionViewDidLoad() {
    this.logout();
    console.log('Hello LogoutPage Page');
  }

  logout() {
    
    this.storage.remove('USER');
    this.navCtrl.setRoot(LoginPage);
  }

}
