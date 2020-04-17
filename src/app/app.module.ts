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
import {CardComponent} from './Widgets/card/card.component';
import {CardTwoComponent} from './Widgets/card-two/card-two.component';
import {NgxProgressiveImageLoaderModule, IImageLoaderOptions} from 'ngx-progressive-image-loader';
import {HttpClientModule, HttpClient} from '@angular/common/http';
import {TranslateModule, TranslateLoader} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

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
    CardComponent,
    CardTwoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: createTranslateLoader,
        deps: [HttpClient]
      }
    }),
    NgxProgressiveImageLoaderModule.forRoot({
      // rootMargin must be specified in pixels or percent
      rootMargin: '30px',
      threshold: 0.1,
      // css filter
      filter: 'blur(3px) drop-shadow(0 0 0.75rem crimson)',
      // image width / height ratio for image holder
      imageRatio: 4 / 3,
      // loading image in placeholder. Can be URL or base64
      placeholderImageSrc:
      // tslint:disable-next-line:max-line-length
        ''
    } as IImageLoaderOptions)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
