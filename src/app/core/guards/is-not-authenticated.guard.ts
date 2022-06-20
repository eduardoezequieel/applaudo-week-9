import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { StorageService } from '../storage.service';

@Injectable({
  providedIn: 'root',
})
export class IsNotAuthenticatedGuard implements CanActivate {
  constructor(private storageService: StorageService, private route: Router) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (this.storageService.isTokenExpired()) {
      this.route.navigateByUrl('/auth/login');
      return false;
    }

    return true;
  }
}
