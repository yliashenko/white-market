import { Component, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap, Subscription } from 'rxjs';
import { CatalogService } from "../../services/catalog-service";
import { AuthService } from "../../services/auth.service";
import { CartService } from "../../services/cart.service";
import {IProduct} from "../../models/product";

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnDestroy {
  private subscription: Subscription;
  public product: IProduct | null = null;

  constructor(
    private catalogService: CatalogService,
    private activatedRoute: ActivatedRoute,
    public authService: AuthService,
    public cartService: CartService
  ) {
    this.subscription = this.activatedRoute.params.pipe(
      switchMap(({id}) => this.catalogService.loadProductDetails(id))
    ).subscribe(product => {
      this.product = product;
    });
  }

  addProductToCart() {
    if (this.product) {
      this.cartService.addToCart(this.product);
    } else {
      console.error('Product is not loaded yet');
    }
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
