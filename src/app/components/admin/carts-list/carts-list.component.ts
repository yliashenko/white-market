import {Component, Input} from '@angular/core';
import {ICart} from "../../../models/cart";

@Component({
  selector: 'app-carts-list',
  templateUrl: './carts-list.component.html',
  styleUrl: './carts-list.component.css'
})
export class CartsListComponent {
  @Input() cartsList: ICart[];

  displayColumns: string[] = ['id', 'userId', 'date', 'products', 'total'];

  constructor() {

  }

}
