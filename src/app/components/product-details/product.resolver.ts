import {ActivatedRouteSnapshot, ResolveFn} from '@angular/router';
import {catchError} from 'rxjs';
import {IProduct} from "../../models/product";
import {CatalogService} from "../../services/catalog-service";
import {inject} from "@angular/core";
import {Router} from "@angular/router";

// export const catalogResolver: ResolveFn<IProduct[] | boolean> = (route: ActivatedRouteSnapshot) => {
//
//   const productService = inject(CatalogService);
//   const router = inject(Router);
//
//   const limit = route.params['limit'];
//   const sort = route.params['sort'];
//
//   return productService.getProductsCatalogLimitedSortedObservable(limit, sort).pipe(
//     catchError(() => {
//       return router.navigate([""]);
//     })
//   );
// };
//
// export const productResolver: ResolveFn<IProduct | boolean> = (route: ActivatedRouteSnapshot) => {
//
//   const productService = inject(CatalogService);
//   const router = inject(Router);
//
//   const productId = route.params['id'];
//
//   return productService.getProductDetails(productId).pipe(
//     catchError(() => {
//       return router.navigate([""]);
//     })
//   );
// };
