import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CategoryPageRoutingModule } from './category-routing.module';

import { CategoryPage } from './category.page';
import { RelatedComponent } from "../producto/related/related.component";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CategoryPageRoutingModule
  ],
  providers:[],
  declarations: [CategoryPage,RelatedComponent],
  exports:[CategoryPage]
})
export class CategoryPageModule {}
