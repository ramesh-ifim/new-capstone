import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContainerComponent } from './components/container/container.component';
import { ProductListComponent } from './components/container/product-list/product-list.component';
import { FilterComponent } from './components/container/product-list/filter/filter.component';
import { ProductComponent } from './components/container/product-list/product/product.component';
import { SearchBoxComponent } from './components/container/search-box/search-box.component';
import { HeaderComponent } from './components/header/header.component';
import {FormsModule} from '@angular/forms';
import { ProductDetailComponent } from './components/container/product-detail/product-detail.component';
import { ProductBrandsComponent } from './components/container/product-brands/product-brands.component';

@NgModule({
  declarations: [
    AppComponent,
    ContainerComponent,
    ProductListComponent,
    FilterComponent,
    ProductComponent,
    SearchBoxComponent,
    HeaderComponent,
    ProductDetailComponent,
    ProductBrandsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
