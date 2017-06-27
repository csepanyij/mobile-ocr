import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CameraSelectedPage } from './camera-selected';

@NgModule({
  declarations: [
    CameraSelectedPage,
  ],
  imports: [
    IonicPageModule.forChild(CameraSelectedPage),
  ],
  exports: [
    CameraSelectedPage
  ]
})
export class CameraSelectedPageModule {}
