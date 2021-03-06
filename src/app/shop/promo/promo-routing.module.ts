import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PromoPage } from './promo.page';

const routes: Routes = [
  {
    path: '',
    component: PromoPage
  },
  {
    path: ':slug',
    component: PromoPage
  },
  {
    path: ':slug/:category',
    component: PromoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PromoPageRoutingModule {}
