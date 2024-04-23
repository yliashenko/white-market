import {Injector, NgModule} from '@angular/core';
import {BrowserModule, provideClientHydration} from '@angular/platform-browser';

import {HttpClientModule} from "@angular/common/http";

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {provideAnimationsAsync} from '@angular/platform-browser/animations/async';
import {HeaderComponent} from './components/general/header/header.component';
import {FooterComponent} from './components/general/footer/footer.component';
import {CatalogComponent} from './components/catalog/catalog.component';
import {BasketComponent} from './components/basket/basket.component';
import {ProductDetailsComponent} from './components/product-details/product-details.component';
import {AdminComponent} from './components/admin/admin.component';
import {BaseComponent} from './components/base/base.component';
import {MatToolbarModule} from '@angular/material/toolbar'
import {MatIconModule} from '@angular/material/icon'
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatSelectModule} from '@angular/material/select';
import {ProductCardComponent} from './components/catalog/product-card/product-card.component';
import {FormsModule} from "@angular/forms";
import {MatProgressBarModule} from "@angular/material/progress-bar";
import {TruncatePipe} from "./helpers/truncate.pipe";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    CatalogComponent,
    BasketComponent,
    ProductDetailsComponent,
    AdminComponent,
    BaseComponent,
    ProductCardComponent
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
    TruncatePipe
  ],
  providers: [
    provideClientHydration(),
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
