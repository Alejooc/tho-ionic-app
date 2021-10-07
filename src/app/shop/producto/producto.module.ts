import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProductoPageRoutingModule } from './producto-routing.module';

import { ProductoPage } from './producto.page';
import { RelatedComponent } from "./related/related.component";
import { SliderimgComponent } from "./sliderimg/sliderimg.component";
import { CategoryPage} from "../category/category.page";
import { SocialSharing } from '@ionic-native/social-sharing/ngx';
import { CantitemsComponent } from "../cart/cantitems/cantitems.component";
import { Base64 } from '@ionic-native/base64/ngx';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProductoPageRoutingModule
  ],
  providers: [CategoryPage,SocialSharing,Base64],
  declarations: [ProductoPage,SliderimgComponent,RelatedComponent,CantitemsComponent]
})
export class ProductoPageModule {}
