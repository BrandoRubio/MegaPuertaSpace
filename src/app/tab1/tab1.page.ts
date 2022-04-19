import { Component } from '@angular/core';
import { ConnectESPService } from '../services/connect-esp.service';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor(public sendSignal: ConnectESPService,public storage: Storage) {}
  ipPuerta1
  ipPuerta2
  ipPuerta3
  ipPuerta4

  estado1 = "Abierta"
  colorP1 = ""
  estado2 = "Abierta"
  colorP2 = ""
  estado3 = "Abierta"
  colorP3 = ""
  estado4 = "Abierta"
  colorP4 = ""
  //Abrir puertas
  abrirESP1(){
    this.sendSignal.post(this.ipPuerta1+'/openDoor');
    //console.log('try to open ESP '+ this.ipPuerta1);
  }
  abrirESP2(){
    this.sendSignal.post(this.ipPuerta2+'/openDoor');
    //console.log('try to open ESP '+ this.ipPuerta2);
  }
  abrirESP3(){
    this.sendSignal.post(this.ipPuerta3+'/openDoor');
    //console.log('try to open ESP '+ this.ipPuerta3);
  }
  abrirESP4(){
    this.sendSignal.post(this.ipPuerta4+'/openDoor');
    //console.log('try to open ESP '+ this.ipPuerta4);
  }
  //Apertura y cierre automático
  abrirCerrarESP1(){
    this.sendSignal.post(this.ipPuerta1+'/openCloseDoor');
  }
  abrirCerrarESP2(){
    this.sendSignal.post(this.ipPuerta2+'/openCloseDoor');
  }
  abrirCerrarESP3(){
    this.sendSignal.post(this.ipPuerta3+'/openCloseDoor');
  }
  abrirCerrarESP4(){
    this.sendSignal.post(this.ipPuerta4+'/openCloseDoor');
  }
  //Cerrar puertas
  cerrarESP1(){
    this.sendSignal.post(this.ipPuerta1+'/closeDoor');
  }
  cerrarESP2(){
    this.sendSignal.post(this.ipPuerta2+'/closeDoor');
  }
  cerrarESP3(){
    this.sendSignal.post(this.ipPuerta3+'/closeDoor');
  }
  cerrarESP4(){
    this.sendSignal.post(this.ipPuerta4+'/closeDoor');
  }
  ngOnInit(){
    if(this.estado1=="Abierta"){
      this.colorP1 = "success"
    }else{
      this.colorP1 = "danger"
    }
    if(this.estado2=="Abierta"){
      this.colorP2 = "success"
    }else{
      this.colorP3 = "danger"
    }
    if(this.estado3=="Abierta"){
      this.colorP3 = "success"
    }else{
      this.colorP4 = "danger"
    }
    if(this.estado4=="Abierta"){
      this.colorP4 = "success"
    }else{
      this.colorP1 = "danger"
    }
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
}
