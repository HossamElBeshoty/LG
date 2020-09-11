import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatButtonModule} from '@angular/material/button';
import {MatTabsModule} from '@angular/material/tabs';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatSnackBarModule} from '@angular/material/snack-bar';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatButtonModule,
    MatTabsModule,
    MatGridListModule,
    MatSnackBarModule
  ],
  exports: [
    MatButtonModule,
    MatTabsModule,
    MatGridListModule,
    MatSnackBarModule
  ]
})
export class AngularMaterialModule {
}
