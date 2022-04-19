import { Component } from '@angular/core';
import { Browser } from '@capacitor/browser';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  constructor() {}

  openCondorPage(){
    Browser.open({ url: 'https://i-condor.com/' });
  };
  openFacebookCondorPage(){
    Browser.open({ url: 'https://www.facebook.com/IngenieriaCondor94/' });
  };
  openLocationCondor(){
    Browser.open({ url: 'https://goo.gl/maps/9RNicpgJMckQnySQA/' });
  };
  openYoutubeCondorPage(){
    Browser.open({ url: 'https://www.youtube.com/channel/UCkVbRbY7dbZlO6wXBuB26fA/' });
  };
  openInstragramCondorPage(){
    Browser.open({ url: 'https://www.instagram.com/ingenieria.condor//' });
  };
}
