import { Injectable } from '@angular/core';
import { MatSnackBar, MatSnackBarDismiss } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { AlertComponent } from '../components/alert/alert.component';

@Injectable()
export class AlertService {
  constructor(private snackBar: MatSnackBar) {}

  notify(type: string, message: string): Observable<MatSnackBarDismiss> {
    return this.snackBar
      .openFromComponent(AlertComponent, {
        data: { type: type, message: message },
        horizontalPosition: 'end',
      })
      .afterDismissed();
  }

}
