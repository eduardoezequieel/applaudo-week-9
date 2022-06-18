import { catchError, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Product } from '../interfaces/product';
import { Meta } from '../interfaces/meta';
import { PageEvent } from '@angular/material/paginator';

@Injectable()
export class ProductsService {
  constructor(private http: HttpClient) {}

  getProducts(e: PageEvent): Observable<{ data: Product[]; meta: Meta }> {
    return this.http
      .get<{ data: Product[]; meta: Meta }>(
        environment.api +
          `api/v1/products?include=image_attachment.blob,category,master&[page][size]=${
            e.pageSize
          }&[page][number]=${e.pageIndex + 1}`
      )
      .pipe(
        catchError(() => {
          throw { expected: false, message: 'Something wrong happened with the server' };
        })
      );
  }
}
