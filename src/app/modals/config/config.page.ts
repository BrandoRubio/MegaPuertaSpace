import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams, NavController } from '@ionic/angular';
import { ConnectESPService } from '../../services/connect-esp.service';
import { Storage } from '@ionic/storage';
@Component({
  selector: 'app-config',
  templateUrl: './config.page.html',
  styleUrls: ['./config.page.scss'],
})
export class ConfigPage implements OnInit {

  ipPuerta1;
  ipPuerta2;
  ipPuerta3;
  ipPuerta4;
  dataReturned: any;
  constructor(
    public storage: Storage,
    public checkESP: ConnectESPService,
    private modalController: ModalController,
    private navParams: NavParams) {
  }

  checkIP(ip,p){
    this.checkESP.check(ip,p);
  }
  closeModal() {
    this.modalController.dismiss();
  }
  ngOnInit() {
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

}
