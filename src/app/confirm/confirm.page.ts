import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-confirm',
  templateUrl: './confirm.page.html',
  styleUrls: ['./confirm.page.scss'],
})
export class ConfirmPage implements OnInit {

  constructor(
    private alertCtrl: AlertController
  ) { }

  async showAlert() {
    await this.alertCtrl.create({
      header: "Booking Successful",
      cssClass: 'my-custom-class',
      message: "Your booking has been confirmed!<br>Driver will pickup you in 2 minutes.",
      // inputs:[
      //   { type: 'text', name: 'promo', placeholder: "promo code"}
      // ],
      buttons: [
        {
          text: "OK", handler: (res) => {
            console.log(res.promo);
          }
        },
        {
          text: "Cancel"
        }
      ]
    }).then(res => res.present());
  }

  ngOnInit() {
  }


}

