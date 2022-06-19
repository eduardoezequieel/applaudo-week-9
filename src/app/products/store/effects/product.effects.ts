import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { mergeMap, map, catchError, of, tap, withLatestFrom, EMPTY } from 'rxjs';
import { AppState } from 'src/app/app.reducer';
import { ProductsService } from '../../services/products.service';
import * as ProductActions from '../actions/product.actions';

@Injectable()
export class ProductEffects {
  constructor(
    private actions$: Actions,
    private productsService: ProductsService,
    private store: Store<AppState>
  ) {}

  loadProducts = createEffect(() =>
    this.actions$.pipe(
      ofType(ProductActions.getProducts),
      mergeMap((data) =>
        this.productsService
          .getProducts(data)
          .pipe(
            map((response) =>
              ProductActions.getProductsSuccess({ products: response.data, meta: response.meta })
            )
          )
      )
    )
  );

  loadProductFromStore = createEffect(() =>
    this.actions$.pipe(
      ofType(ProductActions.getProductFromStore),
      withLatestFrom(this.store.select('products')),
      mergeMap(([{slug}, products]) =>
        of(EMPTY).pipe(
          map(() =>
            ProductActions.getProductFromStoreSuccess({
              product: products.find((product) => product.slug == slug)!,
            })
          )
        )
      )
    )
  );

  loadProduct = createEffect(() =>
    this.actions$.pipe(
      ofType(ProductActions.getProduct),
      mergeMap(({slug}) =>
        this.productsService
          .getProduct(slug)
          .pipe(
            map(({data}) =>
              ProductActions.getProductSuccess({ product: data })
            )
          )
      )
    )
  );
}
