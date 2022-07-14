import { Product } from './../interfaces/product';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  getProducts() {
      return this.http.get<any>('assets/products.json')
      .toPromise()
      .then((res: any) => <Product[]>res.data)
      .then((data: any) => { return data; });
  }
}