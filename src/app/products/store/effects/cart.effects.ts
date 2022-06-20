import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { catchError, map, mergeMap, of } from 'rxjs';
import { AppState } from 'src/app/app.reducer';
import { AlertService } from 'src/app/shared/services/alert.service';
import { ProductsService } from '../../services/products.service';
import * as CartActions from '../actions/cart.actions';

@Injectable()
export class CartEffects {
  constructor(
    private actions$: Actions,
    private productsService: ProductsService,
    private alertService: AlertService,
    private store: Store<AppState>
  ) {}

  addToCart = createEffect(() =>
    this.actions$.pipe(
      ofType(CartActions.addProductToCart),
      mergeMap(({ body }) =>
        this.productsService.addToCart(body).pipe(
          map((response) => {
            this.alertService.notify('success', 'Product added to cart successfully');
            return CartActions.addProductToCartSuccess({ cart: response.data });
          }),
          catchError((error) => {
            if (error.status == 422) {
              this.alertService.notify('error', 'This product already exists on the cart.');
            } else {
              this.alertService.notify('error', 'Something unexpected happened with the server.');
            }

            throw 'error';
          })
        )
      )
    )
  );

  loadCart = createEffect(() =>
    this.actions$.pipe(
      ofType(CartActions.getCart),
      mergeMap(() =>
        this.productsService.getCart().pipe(
          map((response) => CartActions.getCartSuccess({ cart: response.data })),
          catchError((error) => {
            if (error.status == 404) {
              this.alertService.notify('warning', 'The cart is empty.');
              throw 'error';
            } else {
              this.alertService.notify('error', 'Something unexpected happened with the server.');
              throw 'error';
            }
          })
        )
      )
    )
  );

  deleteItemFromCart = createEffect(() =>
    this.actions$.pipe(
      ofType(CartActions.deleteItemFromCart),
      mergeMap(({ body }) =>
        this.productsService.deleteItemFromCart(body).pipe(
          map((response) => {
            this.alertService.notify('success', 'Item removed from the cart successfully!');
            return CartActions.deleteItemFromCartSuccess({ cart: response.data });
          }),
          catchError((error) => {
            if (error.status == 422) {
              this.alertService.notify('success', 'Item removed from the cart successfully!');
              this.store.dispatch(CartActions.resetCart());
              throw 'error';
            } else {
              this.alertService.notify('error', 'Something unexpected happened with the server.');
              throw 'error';
            }
          })
        )
      )
    )
  );

  deleteCart = createEffect(() =>
    this.actions$.pipe(
      ofType(CartActions.deleteCart),
      mergeMap(() =>
        this.productsService.deleteCart().pipe(
          map(() => {
            this.alertService.notify('success', 'Cart deleted successfully!');
            return CartActions.resetCart();
          }),
          catchError(() => {
            this.alertService.notify('error', 'Something unexpected happened with the server.');
            throw 'error';
          })
        )
      )
    )
  );
}
