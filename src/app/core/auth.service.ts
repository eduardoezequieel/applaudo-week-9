import { tap, catchError, Observable } from 'rxjs';
import { environment } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../auth/interfaces/user';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  login(data: { data: User }): Observable<any> {
    return this.http.post<any>(environment.api + 'api/v1/users/login', data).pipe(
      tap((response: { data: { token: string } }) => {
        localStorage.setItem('token', response.data.token);
      }),
      catchError((error: Response) => {
        if (error.status == 401) {
          throw { expected: true, message: 'Invalid credentials' };
        } else {
          throw { expected: false, message: 'Something wrong happened with the server' };
        }
      })
    );
  }
}
