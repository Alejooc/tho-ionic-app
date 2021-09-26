import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TopbarPageRoutingModule } from './topbar-routing.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TopbarPageRoutingModule
  ],
  declarations: []
})
export class TopbarPageModule {}
