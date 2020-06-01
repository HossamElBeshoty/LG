import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomePageComponent} from './Pages/home-page/home-page.component';
import {AboutUsPageComponent} from './Pages/about-us-page/about-us-page.component';
import {ProductsPageComponent} from './Pages/products-page/products-page.component';
import {ContactUsPageComponent} from './Pages/contact-us-page/contact-us-page.component';
import {CatalogPageComponent} from './Pages/catalog-page/catalog-page.component';
import {NotFoundPageComponent} from './Pages/not-found-page/not-found-page.component';
import {ProductCategoryComponent} from "./Components/product-category/product-category.component";
import {ProductCategoryDetailsComponent} from "./Components/product-category-details/product-category-details.component";
import {ProductCategoryFilterDetailsComponent} from "./Components/product-category-filter-details/product-category-filter-details.component";
import {ProductFilterByTagComponent} from "./Components/product-filter-by-tag/product-filter-by-tag.component";
import {SingleProductComponent} from "./Components/single-product/single-product.component";

const routes: Routes = [
  {path: '', component: HomePageComponent},
  {path: 'aboutUs', component: AboutUsPageComponent},
  {path: 'products', component: ProductsPageComponent},
  {path: 'products/:categoryID', component: ProductCategoryComponent},
  {path: 'products/:productID/filter', component: ProductFilterByTagComponent},
  {path: 'products/:categoryID/:productID', component: ProductCategoryDetailsComponent},
  {path: 'product-details/single-product/:productID', component: SingleProductComponent},
  {path: 'products/:categoryID/:productID/filter', component: ProductCategoryFilterDetailsComponent},
  {path: 'catalog', component: CatalogPageComponent},
  {path: 'contactUs', component: ContactUsPageComponent},
  {path: 'not-found', component: NotFoundPageComponent},
  {path: '**', redirectTo: 'not-found'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
