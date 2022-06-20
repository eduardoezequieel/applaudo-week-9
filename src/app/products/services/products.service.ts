import { catchError, map, Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Product } from '../interfaces/product';
import { Meta } from '../interfaces/meta';
import { PageEvent } from '@angular/material/paginator';
import { StorageService } from 'src/app/core/storage.service';
import { Cart } from '../interfaces/cart';

@Injectable()
export class ProductsService {
  constructor(private http: HttpClient, private storageService: StorageService) {}

  getProducts(e: PageEvent): Observable<{ data: Product[]; meta: Meta }> {
    return this.http
      .get<{ data: Product[]; meta: Meta }>(
        environment.api +
          `api/v1/products?include=image_attachment.blob,category,master&sort=branch&[page][size]=${
            e.pageSize
          }&[page][number]=${e.pageIndex + 1}`
      )
      .pipe(
        catchError(() => {
          throw { expected: false, message: 'Something wrong happened with the server' };
        })
      );
  }

  getProduct(slug: string): Observable<{ data: Product; meta: Meta }> {
    return this.http.get<{ data: Product; meta: Meta }>(
      environment.api + `api/v1/products/${slug}?include=image_attachment.blob,category,master`
    );
  }

  addToCart(body: { data: Cart }): Observable<{ data: Cart }> {
    return this.http.post<{ data: Cart }>(environment.api + 'api/v1/cart', body);
  }

  deleteItemFromCart(body: { data: Cart }): Observable<{ data: Cart }> {
    return this.http.put<{ data: Cart }>(environment.api + 'api/v1/cart', body);
  }

  getCart(): Observable<{ data: Cart; meta: {} }> {
    return this.http.get<{ data: Cart; meta: {} }>(environment.api + 'api/v1/cart');
  }

  deleteCart(): Observable<any> {
    return this.http.delete(environment.api + 'api/v1/cart');
  }
}
