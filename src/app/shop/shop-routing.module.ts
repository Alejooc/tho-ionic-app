import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ShopPage } from './shop.page';

const routes: Routes = [
  {
    path: '',
    component: ShopPage
  },
  {
    path: 'category',
    loadChildren: () => import('./category/category.module').then( m => m.CategoryPageModule)
  },
  {
    path: 'promo',
    loadChildren: () => import('./promo/promo.module').then( m => m.PromoPageModule)
  },
  {
    path: 'producto',
    loadChildren: () => import('./producto/producto.module').then( m => m.ProductoPageModule)
  },
  {
    path: 'cart',
    loadChildren: () => import('./cart/cart.module').then( m => m.CartPageModule)
  },
  {
    path: 'search',
    loadChildren: () => import('./search/search.module').then( m => m.SearchPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ShopPageRoutingModule {}
