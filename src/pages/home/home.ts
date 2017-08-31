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

  sendPostReq(): void {
    this.http.post('http://mobile-ocr.eu-3.evennode.com/recognizeImage', {
        text : 'test text for post req/res'
    }, {})
      .map(res => res.json())
      .subscribe((res) => {
        alert(JSON.stringify(res));
      }, (err) => {
        alert('Error: ' + err);
      });
  }
}
