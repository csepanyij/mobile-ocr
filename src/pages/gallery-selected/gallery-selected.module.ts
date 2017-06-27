import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GallerySelectedPage } from './gallery-selected';

@NgModule({
  declarations: [
    GallerySelectedPage,
  ],
  imports: [
    IonicPageModule.forChild(GallerySelectedPage),
  ],
  exports: [
    GallerySelectedPage
  ]
})
export class GallerySelectedPageModule {}
