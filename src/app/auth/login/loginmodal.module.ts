import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginModalPage } from "./loginmodal.page";
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [LoginModalPage],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule
  ]
})
export class LoginmodalModule { }
