import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Http } from '@angular/http';
import 'rxjs/Rx';

import { GallerySelectedPage, CameraSelectedPage } from '../pages';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController,
              public http: Http) {

  }

  galleryTapped(): void {
    this.navCtrl.push(GallerySelectedPage);
  }

  cameraTapped(): void {
    this.navCtrl.push(CameraSelectedPage);
  }

  getPicture(): void {
    
  }
}
