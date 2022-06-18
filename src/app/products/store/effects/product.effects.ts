import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { mergeMap, map, catchError, of, tap } from 'rxjs';
import { ProductsService } from '../../services/products.service';
import * as ProductActions from '../actions/product.actions';

@Injectable()
export class ProductEffects {
  constructor(private actions$: Actions, private productsService: ProductsService) {}

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
}
