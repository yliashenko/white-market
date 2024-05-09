import {Component, OnDestroy, OnInit} from '@angular/core';
import {CartService} from "../../services/cart.service";
import {IProduct} from "../../models/product";
import {Subscription} from "rxjs";
import {CatalogService} from "../../services/catalog-service";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit, OnDestroy{

  displayColumns: string[] = ['id', 'title', 'price'];
  products: IProduct[] = [];
  private subscriptions: Subscription = new Subscription();
  totalPrice: number = 0;

  constructor(
    private _cartService: CartService,
    private _catalogService: CatalogService) {
  }

  ngOnInit(): void {
    this.getCartProducts();
    this.getCartTotalPrice();
  }

  getCartProducts(){
    this.products = this._cartService.cart;
  }

  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }

  getCartTotalPrice(){
    this.totalPrice = 0;
    if (this.products && this.products.length > 0) {
      this.products.forEach(item => {
        this.totalPrice += item.price;
      });
    }
  }
}
