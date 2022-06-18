import { PageEvent } from '@angular/material/paginator';
import { ActionReducerMap } from '@ngrx/store';

import { Product } from './products/interfaces/product';
import { pageReducer } from './products/store/reducers/page.reducer';
import { productReducer } from './products/store/reducers/product.reducer';

export interface AppState {
  products: Product[];
  pageProperties: PageEvent;
}

export const appReducers: ActionReducerMap<AppState> = {
  products: productReducer,
  pageProperties: pageReducer,
};
