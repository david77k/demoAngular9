import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { Page404Component } from './page404/page404.component';
import { DetailsProductComponent } from './products/details-product/details-product.component';
import { ProductListComponent } from './products/product-list/product-list.component';
import { ProductComponente } from './products/product.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    Page404Component,
    DetailsProductComponent,
    ProductComponente,
    ProductListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
