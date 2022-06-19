import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Route,
  Router,
  RouterStateSnapshot,
  UrlSegment,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { StorageService } from '../storage.service';

@Injectable({
  providedIn: 'root',
})
export class IsAuthenticatedGuard implements CanActivate {
  constructor(private storageService: StorageService, private route: Router) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (!this.storageService.isTokenExpired()) {
      this.route.navigateByUrl('/products/home');
      return false;
    }

    return true;
  }
}
