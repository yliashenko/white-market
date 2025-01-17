import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Params} from '@angular/router';
import {Product} from "../models/product";
import {Url} from "../app.config";
import {BehaviorSubject, Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})

export class CatalogService {

  public allProducts: Observable<Product[]>;
  public readonly visibleProducts$ = new BehaviorSubject<Product[]>([]);

  categories: string[] = [];

  constructor(private httpClient: HttpClient) {
    this.allProducts = this.loadAllProducts();
  }

  loadAllProducts() {
    return this.httpClient.get<Product[]>(`${Url}/products`);
  }

  loadProducts(params?: Params) {
    return this.httpClient
      .get<Product[]>(`${Url}/products`, {params})
      .subscribe(data => this.visibleProducts$.next(data));
  }

  loadProductsByCategory(params: Params, categoryName: string) {
    return this.httpClient
      .get<Product[]>(`${Url}/products/category/${categoryName}`, {params})
      .subscribe(data => this.visibleProducts$.next(data));
  }

  loadProductDetails(id: number) {
    return this.httpClient.get<Product>(`${Url}/products/${id}`);
  }

  loadAllCategoriesList() {
    this.httpClient.get<string[]>(`${Url}/products/categories`)
      .subscribe(data => {
        this.categories = data;
      });
  }
}
