import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { AppState } from 'src/app/app.reducer';
import { Product } from '../../interfaces/product';
import * as ProductActions from './../../store/actions/product.actions';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss'],
})
export class ProductDetailsComponent implements OnInit, OnDestroy {
  storeSub!: Subscription;
  product!: Product;
  productFromStore = false;

  constructor(private route: ActivatedRoute, private store: Store<AppState>) {}

  ngOnInit(): void {
    const slug = this.route.snapshot.paramMap.get('slug')!;

    this.storeSub = this.store.subscribe((store) => {
      let product = store.products.find((product) => {
        return product.slug == slug;
      });

      if (product) {
        this.productFromStore = true;
      }

      this.product = store.detailsProduct;
    });

    if (this.productFromStore) {
      this.store.dispatch(ProductActions.getProductFromStore({ slug: slug }));
    } else {
      this.store.dispatch(ProductActions.getProduct({ slug: slug }));
    }

  }

  ngOnDestroy(): void {
    this.storeSub.unsubscribe();
  }
}
