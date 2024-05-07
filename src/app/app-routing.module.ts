import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {BaseComponent} from "./components/base/base.component";
import {CatalogComponent} from "./components/catalog/catalog.component";
import {ProductDetailsComponent} from "./components/product-details/product-details.component";
import {CartComponent} from "./components/cart/cart.component";
import {AdminComponent} from "./components/admin/admin.component";
// import {catalogResolver, productResolver} from "./components/product-details/product.resolver";

const routes: Routes = [
  {path: '', component: BaseComponent},

  {path: 'catalog', component: CatalogComponent},
  {path: 'catalog/:id', component: ProductDetailsComponent},
  {path: 'admin', component: AdminComponent},
  {path: 'cart', component: CartComponent},

  {path: '**', redirectTo: '', component: BaseComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {
}
