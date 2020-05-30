import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomePageComponent} from './Pages/home-page/home-page.component';
import {AboutUsPageComponent} from './Pages/about-us-page/about-us-page.component';
import {CertificatePageComponent} from './Pages/certificate-page/certificate-page.component';
import {ProductsPageComponent} from './Pages/products-page/products-page.component';
import {SafesComponent} from './Pages/products-page/safes/safes.component';
import {CabinetsComponent} from './Pages/products-page/cabinets/cabinets.component';
import {VaultsDoorsComponent} from './Pages/products-page/vaults-doors/vaults-doors.component';
import {MoneyCountingComponent} from './Pages/products-page/money-counting/money-counting.component';
import {FaqsPageComponent} from './Pages/faqs-page/faqs-page.component';
import {ContactUsPageComponent} from './Pages/contact-us-page/contact-us-page.component';
import {ProductsDetailsComponent} from './Components/products-details/products-details.component';
import {ProductsFilterDetailsComponent} from './Components/products-filter-details/products-filter-details.component';
import {MoneyCountingDetailsComponent} from './Pages/products-page/money-counting/money-counting-details/money-counting-details.component';
import {CatalogPageComponent} from './Pages/catalog-page/catalog-page.component';
import {NotFoundPageComponent} from './Pages/not-found-page/not-found-page.component';
import {FurniturePageComponent} from './Pages/products-page/furniture-page/furniture-page.component';
import {LightingComponent} from './Pages/products-page/lighting/lighting.component';
import {GalleryComponent} from './Pages/products-page/gallery/gallery.component';
import {ProductCategoryComponent} from "./Components/product-category/product-category.component";

const routes: Routes = [
  {path: '', component: HomePageComponent},
  {path: 'aboutUs', component: AboutUsPageComponent},
  {path: 'certificate', component: CertificatePageComponent},
  {path: 'products', component: ProductsPageComponent},
  {path: 'products/safes', component: SafesComponent},
  {path: 'products/furniture', component: FurniturePageComponent},
  {path: 'products/lighting', component: LightingComponent},
  {path: 'products/gallery', component: GalleryComponent},
  {path: 'products/safes/:name', component: ProductsDetailsComponent},
  {path: 'products/furniture/:name', component: ProductsDetailsComponent},
  {path: 'products/lighting/:name', component: ProductsDetailsComponent},
  {path: 'products/gallery/:name', component: ProductsDetailsComponent},
  {path: 'products/safes/:name/filter', component: ProductsFilterDetailsComponent},
  {path: 'products/:categoryID', component: ProductCategoryComponent},
  {path: 'products/cabinets', component: CabinetsComponent},
  {path: 'products/vaultsDoors', component: VaultsDoorsComponent},
  {path: 'products/moneyCounting', component: MoneyCountingComponent},
  {path: 'products/moneyCounting/:id', component: MoneyCountingDetailsComponent},
  {path: 'faq', component: FaqsPageComponent},
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
