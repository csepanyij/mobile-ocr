import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { DomSanitizer } from '@angular/platform-browser';


import { ResultPage } from '../pages';

@IonicPage()
@Component({
  selector: 'page-camera-selected',
  templateUrl: 'camera-selected.html',
})
export class CameraSelectedPage {

  imageData: any;
  imageTag: string;
  imageLoaded: boolean = false;
  
  options: CameraOptions = {
    quality: 100,
    sourceType: this.camera.PictureSourceType.CAMERA,
    destinationType: this.camera.DestinationType.DATA_URL,
    encodingType: this.camera.EncodingType.JPEG,
    mediaType: this.camera.MediaType.PICTURE
  }  

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public camera: Camera,
              private _sanitizer: DomSanitizer,
              public loadingController: LoadingController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CameraSelectedPage');
    this.takePicture();
  }

  takePicture(): void {
    this.imageLoaded = false;
    let loader = this.loadingController.create({
      content: 'Loading'
    });
    loader.present();
    this.camera.getPicture(this.options)
      .then((data) => {
        this.imageData = `data:image/jpeg;base64,${data}`;
        this.imageData = this._sanitizer.bypassSecurityTrustUrl(this.imageData);
        loader.dismiss();
      }, (err) => {
        console.log(err);
        loader.dismiss();
        alert('Error: ' + err);
      });
  }

  readText(): void {
    this.navCtrl.push(ResultPage);
  }
}
