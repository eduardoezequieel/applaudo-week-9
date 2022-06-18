import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root',
})
export class StorageService {
  constructor(private jwtHelper: JwtHelperService) {}

  getTokenInformation(): void {
    console.log(this.jwtHelper.decodeToken(localStorage.getItem('token')!));
  }
}
