import {Injectable} from '@angular/core';
import {IProduct} from "../models/product";
import {Url} from "../app.config";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  productsAdded: IProduct[] = [];

  constructor(private httpClient: HttpClient) {
  }

  addProduct(product: IProduct) {
    return this.httpClient.post<IProduct>(`${Url}/products`, product)
      .subscribe((data) => {
        this.productsAdded.push(data);
      });
  }
}
