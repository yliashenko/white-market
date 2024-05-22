import { Component } from '@angular/core';
import { CartService } from "../../services/cart.service";
import { map } from "rxjs";

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
