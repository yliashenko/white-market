import {Component} from '@angular/core';
import {AuthService} from "../../../services/auth.service";
import {CartService} from "../../../services/cart.service";

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
