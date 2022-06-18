import { Subscription } from 'rxjs';
import { Product } from './../../interfaces/product';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { AppState } from 'src/app/app.reducer';
import { Store } from '@ngrx/store';
import * as ProductActions from '../../store/actions/product.actions';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit, OnDestroy {
  storeSub!: Subscription;

  products: Product[] = [];

  pageProperties: PageEvent = {
    length: 0,
    pageIndex: 0,
    pageSize: 10,
    previousPageIndex: 0,
  };

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.storeSub = this.store.subscribe((store) => {
      this.products = store.products;
      this.pageProperties.length = store.pageProperties.length;
      this.pageProperties.pageSize = store.pageProperties.pageSize;
    });

    if (this.products.length == 0) {
      this.store.dispatch(ProductActions.getProducts(this.pageProperties));
    }
  }

  ngOnDestroy(): void {
    this.storeSub.unsubscribe();
  }

  log(e: PageEvent): void {
    console.log(e);
    this.store.dispatch(ProductActions.getProducts(e));
  }
}
