import { PageEvent } from '@angular/material/paginator';
import { createAction, props } from '@ngrx/store';
import { Meta } from '../../interfaces/meta';
import { Product } from '../../interfaces/product';

export const getProducts = createAction('[Home Product] Get products', props<PageEvent>());
export const getProductsSuccess = createAction(
  '[Home Product] Gotten products',
  props<{ products: Product[]; meta: Meta }>()
);
export const getProductFromStore = createAction(
  '[Details Product] Get product from store',
  props<{ slug: string }>()
);
export const getProductFromStoreSuccess = createAction(
  '[Details Product] Gotten product from store',
  props<{ product: Product }>()
);

export const getProduct = createAction('[Details Product] Get product', props<{ slug: string }>());
export const getProductSuccess = createAction(
  '[Details Product] Gotten product',
  props<{ product: Product }>()
);
