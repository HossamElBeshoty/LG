import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BreadcrumbModule} from 'primeng/breadcrumb';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    BreadcrumbModule
  ],
  exports: [
    BreadcrumbModule
  ]
})
export class PrimeNgModule {
}
