import {Component, OnDestroy, OnInit} from '@angular/core';
import {Observable, of, Subscription, switchMap, tap} from "rxjs";
import {CartService} from "../../../services/cart.service";
import {ICart, ICartWithTotals} from "../../../models/cart";
import {Product} from "../../../models/product";
import {CatalogService} from "../../../services/catalog-service";

@Component({
  selector: 'app-carts-list',
  templateUrl: './carts-list.component.html',
  styleUrl: './carts-list.component.css'
})
export class CartsListComponent implements OnInit, OnDestroy {

  displayColumns: string[] = ['id', 'userId', 'products', 'date', 'totalPrice'];

  cartsListWithTotal: ICartWithTotals[] = [];
  allCartsTotal: number = 0;

  private cartsList$: Observable<ICart[]>;
  private subscriptions: Subscription = new Subscription();
  private preparedProducts: { id: number, product: Product }[] = [];

  constructor(
    private _cartService: CartService,
    private _catalogService: CatalogService) {
  }

  ngOnInit() {
    this.loadAndPrepareAllProducts().pipe(
      switchMap(() => this.getAllCarts())
    ).subscribe((carts) => {
      this.cartsList$ = of(carts);
      this.prepareCartsListWithTotals();
    });

  }

  loadAndPrepareAllProducts() {
    return this._catalogService.allProducts.pipe(
      tap((data) => {
        this.preparedProducts = data.map(item => ({
          id: item.id,
          product: item
        }));
      })
    );
  }

  prepareCartsListWithTotals() {
    this.cartsList$.subscribe((data) => {
      let allCartsPriceTotal = 0;
      let totalCartPrice = 0;

      this.cartsListWithTotal = data.map(cart => {
        const productsWithNames = cart.products.map(product => {

          const targetProduct = this.preparedProducts
            .find(item => item.id === product.productId)?.product;

          return {
            ...product,
            productName: targetProduct!.title,
            totalPrice: targetProduct!.price * product.quantity
          };
        });

        totalCartPrice = productsWithNames
          .reduce((acc, product) => acc + product.totalPrice, 0);

        allCartsPriceTotal += totalCartPrice;

        return {
          ...cart,
          products: productsWithNames,
          totalPrice: totalCartPrice
        };
      });

      this.allCartsTotal = allCartsPriceTotal;
    });
  }

  getAllCarts() {
    return this.cartsList$ = this._cartService.getCartsInDateRangeLimitedSorted();
  }

  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }
}
