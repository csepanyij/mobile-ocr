import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, Loading } from 'ionic-angular';
import { Http } from '@angular/http';
import 'rxjs/Rx';

@IonicPage()
@Component({
  selector: 'page-result',
  templateUrl: 'result.html',
})
export class ResultPage {

  imageData: any;
  responseData: any;
  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public loadingController: LoadingController,
              public http: Http) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ResultPage');
    this.imageData = this.navParams.get('imageData');
    let loader: Loading = this.navParams.get('loader');
    loader.dismiss();
    this.responseData = this.imageData;

    // SANITIZE BEFORE POST REQUEST!!! (SafeValue must use [property]=binding: )
    this.http.post('https://mobile-ocr.mybluemix.net/recognizeImage', this.imageData, {})
      .map(res => res.text())
      .subscribe((res) => {
        alert(res);
        this.responseData = res;
      }, (err) => {
        alert('Error: ' + err);
      });
  }
}
