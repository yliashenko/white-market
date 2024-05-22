import {ActivatedRouteSnapshot, ResolveFn} from '@angular/router';
import {catchError, from} from 'rxjs';
import {Product} from "../../models/product";
import {CatalogService} from "../../services/catalog-service";
import {inject} from "@angular/core";
import {Router} from "@angular/router";

export const productResolver: ResolveFn<Product | boolean> = (route: ActivatedRouteSnapshot) => {

  const productService = inject(CatalogService);
  const router = inject(Router);

  const productId = route.params['id'];

  return productService.loadProductDetails(productId).pipe(
    catchError(() => {
      return from(router.navigate(['']));
    })
  );
};
