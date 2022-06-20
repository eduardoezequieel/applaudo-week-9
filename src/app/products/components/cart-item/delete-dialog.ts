import { Component } from '@angular/core';

@Component({
  selector: 'delete-dialog',
  template: `
    <h2 mat-dialog-title>Delete</h2>
    <mat-dialog-content class="mat-typography">
      <p>Are you sure that you want to perform this action?</p>
    </mat-dialog-content>
    <mat-dialog-actions align="end">
      <button mat-button [mat-dialog-close]="true">Yes</button>
      <button mat-button mat-dialog-close>No</button>
    </mat-dialog-actions>
  `,
})
export class DeleteDialog {}
