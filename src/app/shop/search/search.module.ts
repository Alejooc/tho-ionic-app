import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IonicModule } from '@ionic/angular';

import { SearchPageRoutingModule } from './search-routing.module';

import { SearchPage } from './search.page';
import { FormsModule,ReactiveFormsModule } from "@angular/forms";


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SearchPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [SearchPage]
})
export class SearchPageModule {}
