import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BuyRecordPage } from './buy-record.page';

const routes: Routes = [
  {
    path: '',
    component: BuyRecordPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BuyRecordPageRoutingModule {}
