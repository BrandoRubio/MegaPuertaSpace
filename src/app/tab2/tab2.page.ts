import { Component } from '@angular/core';
import { Storage } from '@ionic/storage';
import { ConnectESPService } from '../services/connect-esp.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  ipPuerta1;
  ipPuerta2;
  ipPuerta3;
  ipPuerta4;
  darkMode = false;
  constructor(public storage: Storage, public checkESP: ConnectESPService,) {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');
    this.darkMode = prefersDark.matches;
  }
  changeMode() {
    this.darkMode = !this.darkMode;
    document.body.classList.toggle('dark');
  }
  saveIP1(ip){
    this.checkESP.check(ip+'/check');
    console.log(ip);
  }
  saveIP2(ip){
    this.checkESP.check(ip+'/check');
    console.log(ip);
  }
  saveIP3(ip){
    this.checkESP.check(ip+'/check');
    console.log(ip);
  }
  saveIP4(ip){
    this.checkESP.check(ip+'/check');
    console.log(ip);
  }
  ionViewDidEnter() {
    this.storage.get('ippuerta1').then(res => {
      this.ipPuerta1 = res;
    });
    this.storage.get('ippuerta2').then(res => {
      this.ipPuerta2 = res;
    });
    this.storage.get('ippuerta3').then(res => {
      this.ipPuerta3 = res;
    });
    this.storage.get('ippuerta4').then(res => {
      this.ipPuerta4 = res;
    });
  }

  ionViewDidLeave() {
    this.storage.set('ippuerta1', this.ipPuerta1);
    this.storage.set('ippuerta2', this.ipPuerta2);
    this.storage.set('ippuerta3', this.ipPuerta3);
    this.storage.set('ippuerta4', this.ipPuerta4);
  }

}
