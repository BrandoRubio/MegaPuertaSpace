import { Injectable } from '@angular/core';
//import { HttpClient } from '@angular/common/http';
//import { HTTP } from '@ionic-native/http/ngx';
import { Http } from '@capacitor-community/http';
import { ToastController } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { LoadingController } from '@ionic/angular';

@Injectable({
  providedIn: 'root',
})
export class ConnectESPService {
  constructor(
    public loadingController: LoadingController,
    public storage: Storage,
    public toastController: ToastController
  ) {}
  post(ip, door) {
    this.simpleLoader(door);
    Http.request({
      method: 'GET',
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, POST, OPTIONS, HEAD',
        'Access-Control-Allow-Headers':
          'Authorization, Origin, X-Requested-With, Content-Type, Accept',
      },
      params: {},
      url: 'http://' + ip,
    })
      .then((response) => {
        this.dismissLoader();
        this.showToast(door + ': ' + response.data);
      })
      .catch((response) => {
        this.dismissLoader();
        console.log('response status ' + response.status);
        this.showToast('No se ha encontrado el dispositivo de ' + door);
      });
  }

  check(ip, p) {
    this.simpleLoader(ip);
    Http.request({
      method: 'GET',
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, POST, OPTIONS, HEAD',
        'Access-Control-Allow-Headers':
          'Authorization, Origin, X-Requested-With, Content-Type, Accept',
      },
      params: {},
      url: 'http://' + ip + '/check',
    })
      .then((response) => {
        this.dismissLoader();
        this.showToast(response.data);
        this.storage.set(p, ip);
      })
      .catch(() => {
        this.dismissLoader();
        this.showToast('No se ha encontrado la IP de este dispositivo');
      });
  }
  async showToast(texto) {
    const toast = await this.toastController.create({
      message: texto,
      duration: 2000,
    });
    toast.present();
  }
  //cargar el panel loading
  simpleLoader(puerta) {
    this.loadingController
      .create({
        message: 'Conectando a ' + puerta,
        duration: 21000,
        cssClass: 'loader-css-class',
      })
      .then((response) => {
        response.present();
      });
  }

  //cerrar el panel loading
  dismissLoader() {
    this.loadingController.dismiss();
  }
}
