import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { User } from '../auth/interfaces/user';

@Injectable({
  providedIn: 'root',
})
export class StorageService {
  constructor(private jwtHelper: JwtHelperService) {}

  private tokenExists(): boolean {
    let token = localStorage.getItem('token')!;

    if (token) {
      return true;
    }

    return false;
  }

  isTokenExpired(): boolean {
    if (this.tokenExists()) {
      return this.jwtHelper.isTokenExpired(localStorage.getItem('token')!);
    }

    return true;
  }

  getAuthorization(): HttpHeaders {
    return new HttpHeaders().set('Authorization', `Bearer ${localStorage.getItem('token')!}`);
  }

  getUserInfo(): User {
    return JSON.parse(localStorage.getItem('user')!);
  }
}
