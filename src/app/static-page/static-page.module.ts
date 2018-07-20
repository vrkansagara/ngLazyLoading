import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StaticPageComponent } from './container/static-page/static-page.component';

@NgModule({
  declarations: [
    StaticPageComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    StaticPageComponent
  ]
})

export class StaticPageModule {}
