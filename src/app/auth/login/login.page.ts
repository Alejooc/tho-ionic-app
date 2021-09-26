import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { LoginPageModule } from './login.module';
import { LoginModalPage } from "./loginmodal.page";

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(public modalController:ModalController) {
   }

 ngOnInit() {
  }
  async presentModal() {
    const modal = await this.modalController.create({
      component: LoginModalPage,
      cssClass: 'my-custom-class'
    });
    return await modal.present();
  }

  dismiss() {
     
  }

}
