import { createReducer, on } from '@ngrx/store';
import { Product } from '../../interfaces/product';
import * as ProductActions from '../actions/product.actions';

export const initialState: Product[] = [];

export const productReducer = createReducer(
  initialState,
  on(ProductActions.getProductsSuccess, (state, { products }) => products)
);
