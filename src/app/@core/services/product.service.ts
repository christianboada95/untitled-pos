import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@env/environment';
import { Product } from '@shared/models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  getProducts() {
    return this.http.get<Product[]>(`${environment.apiUrl}/products`)
  }

  getProductsSmall() {
    return this.http.get<Product[]>(`${environment.apiUrl}/products`)
  }

  getProductsMixed() {
    return this.http.get<Product[]>(`${environment.apiUrl}/products`)
  }

  getProductsWithOrdersSmall() {
    return this.http.get<Product[]>(`${environment.apiUrl}/products`)
  }

}

