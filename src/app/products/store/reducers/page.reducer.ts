import * as ProductActions from '../actions/product.actions';
import { PageEvent } from '@angular/material/paginator';
import { createReducer, on } from '@ngrx/store';

export const initialState: PageEvent = {
  length: 0,
  pageIndex: 0,
  pageSize: 10,
  previousPageIndex: 0,
};

export const pageReducer = createReducer(
  initialState,
  on(ProductActions.getProductsSuccess, (state, { meta }) => {
    return {
      length: meta.total,
      pageIndex: meta.current_page,
      pageSize: meta.per_page,
      previousPageIndex: meta.from,
    };
  })
);
