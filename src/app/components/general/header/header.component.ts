import {Component, OnInit} from '@angular/core';
import {AuthService} from "../../../services/auth.service";
import {CartService} from "../../../services/cart.service";
import {BehaviorSubject, Observable} from "rxjs";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})

export class HeaderComponent implements OnInit {

  cartCount$: Observable<number>;

  constructor(
    public authService: AuthService,
    private _cartService: CartService) {
  }

  ngOnInit() {
    this.cartCount$ = this._cartService.cartCount;
  }
}
