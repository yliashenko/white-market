import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {HttpClientModule} from "@angular/common/http";

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {provideAnimationsAsync} from '@angular/platform-browser/animations/async';
import {HeaderComponent} from './components/general/header/header.component';
import {FooterComponent} from './components/general/footer/footer.component';
import {CatalogComponent} from './components/catalog/catalog.component';
import {CartComponent} from './components/cart/cart.component';
import {ProductDetailsComponent} from './components/product-details/product-details.component';
import {AdminComponent} from './components/admin/admin.component';
import {BaseComponent} from './components/base/base.component';
import {MatToolbarModule} from '@angular/material/toolbar'
import {MatIconModule} from '@angular/material/icon'
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatSelectModule} from '@angular/material/select';
import {ProductCardComponent} from './components/catalog/product-card/product-card.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatProgressBarModule} from "@angular/material/progress-bar";
import {TruncatePipe} from "./helpers/truncate.pipe";
import {
  AddProductDialogComponent
} from './components/admin/dialog-box/product-dialog/add-product/add-product-dialog.component';
import {MatDialogModule} from '@angular/material/dialog';
import {MatInputModule} from '@angular/material/input';
import {LoginDialogComponent} from './components/general/header/login/login-dialog.component';
import {UserComponent} from './components/user/user.component';
import {CartsListComponent} from './components/admin/carts-list/carts-list.component';
import {
  MatCell,
  MatCellDef,
  MatColumnDef, MatFooterCell, MatFooterCellDef, MatFooterRow, MatFooterRowDef,
  MatHeaderCell,
  MatHeaderCellDef, MatHeaderRow, MatHeaderRowDef, MatRow, MatRowDef,
  MatTable
} from "@angular/material/table";
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatButtonToggle, MatButtonToggleGroup, MatButtonToggleModule} from '@angular/material/button-toggle';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    CatalogComponent,
    CartComponent,
    ProductDetailsComponent,
    AdminComponent,
    BaseComponent,
    ProductCardComponent,
    AddProductDialogComponent,
    LoginDialogComponent,
    UserComponent,
    CartsListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatSelectModule,
    HttpClientModule,
    MatProgressBarModule,
    FormsModule,
    MatDialogModule,
    MatInputModule,
    TruncatePipe,
    ReactiveFormsModule,
    MatTable,
    MatHeaderCell,
    MatColumnDef,
    MatHeaderCellDef,
    MatCell,
    MatCellDef,
    MatHeaderRow,
    MatHeaderRowDef,
    MatRow,
    MatRowDef,
    MatSnackBarModule,
    MatFooterRowDef,
    MatFooterRow,
    MatFooterCellDef,
    MatFooterCell,
    MatButtonToggleGroup,
    MatButtonToggle
  ],
  providers: [provideAnimationsAsync()],
  bootstrap: [AppComponent]
})
export class AppModule {
}
