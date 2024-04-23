import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {IProduct} from "../models/product";
import {Url} from "../app.config";

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private httpClient: HttpClient) {
  }

  getAllProductsCatalog() {
    return this.httpClient.get<IProduct[]>(`${Url}/products`);
  }

  getProductsCatalogLimitedSorted(limit: string, sort: string) {
    let apiUrl = `${Url}/products`;
    let queryParams = [];

    if (limit) {
      queryParams.push(`limit=${limit}`);
    }
    if (sort) {
      queryParams.push(`sort=${sort}`);
    }
    if (queryParams.length) {
      apiUrl += '?' + queryParams.join('&');
    }

    return this.httpClient.get<IProduct[]>(apiUrl);
  }

  getProductDetails(id: number) {
    return this.httpClient.get<IProduct>(`${Url}/products/${id}`);
  }

  getAllCategoriesList() {
    return this.httpClient.get<string[]>(`${Url}/products/categories`);
  }
}
