import { Component } from '@angular/core';
import { Storage } from '@ionic/storage';
import { ConnectESPService } from '../services/connect-esp.service';
import { AlertController } from '@ionic/angular';

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
  password = 'Space';
  constructor(public storage: Storage, public checkESP: ConnectESPService,public alertCtrl: AlertController) {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');
    this.darkMode = prefersDark.matches;
  }
  changeMode() {
    this.darkMode = !this.darkMode;
    document.body.classList.toggle('dark');
  }
  checkIP(ip,p){
    this.checkESP.check(ip,p);
  }
  ionViewDidEnter() {
    //this.presentAlert();
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
  async presentAlert() {
    const alert  = await this.alertCtrl.create({
    header: 'Configuración',
    message: 'Ingresa la clave de seguridad para realizar ajustes en las IP de los dispositivos',
    backdropDismiss: true,
    inputs: [
      {
        name: 'clave',
        type: 'password',
        placeholder: 'clave',
      }
    ],
    buttons: [{
      text: 'Cancelar',
      role: 'cancel',
      cssClass: 'secondary',
      id: 'cancel-button',
      handler: (blah) => {
        console.log('Cerrar');
      }
    },{
        text: 'Entrar',
        handler: (data) => {
          if (data.clave !== this.password) {
            this.checkESP.showToast('Clave incorrecta!');
            // DON'T CLOSE THE ALERT
          }else{

          }
        }
      },
    ],
  });
  await alert.present();
  }
/*
  ionViewWillLeave() {
    this.storage.set('ippuerta1', this.ipPuerta1);
    this.storage.set('ippuerta2', this.ipPuerta2);
    this.storage.set('ippuerta3', this.ipPuerta3);
    this.storage.set('ippuerta4', this.ipPuerta4);
  }*/
}
