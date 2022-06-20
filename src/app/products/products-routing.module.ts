import { ProductsComponent } from './products.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ProductDetailsComponent } from './pages/product-details/product-details.component';
import { CartComponent } from './pages/cart/cart.component';
import { IsNotAuthenticatedGuard } from '../core/guards/is-not-authenticated.guard';

const routes: Routes = [
  {
    path: '',
    component: ProductsComponent,
    children: [
      {
        path: 'home',
        component: HomeComponent,
      },
      {
        path: 'details/:slug',
        component: ProductDetailsComponent,
      },
      {
        path: 'cart',
        component: CartComponent,
        canActivate: [IsNotAuthenticatedGuard],
      },
      {
        path: '**',
        redirectTo: 'home',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductsRoutingModule {}
