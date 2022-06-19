import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IsAuthenticatedGuard } from './core/guards/is-authenticated.guard';

const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then((m) => m.AuthModule),
    canActivate: [IsAuthenticatedGuard],
  },
  {
    path: 'products',
    loadChildren: () => import('./products/products.module').then((m) => m.ProductsModule),
  },
  { path: '**', redirectTo: 'products' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
