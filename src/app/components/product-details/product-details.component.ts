import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap, Subscription } from 'rxjs';
import { CatalogService } from "../../services/catalog-service";
import { AuthService } from "../../services/auth.service";
import { CartService } from "../../services/cart.service";
import { Product } from "../../models/product";

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit, OnDestroy {
  private subscription: Subscription;
  public product: Product | null = null;

  constructor(
    private catalogService: CatalogService,
    private activatedRoute: ActivatedRoute,
    public authService: AuthService,
    public cartService: CartService,
    private route: ActivatedRoute
  ) {
    this.subscription = this.activatedRoute.params.pipe(
      switchMap(({id}) => this.catalogService.loadProductDetails(id))
    ).subscribe(product => {
      this.product = product;
    });
  }

  ngOnInit() {
    this.product = this.route.snapshot.data['product'];
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
