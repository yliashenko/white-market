import {Component, OnInit} from '@angular/core';
import {FormBuilder} from '@angular/forms';
import {CatalogService} from "../../services/catalog-service";
import {startWith} from "rxjs";

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrl: './catalog.component.css'
})

export class CatalogComponent implements OnInit {
  public readonly filtersForm = this.formBuilder.group({
    limit: '20',
    sort: 'asc',
    categoryName: '',
  });

  constructor(
    public catalogService: CatalogService,
    public formBuilder: FormBuilder
  ) {
  }

  ngOnInit(): void {
    this.getCategories();

    this.filtersForm.valueChanges
      .pipe(startWith(this.filtersForm.value))
      .subscribe((value) => {
        const params = {...value};

        if (!params.categoryName) {
          delete params.categoryName;
          this.catalogService.loadProducts(params);
        } else {
          const categoryName = params.categoryName;
          delete params.categoryName;
          this.catalogService.loadProductsByCategory(params, categoryName);
        }

      });
  }

  getCategories() {
    this.catalogService.loadAllCategoriesList();
  }
}
