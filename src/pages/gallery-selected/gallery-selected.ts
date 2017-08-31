import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { DomSanitizer } from '@angular/platform-browser';

import { ResultPage } from '../pages';

@IonicPage()
@Component({
  selector: 'page-gallery-selected',
  templateUrl: 'gallery-selected.html',
})
export class GallerySelectedPage {

  imageData: any;
  imageLoaded: boolean = false;
  options: CameraOptions = {
    quality: 100,
    sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
    destinationType: this.camera.DestinationType.DATA_URL,
    encodingType: this.camera.EncodingType.JPEG,
    mediaType: this.camera.MediaType.PICTURE
  }

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public loadingController: LoadingController,
              public camera: Camera,
              private _sanitizer: DomSanitizer) {
  }

  ionViewDidLoad(): void {
    console.log('ionViewDidLoad GallerySelectedPage');
    this.getPicture();
  }

  getPicture(): void {
    let loader = this.loadingController.create({
      content: "Loading"
    });
    loader.present();
    this.camera.getPicture(this.options)
      .then((data) => {
        this.imageData = `data:image/jpeg;base64,${data}`;
        this.imageData = this._sanitizer.bypassSecurityTrustUrl(this.imageData);
        this.imageLoaded = true;
        loader.dismiss();
      }, (err) => {
        loader.dismiss();
        console.log(err);
        alert('Error in gallery: ' + err);
      });
  }

  readText(): void {
    let loader = this.loadingController.create({
      content: 'Loading result'
    });
    loader.present();
    this.navCtrl.push(ResultPage, {
      imageData: this.imageData,
      loader: loader
    });
  }

}
