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


const routes: Routes = [
  {path: '', component: HomePageComponent},
  {path: 'aboutUs', component: AboutUsPageComponent},
  {path: 'certificate', component: CertificatePageComponent},
  {path: 'products', component: ProductsPageComponent},
  {path: 'products/safes', component: SafesComponent},
  {path: 'products/cabinets', component: CabinetsComponent},
  {path: 'products/vaultsDoors', component: VaultsDoorsComponent},
  {path: 'products/moneyCounting', component: MoneyCountingComponent},
  {path: 'faq', component: FaqsPageComponent},
  {path: 'contactUs', component: ContactUsPageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}