import { createAction, props } from '@ngrx/store';
import { Cart } from '../../interfaces/cart';

export const addProductToCart = createAction(
  '[Cart Home] Add product to cart',
  props<{ body: { data: Cart } }>()
);
export const addProductToCartSuccess = createAction(
  '[Cart Home] Added product to cart',
  props<{ cart: Cart }>()
);

export const getCart = createAction('[Cart Component] Get cart');
export const getCartSuccess = createAction('[Cart Component] Gotten cart', props<{ cart: Cart }>());

export const deleteItemFromCart = createAction(
  '[Cart Component] Delete item from cart',
  props<{ body: { data: Cart } }>()
);
export const deleteItemFromCartSuccess = createAction(
  '[Cart Component] Deleted item from cart',
  props<{ cart: Cart }>()
);

export const deleteCart = createAction('[Cart Component] Delete cart');

export const resetCart = createAction('[Cart Component] Reset cart');
