import { Component } from '@angular/core';
import { ActionSheetController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public actionSheetCtrl: ActionSheetController, public alertCtrl: AlertController) {

  }

  showAlert() {
  const alert = this.alertCtrl.create({
    title: 'Nuevo amigo!',
    subTitle: 'Tu amigo, Obi Wan Kenobi, ¡acaba de aceptar tu solicitud de amistad!',
    buttons: ['OK']
    });
  alert.present();
  }

    openActionSheet(){
      console.log('abriendo');
        let actionsheet = this.actionSheetCtrl.create({
        title:"Escoger Album",
        buttons:[{
        text: 'Camera',
        handler: () => {
        console.log("Camera ");
        }
        },{
        text: 'Gallery',
        handler: function(){
        console.log("Galeria");
        }
        }]
        });
        actionsheet.present();
}
}
