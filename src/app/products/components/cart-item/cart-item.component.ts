import { DeleteDialog } from './delete-dialog';
import { MatDialog } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { Component, Input } from '@angular/core';
import { CartProduct } from '../../interfaces/cart';
import { AppState } from 'src/app/app.reducer';
import * as CartActions from '../../store/actions/cart.actions';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.scss'],
})
export class CartItemComponent {
  @Input() cartProduct!: CartProduct;

  constructor(private store: Store<AppState>, private matDialog: MatDialog) {}

  deleteItem(): void {
    const dialogRef = this.matDialog.open(DeleteDialog);

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        const body = {
          data: {
            items: [
              {
                id: this.cartProduct.id,
                _destroy: true,
              },
            ],
          },
        };

        this.store.dispatch(CartActions.deleteItemFromCart({ body }));
      }
    });
  }
}
