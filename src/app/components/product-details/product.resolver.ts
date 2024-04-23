import {ActivatedRouteSnapshot, RouterStateSnapshot, ResolveFn} from '@angular/router';
import {catchError, delay} from 'rxjs';
import {IProduct} from "../../models/product";
import {ProductsService} from "../../services/products-service";
import {inject, Inject} from "@angular/core";
import {Router} from "@angular/router";

export const catalogResolver: ResolveFn<IProduct[] | boolean> = (route: ActivatedRouteSnapshot) => {

  const productService = inject(ProductsService);
  const router = inject(Router);

  const limit = route.params['limit'];
  const sort = route.params['sort'];

  return productService.getProductsCatalogLimitedSorted(limit, sort).pipe(
    catchError(() => {
      return router.navigate([""]);
    })
  );
};

export const productResolver: ResolveFn<IProduct | boolean> = (route: ActivatedRouteSnapshot) => {

  const productService = inject(ProductsService);
  const router = inject(Router);

  const productId = route.params['id'];

  return productService.getProductDetails(productId).pipe(
    catchError(() => {
      return router.navigate([""]);
    })
  );
};