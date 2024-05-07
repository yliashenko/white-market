import {Component, OnInit} from '@angular/core';
import {CartService} from "../../services/cart.service";
import {IProduct} from "../../models/product";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit{

  displayColumns: string[] = ['id', 'title', 'price'];
  products: IProduct[] = [];
  totalPrice: number = 0;

  constructor(private _cartService: CartService) {
  }

  getCartProducts(){
    this.products = this._cartService.cart;
  }

  getCartTotalPrice(){
    this.totalPrice = 0;
    if (this.products && this.products.length > 0) {
      this.products.forEach(item => {
        this.totalPrice += item.price;
      });
    }
  }

  ngOnInit(): void {
    this.getCartProducts();
    this.getCartTotalPrice();
  }
}
