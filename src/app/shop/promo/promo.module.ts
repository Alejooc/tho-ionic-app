import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PromoPageRoutingModule } from './promo-routing.module';

import { PromoPage } from './promo.page';
import {  CategoriesComponent} from "./categories/categories.component";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PromoPageRoutingModule
  ],
  declarations: [PromoPage,CategoriesComponent]
})
export class PromoPageModule {}
