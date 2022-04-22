import { Component } from '@angular/core';
import { ConnectESPService } from '../services/connect-esp.service';
import { ModalController } from '@ionic/angular';
import { ConfigPage } from '../modals/config/config.page';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
})
export class Tab2Page {
  passwordSp = 'ARSpace';
  passwordCh = '';
  darkMode = false;
  constructor(
    public checkESP: ConnectESPService,
    public modalController: ModalController
  ) {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');
    this.darkMode = prefersDark.matches;
  }
  changeMode() {
    this.darkMode = !this.darkMode;
    document.body.classList.toggle('dark');
  }
  ionViewDidEnter() {
    this.passwordCh = '';
  }

  checkPassword() {
    if (this.passwordCh === '') {
      this.checkESP.showToast('Ingresa la palabra clave');
    } else if (this.passwordCh === this.passwordSp) {
      this.checkESP.showToast('La palabra clave es correcta');
      this.openModal();
    } else {
      this.checkESP.showToast('Palabra clave incorrecta');
    }
  }

  async openModal() {
    const modal = await this.modalController.create({
      component: ConfigPage,
    });

    modal.onDidDismiss().then(() => {
      this.passwordCh = '';
    });

    return await modal.present();
  }
  /*
  async presentAlert() {
    const alert  = await this.alertCtrl.create({
    header: 'Configuración',
    message: 'Ingresa la clave de seguridad para realizar ajustes en las IP de los dispositivos',
    backdropDismiss: false,
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

  ionViewWillLeave() {
    this.storage.set('ippuerta1', this.ipPuerta1);
    this.storage.set('ippuerta2', this.ipPuerta2);
    this.storage.set('ippuerta3', this.ipPuerta3);
    this.storage.set('ippuerta4', this.ipPuerta4);
  }*/
}
