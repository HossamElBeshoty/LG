import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HomePageComponent} from './Pages/home-page/home-page.component';
import {NavBarComponent} from './Layouts/nav-bar/nav-bar.component';
import {FooterComponent} from './Layouts/footer/footer.component';
import {AboutUsPageComponent} from './Pages/about-us-page/about-us-page.component';
import {ProductsPageComponent} from './Pages/products-page/products-page.component';
import {ContactUsPageComponent} from './Pages/contact-us-page/contact-us-page.component';
import {CardComponent} from './Widgets/card/card.component';
import {CardTwoComponent} from './Widgets/card-two/card-two.component';
import {NgxProgressiveImageLoaderModule, IImageLoaderOptions} from 'ngx-progressive-image-loader';
import {HttpClientModule, HttpClient} from '@angular/common/http';
import {TranslateModule, TranslateLoader} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {CardImageCarouselComponent} from './Widgets/card-image-carousel/card-image-carousel.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AngularMaterialModule} from './Modules/angular-material.module';
import {RouteCardComponent} from './Widgets/route-card/route-card.component';
import {PreloaderComponent} from './Components/preloader/preloader.component';
import {CatalogPageComponent} from './Pages/catalog-page/catalog-page.component';
import {NotFoundPageComponent} from './Pages/not-found-page/not-found-page.component';
import {DownloadCardComponent} from './Widgets/download-card/download-card.component';
import {MoneyCountingCardComponent} from './Widgets/money-counting-card/money-counting-card.component';
import {PrimeNgModule} from './Modules/prime-ng.module';
import {MathcesCategoryPipe} from './Pipes/filter.pipe';
import {CategoryCarouselCardComponent} from './Widgets/category-carousel-card/category-carousel-card.component';
import {SafePipe} from './Pipes/SafePipe';
import {ProductCategoryComponent} from './Components/product-category/product-category.component';
import {ProductCategoryDetailsComponent} from './Components/product-category-details/product-category-details.component';
import {ProductCategoryFilterDetailsComponent} from './Components/product-category-filter-details/product-category-filter-details.component';
import {ProductFilterByTagComponent} from './Components/product-filter-by-tag/product-filter-by-tag.component';
import { SingleProductComponent } from './Components/single-product/single-product.component';

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
    ProductsPageComponent,
    ContactUsPageComponent,
    CardComponent,
    CardTwoComponent,
    CardImageCarouselComponent,
    RouteCardComponent,
    PreloaderComponent,
    CatalogPageComponent,
    NotFoundPageComponent,
    DownloadCardComponent,
    MoneyCountingCardComponent,
    MathcesCategoryPipe,
    SafePipe,
    CategoryCarouselCardComponent,
    ProductCategoryComponent,
    ProductCategoryDetailsComponent,
    ProductCategoryFilterDetailsComponent,
    ProductFilterByTagComponent,
    SingleProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AngularMaterialModule,
    PrimeNgModule,
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
      filter: 'blur(3px) drop-shadow(0 0 0.75rem #fff)',
      // image width / height ratio for image holder
      imageRatio: 16 / 9,
      placeholderImageSrc: './assets/images/loader.gif'
      // loading image in placeholder. Can be URL or base64
    } as IImageLoaderOptions),
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
