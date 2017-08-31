import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage, GallerySelectedPage, CameraSelectedPage, ResultPage } from '../pages/pages';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Camera } from '@ionic-native/camera';
import { HTTP } from '@ionic-native/http';

import { SafePipe } from '../shared/sanitizer-pipe';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    GallerySelectedPage,
    CameraSelectedPage,
    ResultPage,
    SafePipe
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    GallerySelectedPage,
    CameraSelectedPage,
    ResultPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Camera,
    HTTP,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
