import {Component, Input} from '@angular/core';
import {IProduct} from "../../../models/product";
import {AuthService} from "../../../services/auth.service";
import {CartService} from "../../../services/cart.service";

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css'
})
export class ProductCardComponent {
  @Input() product: IProduct;

  constructor(
    public authService: AuthService,
    public cartService: CartService) {
  }

  addProductToCart() {
    this.cartService.addToCart(this.product);
  }
}
