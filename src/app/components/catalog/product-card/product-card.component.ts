import {Component, Input} from '@angular/core';
import {IProduct} from "../../../models/product";

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css'
})
export class ProductCardComponent {
  @Input() product: IProduct;
}
