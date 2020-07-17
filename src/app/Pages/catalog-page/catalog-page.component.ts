import {Component, OnInit} from '@angular/core';
// tslint:disable-next-line:import-spacing
import {CatalogueService} from "../../Services/catalogue.service";
import {ICatalog} from "../../Models/catalog";
import {environment} from "../../../environments/environment";
import {PageService} from "../../Services/page.service";
import {LangService} from "../../Services/lang.service";

@Component({
  selector: 'app-catalog-page',
  templateUrl: './catalog-page.component.html',
  styleUrls: ['./catalog-page.component.css']
})
export class CatalogPageComponent implements OnInit {
  // catalogData = (catalogData as any).default as [];
  imgApiPath = environment.imageEndPoint;
  catalogues:ICatalog[];
  lang: string;
  constructor(public catalogService: CatalogueService, private langService: LangService) {
    this.langService.getLang().subscribe(res => {
      this.lang = res as string;
      if (this.lang === null) {
        this.lang = 'en';
      }
    });
  }

  ngOnInit(): void {
    // console.log(this.catalogData);
    this.getCatalogue();
  }

  getCatalogue() {
    this.catalogService.getAllCatalogues().subscribe(res => {
      this.catalogues = res as ICatalog[];
    })
  }
}
