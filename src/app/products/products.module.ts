import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatMenuModule } from '@angular/material/menu';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatDialogModule } from '@angular/material/dialog';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductsComponent } from './products.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SharedModule } from '../shared/shared.module';
import { ProductsService } from './services/products.service';
import { ProductComponent } from './components/product/product.component';
import { HomeComponent } from './pages/home/home.component';
import { LogoutDialog } from './components/navbar/logout-dialog';

import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { appReducers } from '../app.reducer';
import { environment } from 'src/environments/environment';
import { EffectsModule } from '@ngrx/effects';
import { EffectsArray } from './store/effects';
import { ProductDetailsComponent } from './pages/product-details/product-details.component';
import { RequestsInterceptor } from '../core/http.interceptor';
import { CartComponent } from './pages/cart/cart.component';
import { CartDialog } from './components/product/cart-dialog';
import { DeleteDialog } from './components/cart-item/delete-dialog';
import { CartItemComponent } from './components/cart-item/cart-item.component';

@NgModule({
  declarations: [
    ProductsComponent,
    NavbarComponent,
    ProductComponent,
    HomeComponent,
    ProductDetailsComponent,
    LogoutDialog,
    DeleteDialog,
    CartDialog,
    CartComponent,
    CartItemComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    StoreModule.forRoot(appReducers),
    EffectsModule.forRoot(EffectsArray),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production,
      autoPause: true,
    }),
    ProductsRoutingModule,
    SharedModule,
    MatMenuModule,
    MatPaginatorModule,
    MatTooltipModule,
    MatDialogModule,
  ],
  providers: [
    ProductsService,
    { provide: HTTP_INTERCEPTORS, useClass: RequestsInterceptor, multi: true },
  ],
})
export class ProductsModule {}
