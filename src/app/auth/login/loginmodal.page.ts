import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ParamMap, Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-modal-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginModalPage implements OnInit {

  constructor(public modalController:ModalController,public router :Router) {
    
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
  dismiss(){
    this.modalController.dismiss({
      'dismissed': true
    });
    this.router.navigate(['home']);

  }
}
