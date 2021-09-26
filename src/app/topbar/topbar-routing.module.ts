import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TopbarPage } from './topbar.page';

const routes: Routes = [
  {
    path: '',
    component: TopbarPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TopbarPageRoutingModule {}
