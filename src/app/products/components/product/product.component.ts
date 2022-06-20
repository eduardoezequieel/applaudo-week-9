import { MatDialog } from '@angular/material/dialog';
import { Product } from './../../interfaces/product';
import { Component, Input, OnInit } from '@angular/core';
import { CartDialog } from './cart-dialog';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducer';
import * as CartActions from '../../store/actions/cart.actions';
import { StorageService } from 'src/app/core/storage.service';
import { AlertService } from 'src/app/shared/services/alert.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnInit {
  @Input() product!: Product;

  constructor(
    private dialog: MatDialog,
    private store: Store<AppState>,
    private storageService: StorageService,
    private alertService: AlertService
  ) {}

  ngOnInit(): void {}

  openDialog(): void {
    if (!this.storageService.isTokenExpired()) {
      const dialogRef = this.dialog.open(CartDialog, {
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
