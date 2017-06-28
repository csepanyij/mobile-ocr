import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, Loading } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-result',
  templateUrl: 'result.html',
})
export class ResultPage {

  imageData: any;
  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public loadingController: LoadingController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ResultPage');
    this.imageData = this.navParams.get('imageData');
    let loader: Loading = this.navParams.get('loader');
    //loader.dismiss();
  }
}
