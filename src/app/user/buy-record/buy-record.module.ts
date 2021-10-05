import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BuyRecordPageRoutingModule } from './buy-record-routing.module';

import { BuyRecordPage } from './buy-record.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BuyRecordPageRoutingModule
  ],
  declarations: [BuyRecordPage]
})
export class BuyRecordPageModule {}
