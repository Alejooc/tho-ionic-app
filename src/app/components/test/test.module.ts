import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { TestComponent} from "./test.component";


@NgModule({
  declarations: [TestComponent],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
  ]
})
export class TestModule { }
