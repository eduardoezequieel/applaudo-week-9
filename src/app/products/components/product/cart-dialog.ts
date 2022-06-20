import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'cart-dialog',
  template: `
    <h2 mat-dialog-title>Add to cart</h2>
    <mat-dialog-content class="mat-typography">
      <p>How many do you want to add?</p>
    </mat-dialog-content>
    <div style="display: flex; align-items: center; gap: 10px; justify-content: center;">
      <button (click)="decrease()" mat-mini-fab color="primary">
        <mat-icon>remove</mat-icon>
      </button>
      <h2>{{ number }}</h2>
      <button (click)="increase()" mat-mini-fab color="primary">
        <mat-icon>add</mat-icon>
      </button>
    </div>
    <mat-dialog-actions align="end">
      <button mat-button [mat-dialog-close]="number">Save</button>
      <button mat-button mat-dialog-close>Close</button>
    </mat-dialog-actions>
  `,
})
export class CartDialog {
  number = 0;

  constructor(@Inject(MAT_DIALOG_DATA) public data: { stock: number }) {}

  increase(): void {
    if (this.number < this.data.stock) {
      this.number++;
    }
  }

  decrease(): void {
    if (this.number > 0) {
      this.number--;
    }
  }
}
