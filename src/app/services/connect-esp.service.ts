import { Injectable } from '@angular/core';
//import { HttpClient } from '@angular/common/http';
//import { HTTP } from '@ionic-native/http/ngx';
import { Http } from '@capacitor-community/http';
import { ToastController } from '@ionic/angular';
import { Storage } from '@ionic/storage';

@Injectable({
  providedIn: 'root'
})
export class ConnectESPService {

  constructor(public storage: Storage, public toastController: ToastController) { }
  post(ip, door){
    Http.request({

      method: 'GET',
      headers: {'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods' : 'GET, POST, OPTIONS, HEAD',
                'Access-Control-Allow-Headers' : 'Authorization, Origin, X-Requested-With, Content-Type, Accept'
    },
      params:{},
      url : 'http://'+ip
    })
    .then(response => {
      // prints 200
      console.log('response data: ' + response.data);
      this.showToast(door + ': ' +response.data);
    })
    .catch(response => {
      // prints 403
      console.log('response status ' + response.status);
      this.showToast('No se ha encontrado el dispositivo de '+ door);
    });
  }

  check(ip,p){
    Http.request({

      method: 'GET',
      headers: {'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods' : 'GET, POST, OPTIONS, HEAD',
                'Access-Control-Allow-Headers' : 'Authorization, Origin, X-Requested-With, Content-Type, Accept'
    },
      params:{},
      url : 'http://'+ip+'/check'
    })
    .then(response => {
      // prints 200
      //console.log('response data: ' + response.data);
      this.showToast(response.data);
      this.storage.set(p, ip);
    })
    .catch(response => {
      // prints 403
      //console.log('response status ' + response.status);
      this.showToast('No se ha encontrado la IP de este dispositivo');
    });
  }
  async showToast(texto) {
    const toast = await this.toastController.create({
      message: texto,
      duration: 2000
    });
    toast.present();
  }
}
