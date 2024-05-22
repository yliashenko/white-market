import {Injectable} from '@angular/core';
import {Product} from "../models/product";
import {Url} from "../app.config";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  productsAdded: Product[] = [];

  constructor(private httpClient: HttpClient) {
  }

  addProduct(product: Product) {
    return this.httpClient.post<Product>(`${Url}/products`, product)
      .subscribe((data) => {
        this.productsAdded.push(data);
      });
  }
}
