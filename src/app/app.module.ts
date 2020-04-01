import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HomePageComponent} from './Pages/home-page/home-page.component';
import {NavBarComponent} from './Layouts/nav-bar/nav-bar.component';
import {FooterComponent} from './Layouts/footer/footer.component';
import {AboutUsPageComponent} from './Pages/about-us-page/about-us-page.component';
import {CertificatePageComponent} from './Pages/certificate-page/certificate-page.component';
import {ProductsPageComponent} from './Pages/products-page/products-page.component';
import {FaqsPageComponent} from './Pages/faqs-page/faqs-page.component';
import {ContactUsPageComponent} from './Pages/contact-us-page/contact-us-page.component';
import {CabinetsComponent} from './Pages/products-page/cabinets/cabinets.component';
import {VaultsDoorsComponent} from './Pages/products-page/vaults-doors/vaults-doors.component';
import {MoneyCountingComponent} from './Pages/products-page/money-counting/money-counting.component';
import {SafesComponent} from './Pages/products-page/safes/safes.component';
import { CardComponent } from './Widgets/card/card.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    NavBarComponent,
    FooterComponent,
    AboutUsPageComponent,
    CertificatePageComponent,
    ProductsPageComponent,
    FaqsPageComponent,
    ContactUsPageComponent,
    CabinetsComponent,
    VaultsDoorsComponent,
    MoneyCountingComponent,
    SafesComponent,
    CardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
