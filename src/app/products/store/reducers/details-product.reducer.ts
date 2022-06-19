import { createReducer, on } from '@ngrx/store';
import { Product } from '../../interfaces/product';
import * as ProductActions from '../actions/product.actions';

export const initialState: Product = {
  id: 0,
  active: 0,
  category: undefined,
  image: undefined,
  master: undefined,
  description: '',
  name: '',
  slug: '',
};

export const detailsProductReducer = createReducer(
  initialState,
  on(ProductActions.getProductFromStoreSuccess, (state, { product }) => product),
  on(ProductActions.getProductSuccess, (state, { product }) => product)
);
