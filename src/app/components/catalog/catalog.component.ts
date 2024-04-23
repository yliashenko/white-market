import {Component, OnInit} from '@angular/core';
import {ProductsService} from "../../services/products-service";
import {IProduct} from "../../models/product";
import {delay, Subscription} from "rxjs";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrl: './catalog.component.css'
})
export class CatalogComponent implements OnInit {

  productsSubscription: Subscription;
  categoriesSubscription: Subscription;

  products: IProduct[] = [];
  visibleProducts: IProduct[] = [];

  categories: string[] = [];
  preSelectedCategory = this.visibleProducts;

  selectedLimit = '10';
  selectedSort = 'asc';

  constructor(private productService: ProductsService) {
  }

  ngOnInit(): void {
    this.getAllProducts();
    this.loadProducts();
    this.getCategories();
  }

  getAllProducts() {
    this.productsSubscription = this.productService
      .getAllProductsCatalog()
      .subscribe(data => {
        this.products = data;
      });

    return this.products;
  }

  loadProducts() {
    this.productsSubscription = this.productService
      .getProductsCatalogLimitedSorted(
        this.selectedLimit,
        this.selectedSort
      )
      .subscribe(data => {
        this.visibleProducts = data;
      });

    return this.visibleProducts;
  }

  filterProductsByPattern(event: Event) {
    let productName = (event.target as HTMLInputElement)!!.value;

    if (productName === '') {
      this.visibleProducts = this.products;
      return this.visibleProducts;
    } else {
      this.visibleProducts = this.products.filter(p => p.title.includes(productName));
      return this.visibleProducts;
    }
  }

  filterProductsByCategory(event: Event) {
    let categoryName = (event.target as HTMLSelectElement)!.value;

    if (categoryName === '') {
      this.visibleProducts = this.products;
      return this.visibleProducts;
    } else {
      this.visibleProducts = this.products.filter(p => p.category.includes(categoryName));
      return this.visibleProducts;
    }
  }

  getCategories() {
    this.categoriesSubscription = this.productService
      .getAllCategoriesList()
      .subscribe(data => {
        this.categories = data;
      });

    return this.categories;
  }

// hasItems(): boolean {
//   return this.filteredProducts.length > 0;
// }
}
