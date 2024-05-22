import {Component, OnDestroy, OnInit, ViewEncapsulation} from '@angular/core';
import {CartService} from "../../services/cart.service";
import {Product} from "../../models/product";
import {map, Subscription} from "rxjs";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {

  displayColumns: string[] = ['id', 'title', 'price', 'actions'];

  public readonly totalPrice = this.cartService.products.pipe(
    map((products) => products
      .reduce((acc, {price}) => acc + price, 0))
  );

  constructor(
    public cartService: CartService) {
  }
}
