import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.page.html',
  styleUrls: ['./payment.page.scss'],
})
export class PaymentPage implements OnInit {

  constructor(
    private alertCtrl: AlertController
  ) { }

  async showAlert() {
    await this.alertCtrl.create({
      header: "",
      message: "Your payment has been successful",
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
