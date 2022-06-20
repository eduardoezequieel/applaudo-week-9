import { Cart } from './products/interfaces/cart';
import { PageEvent } from '@angular/material/paginator';
import { ActionReducerMap } from '@ngrx/store';

import { Product } from './products/interfaces/product';
import { detailsProductReducer } from './products/store/reducers/details-product.reducer';
import { pageReducer } from './products/store/reducers/page.reducer';
import { productReducer } from './products/store/reducers/product.reducer';
import { cartReducer } from './products/store/reducers/cart.reducer';

export interface AppState {
  products: Product[];
  detailsProduct: Product;
  pageProperties: PageEvent;
  cart: Cart;
}

export const appReducers: ActionReducerMap<AppState> = {
  products: productReducer,
  detailsProduct: detailsProductReducer,
  pageProperties: pageReducer,
  cart: cartReducer
};
