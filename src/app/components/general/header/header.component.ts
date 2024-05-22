import {Component, OnInit} from '@angular/core';
import {AuthService} from "../../../services/auth.service";
import {CartService} from "../../../services/cart.service";
import {Observable} from "rxjs";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})

export class HeaderComponent {

  constructor(
    public authService: AuthService,
    public cartService: CartService) {
  }
}
