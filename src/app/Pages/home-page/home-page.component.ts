import {Component, OnInit, AfterViewInit, Inject} from '@angular/core';
import {DOCUMENT} from '@angular/common';
import {PageService} from '../../Services/page.service';
import {IPages} from '../../Models/pages';
import {ISections} from '../../Models/sections';
import {environment} from '../../../environments/environment';
import {LangService} from '../../Services/lang.service';
import {ProductService} from '../../Services/product.service';
import {IProducts} from '../../Models/products';
import {IContact} from "../../Models/contact";
import {ContactsService} from "../../Services/contacts.service";

declare function galleryfunction(): any;

declare function owlCarousel(rtl): any;

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit, AfterViewInit {
  homePage: IPages;
  preloader: boolean;
  contactUsPage: IPages;
  products: IProducts[];
  imgApiPath = environment.imageEndPoint;
  headerSection: ISections;
  collectionVideoSection: ISections;
  trendCollectionSection1: ISections;
  trendCollectionSection2: ISections;
  trendCollectionSection3: ISections;
  catalogueSection: ISections;
  plannerSection: ISections;
  faceBookSection: ISections;
  contactUsSection: ISections;
  trendingItemsSection: ISections;
  lang: string;
  contactList: IContact[];

  constructor(@Inject(DOCUMENT) private document,
              public pageService: PageService,
              private langService: LangService,
              public contactService: ContactsService,
              public productService: ProductService) {
    this.langService.getLang().subscribe(res => {
      this.lang = res as string;
      if (this.lang === null) {
        this.lang = 'en';
      }
    });
  }

  ngOnInit(): void {
    this.preloader = true;
    this.getPage();
    this.getContactUs();
    this.getAllContact();
    this.getTrendProducts();
  }

  ngAfterViewInit(): void {
    // if (localStorage.getItem('language') === 'ar') {
    //   setTimeout(() => {
    //     const list = this.document.getElementsByClassName('tp-parallax-wrap');
    //     for (const item of list) {
    //       const right = item.style.left;
    //       console.log(right);
    //       item.style.right = right;
    //     }
    //   }, 500);
    //
    // }
  }

  getPage() {
    this.pageService.getPageDetails(1).subscribe(res => {
      this.homePage = res as IPages;
    }, error => {
    }, () => {
      this.headerSection = this.homePage.sections.find(c => c.id === 1);
      this.collectionVideoSection = this.homePage.sections.find(c => c.id === 2);
      this.trendCollectionSection1 = this.homePage.sections.find(c => c.id === 3);
      this.trendCollectionSection2 = this.homePage.sections.find(c => c.id === 8);
      this.trendCollectionSection3 = this.homePage.sections.find(c => c.id === 9);
      this.catalogueSection = this.homePage.sections.find(c => c.id === 4);
      this.plannerSection = this.homePage.sections.find(c => c.id === 5);
      this.faceBookSection = this.homePage.sections.find(c => c.id === 7);
      this.trendingItemsSection = this.homePage.sections.find(c => c.id === 10);
      this.preloader = false;
    });
  }

  getContactUs() {
    this.pageService.getPageDetails(3).subscribe(res => {
      this.contactUsPage = res as IPages;
    }, error => {
    }, () => {
      this.contactUsSection = this.contactUsPage.sections.find(c => c.id === 11);
    });
  }

  getTrendProducts() {
    this.productService.getHomePageTrendingItems().subscribe(res => {
      this.products = res as IProducts[];
    }, error => {
    }, () => {
      setTimeout(() => {
        galleryfunction();
        if (localStorage.getItem('language') === 'ar') {
          owlCarousel(true);
        } else {
          owlCarousel(false);
        }
      }, 0);
    });
  }

  getYouTubeId(url) {
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url?.match(regExp);

    return (match && match[2]?.length === 11)
      ? match[2]
      : null;
  }

  getAllContact() {
    this.contactService.getAllContacts().subscribe(res => {
      this.contactList = res as IContact[];
    });
  }
}
