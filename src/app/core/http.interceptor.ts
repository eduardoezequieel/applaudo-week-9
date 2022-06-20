import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StorageService } from './storage.service';

@Injectable()
export class RequestsInterceptor implements HttpInterceptor {
  constructor(private storageService: StorageService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return next.handle(this.addAuthorization(request));
  }

  addAuthorization(request: HttpRequest<unknown>): HttpRequest<unknown> {
    const token = `Bearer ${localStorage.getItem('token')!}`;

    return request.clone({
      setHeaders: {
        Authorization: token,
      },
    });
  }
}
