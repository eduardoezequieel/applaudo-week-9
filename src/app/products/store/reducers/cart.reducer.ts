import * as CartActions from './../actions/cart.actions';

import { createReducer, on } from '@ngrx/store';
import { Cart } from '../../interfaces/cart';

export const initialState: Cart = {
  items: [],
};

export const cartReducer = createReducer(
  initialState,
  on(CartActions.addProductToCartSuccess, (state, { cart }) => cart),
  on(CartActions.getCartSuccess, (state, { cart }) => cart),
  on(CartActions.deleteItemFromCartSuccess, (state, { cart }) => cart),
  on(CartActions.resetCart, (state) => initialState)
);
