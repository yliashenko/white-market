import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ICart} from "../models/cart";
import {Url} from "../app.config";
import {Product} from "../models/product";
import {BehaviorSubject, Observable} from "rxjs";
import {MatSnackBar} from "@angular/material/snack-bar";

@Injectable({
  providedIn: 'root'
})
export class CartService {
  public readonly products = new BehaviorSubject<Product[]>([]);

  constructor(
    private httpClient: HttpClient,
    private snackBar: MatSnackBar) {

    this.loadInitialCart();

    this.products.subscribe((data) => {
      localStorage.setItem('cart', JSON.stringify(data));
    })
  }

  private loadInitialCart() {
    const storedCart = localStorage.getItem('cart');
    if (storedCart) {
      this.products.next(JSON.parse(storedCart));
    } else {
      this.products.next([]);
    }
  }

  addToCart(product: Product) {
    this.products.next([
      ...this.products.value,
      product
    ]);

    this.openProductAddedSnackBar();
  }

  removeProduct(product: Product) {
    this.products.next(this.products.value.filter((item) => item.id !== product.id));

    this.openProductRemovedSnackBar();
  }

  getCartsInDateRangeLimitedSorted(
    startDate?: string,
    endDate?: string,
    limit?: string,
    sort?: string
  ) {
    let apiUrl = `${Url}/carts/`;
    let queryParams = [];

    if (startDate) queryParams.push(`startdate=${startDate}`);
    if (endDate) queryParams.push(`enddate=${endDate}`);
    if (limit) queryParams.push(`limit=${limit}`);
    if (sort) queryParams.push(`sort=${sort}`);

    if (queryParams.length) apiUrl += '?' + queryParams.join('&');

    return this.httpClient.get<ICart[]>(apiUrl);
  }

  openProductAddedSnackBar() {
    this.snackBar.open(
      "The product has been successfully added to the cart",
      'Ok', {
        duration: 3000,
      });
  }

  openProductRemovedSnackBar() {
    this.snackBar.open(
      "The product has been successfully removed from the cart",
      'Ok', {
        duration: 3000
      });
  }
}
