import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { ProductsComponent } from '../../../coolApp/src/app/products/products.component';
import { DetailsProductComponent } from './products/details-product/details-product.component';
import { Page404Component } from './page404/page404.component';
import { ProductListComponent } from './products/product-list/product-list.component';

const routes: Routes = [
  { path: "", component: HomePageComponent },
  { path: "products", component: ProductsComponent },
  { path: "product/:id", component: DetailsProductComponent },
  { path: "list", component: ProductListComponent },
  { path: "**", component: Page404Component },
];
//HomePage
//404
//detailsProduct

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
