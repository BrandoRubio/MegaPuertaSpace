import { Injectable } from '@angular/core';
//import { HttpClient } from '@angular/common/http';
//import { HTTP } from '@ionic-native/http/ngx';
import { Http } from '@capacitor-community/http';
import { ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class ConnectESPService {

  constructor(public toastController: ToastController) { }
/*
  post(ip){
    const options = {
      url: ''+ip,
      headers: {},
      params: { size: 'XL' },
    };

    const response: HttpResponse = await Http.get(options);
  }

  post1(ip){
    return new Promise(resolve=>{
      console.log('try to get ESP32 '+ ip);
      this.http.get('http://'+ip).subscribe(data=>{
          resolve(data);
          console.log('data: '+data);
      },error=>{
        console.log(error);
      });
    });
  }
*/
  post(ip){
    Http.request({

      method: 'GET',
      headers: {'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods' : 'GET, POST, OPTIONS, HEAD',
                'Access-Control-Allow-Headers' : 'Authorization, Origin, X-Requested-With, Content-Type, Accept'
    },
      params:{},
      url : 'http://'+ip
    });
  }

  check(ip){
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
      this.showToast(response.data);
    })
    .catch(response => {
      // prints 403
      console.log('response status ' + response.status);
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
  /*
  post(ip){
    console.log('try to get ESP32 '+ ip);
    this.http.get('http://'+ip, {}, {}).then(data => {

      console.log(data.status);
      console.log(data.data); // data received by server
      console.log(data.headers);

    })
    .catch(error => {

      console.log(error.status);
      console.log(error.error); // error message as string
      console.log(error.headers);

    });
  }*/
}
