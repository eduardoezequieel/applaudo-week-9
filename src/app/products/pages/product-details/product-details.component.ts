import { MatDialog } from '@angular/material/dialog';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { AppState } from 'src/app/app.reducer';
import { Product } from '../../interfaces/product';
import * as ProductActions from './../../store/actions/product.actions';
import * as CartActions from '../../store/actions/cart.actions';
import { CartDialog } from '../../components/product/cart-dialog';
import { StorageService } from 'src/app/core/storage.service';
import { AlertService } from 'src/app/shared/services/alert.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss'],
})
export class ProductDetailsComponent implements OnInit, OnDestroy {
  storeSub!: Subscription;
  product!: Product;
  productFromStore = false;

  constructor(
    private route: ActivatedRoute,
    private store: Store<AppState>,
    private matDialog: MatDialog,
    private storageService: StorageService,
    private alertService: AlertService
  ) {}

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

  openDialog(): void {
    if (!this.storageService.isTokenExpired()) {
      const dialogRef = this.matDialog.open(CartDialog, {
        data: { stock: this.product.master?.stock },
      });

      dialogRef.afterClosed().subscribe((result) => {
        if (result && result > 0) {
          const body = {
            data: {
              items: [
                {
                  product_variant_id: this.product.master?.id,
                  quantity: result,
                },
              ],
            },
          };

          this.store.dispatch(CartActions.addProductToCart({ body }));
        }
      });
    } else {
      this.alertService.notify(
        'info',
        'In order to add products to the cart, you have to log in first.'
      );
    }
  }
}
