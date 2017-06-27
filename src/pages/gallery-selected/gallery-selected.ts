import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';

import { ResultPage } from '../pages';

/**
 * Generated class for the GallerySelectedPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-gallery-selected',
  templateUrl: 'gallery-selected.html',
})
export class GallerySelectedPage {

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public loadingController: LoadingController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GallerySelectedPage');
  }

  readText(): void {
    let loader = this.loadingController.create({
      content: "Loading"
    });
    loader.present();

    setTimeout(() => {
      loader.dismiss();
      this.navCtrl.push(ResultPage);
    }, 3000)
  }

}
