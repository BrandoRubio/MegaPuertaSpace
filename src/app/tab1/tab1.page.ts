import { Component } from '@angular/core';
import { ConnectESPService } from '../services/connect-esp.service';
import { Storage } from '@ionic/storage';
import { Network } from '@capacitor/network';
import { PluginListenerHandle } from '@capacitor/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
})
export class Tab1Page {
  ipPuerta1;
  ipPuerta2;
  ipPuerta3;
  ipPuerta4;
  networkStatus: any;
  networkListener: PluginListenerHandle;
  wifiMode = '';
  constructor(public sendSignal: ConnectESPService, public storage: Storage) {}
  //Abrir puertas
  async esp1(method) {
    if ((await this.getNetWorkStatus()) === 'wifi') {
      this.sendSignal.post(this.ipPuerta1 + '/' + method, 'Puerta 1');
    }else{
      this.sendSignal.showToast('No está conectado a una red Wi-Fi');
    }
    //console.log('try to open esp '+ this.ipPuerta1);
  }
  async esp2(method) {
    if ((await this.getNetWorkStatus()) === 'wifi') {
      this.sendSignal.post(this.ipPuerta2 + '/' + method, 'Puerta 2');
    }else{
      this.sendSignal.showToast('No está conectado a una red Wi-Fi');
    }
    //console.log('try to open esp '+ this.ipPuerta2);
  }
  async esp3(method) {
    if ((await this.getNetWorkStatus()) === 'wifi') {
      this.sendSignal.post(this.ipPuerta3 + '/' + method, 'Puerta 3');
    }else{
      this.sendSignal.showToast('No está conectado a una red Wi-Fi');
    }
    //console.log('try to open esp '+ this.ipPuerta3);
  }
  async esp4(method) {
    if ((await this.getNetWorkStatus()) === 'wifi') {
      this.sendSignal.post(this.ipPuerta4 + '/' + method, 'Puerta 4');
    }else{
      this.sendSignal.showToast('No está conectado a una red Wi-Fi');
    }
    //console.log('try to open esp '+ this.ipPuerta4);
  }
  // eslint-disable-next-line @angular-eslint/use-lifecycle-interface
  ngOnInit() {
    this.networkListener = Network.addListener(
      'networkStatusChange',
      (status) => {
        this.networkStatus = status;
        console.log('Network status changed', status);
      }
    );
  }

  async getNetWorkStatus() {
    this.networkStatus = await Network.getStatus();
    //this.wifiMode = this.networkStatus.connectionType
    return String(this.networkStatus.connectionType);
  }

  endNetworkListener() {
    if (this.networkListener) {
      this.networkListener.remove();
    }
  }

  // eslint-disable-next-line @angular-eslint/use-lifecycle-interface
  ngOnDestroy() {
    if (this.networkListener) {
      this.networkListener.remove();
    }
  }
  ionViewDidEnter() {
    this.storage.get('ippuerta1').then((res) => {
      this.ipPuerta1 = res;
    });
    this.storage.get('ippuerta2').then((res) => {
      this.ipPuerta2 = res;
    });
    this.storage.get('ippuerta3').then((res) => {
      this.ipPuerta3 = res;
    });
    this.storage.get('ippuerta4').then((res) => {
      this.ipPuerta4 = res;
    });
  }
}
