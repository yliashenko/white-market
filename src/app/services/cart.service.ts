import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {IAddToCart, ICart, IUpdateProductInCart} from "../models/cart";
import {Url} from "../app.config";
import {IProduct} from "../models/product";
import {BehaviorSubject} from "rxjs";
import {MatSnackBar} from "@angular/material/snack-bar";

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cart: IProduct[] = [];
  private _cartItemCount = new BehaviorSubject<number>(0);

  constructor(
    private httpClient: HttpClient,
    private snackBar: MatSnackBar) {

    this.loadInitialCart();
  }

  private loadInitialCart() {
    const storedCart = localStorage.getItem('cart');
    if (storedCart) {
      this.cart = JSON.parse(storedCart);
      this._cartItemCount.next(this.cart.length);
    } else {
      this.cart = [];
    }
  }

  get cartCount() {
    return this._cartItemCount.asObservable();
  }

  addToCart(product: IProduct) {
    this.cart.push(product);
    this.updateCartStorage();

    this.openProductAddedSnackBar();
  }

  removeFromCartCount(product: IProduct) {
    const index = this.cart.findIndex(p => p.id === product.id);
    if (index > -1) {
      this.cart.splice(index, 1);
      this.updateCartStorage();

      this.openProductRemovedSnackBar();
    }
  }

  private updateCartStorage() {
    localStorage.setItem('cart', JSON.stringify(this.cart));
    this._cartItemCount.next(this.cart.length);
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
        duration: 3000
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
