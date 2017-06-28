import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';

/**
 * Generated class for the ResultPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
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
  }

}
