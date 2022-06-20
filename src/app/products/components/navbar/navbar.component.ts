import { resetCart } from './../../store/actions/cart.actions';
import { AppState } from 'src/app/app.reducer';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { User } from 'src/app/auth/interfaces/user';
import { AuthService } from 'src/app/core/auth.service';
import { StorageService } from 'src/app/core/storage.service';
import { AlertService } from 'src/app/shared/services/alert.service';
import { LogoutDialog } from './logout-dialog';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  isLoggedIn = false;
  user?: User;

  constructor(
    private storageService: StorageService,
    private authService: AuthService,
    private dialog: MatDialog,
    private alertService: AlertService,
    private store: Store<AppState>
  ) {}

  ngOnInit(): void {
    this.isLoggedIn = !this.storageService.isTokenExpired();

    if (this.isLoggedIn) {
      this.user = this.storageService.getUserInfo();
    }
  }

  logout(): void {
    const dialogRef = this.dialog.open(LogoutDialog);

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.authService.logout();
        this.store.dispatch(resetCart());
        this.isLoggedIn = false;

        this.alertService.notify('success', 'Logged out successfully!').subscribe();
      }
    });
  }
}
