import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';
import { TopbarPage} from "../topbar/topbar.page";
import { HomePageRoutingModule } from './home-routing.module';
import { SliderimgComponent } from "./sliderimg/sliderimg.component";
import { DobleimgComponent } from "./dobleimg/dobleimg.component";
import { LoginregisterComponent } from "./loginregister/loginregister.component";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
  ],
  declarations: [HomePage,TopbarPage,SliderimgComponent,DobleimgComponent,LoginregisterComponent]
})
export class HomePageModule {}
