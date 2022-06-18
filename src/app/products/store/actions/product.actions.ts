import { PageEvent } from '@angular/material/paginator';
import { createAction, props } from '@ngrx/store';
import { Meta } from '../../interfaces/meta';
import { Product } from '../../interfaces/product';

export const getProducts = createAction('[Home Product] Get products', props<PageEvent>());
export const getProductsSuccess = createAction(
  '[Home Product] Gotten products',
  props<{ products: Product[], meta: Meta }>()
);
export const getProductsError = createAction(
  '[Home Product] Error getting products',
  props<{ payload: any }>()
);
