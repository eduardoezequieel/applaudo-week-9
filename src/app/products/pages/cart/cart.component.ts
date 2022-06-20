import { MatDialog } from '@angular/material/dialog';
import { Subscription } from 'rxjs';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducer';
import { Cart } from '../../interfaces/cart';
import * as CartActions from '../../store/actions/cart.actions';
import { DeleteDialog } from '../../components/cart-item/delete-dialog';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit, OnDestroy {
  cart!: Cart;
  storeSub!: Subscription;
  cartIsOnStore = false;

  constructor(private store: Store<AppState>, private matDialog: MatDialog) {}

  ngOnInit(): void {
    this.storeSub = this.store.subscribe((store) => {
      this.cart = store.cart;

      if (store.cart.items.length != 0) {
        this.cartIsOnStore = true;
      }
    });

    if (!this.cartIsOnStore) {
      this.store.dispatch(CartActions.getCart());
    }
  }

  ngOnDestroy(): void {
    this.storeSub.unsubscribe();
  }

  deleteCart(): void {
    const dialogRef = this.matDialog.open(DeleteDialog);

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.store.dispatch(CartActions.deleteCart());
      }
    });
  }
}
