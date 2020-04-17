import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.page.html',
  styleUrls: ['./alert.page.scss'],
})
export class AlertPage implements OnInit {

  title:string = 'Alert';

  constructor(private alertCtrl: AlertController) { }

  ngOnInit() {
  }

  async presentAlert() {
    const alert = await this.alertCtrl.create({
      header: 'Alert',
      subHeader: 'Subtitle',
      message: 'This is an alert message.',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Cancelar');
          }
        },
        {
          text: 'Ok',
          handler: (blah) => {
            console.log('Botón OK');
          }
        }
      ]
    });

    await alert.present();
  }


  async presentInput() {
    const input = await this.alertCtrl.create({
      header: 'Entrar Datos',
      subHeader: 'Rellene el formulario',
      inputs: [
        {
          name: 'txtNombre',
          type: 'text',
          placeholder: 'Entre su nombre'
        },
      ],
      buttons: [
        {
          text: 'Ok',
          cssClass: 'secondary',
          handler: (data) => {
            console.log('Confirm OK', data);
            this.title = data.txtNombre;
          }
        },
        {
          text: 'Cancelar',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel');
          }
        }
      ]
    });

    await input.present();
}

}
