import { Component, inject } from '@angular/core';
import { AdService } from '../ad.service';

@Component({
  selector: 'app-ad-banner',
  templateUrl: './ad-banner.component.html',
  styleUrls: ['./ad-banner.component.css']
})
export class AdBannerComponent {

  private adList = inject(AdService).getAds();

  private currentAdIndex = 0;

  get currentAd() {
    return this.adList[this.currentAdIndex];
  }

  displayNextAd() {
    this.currentAdIndex++;
    if(this.currentAdIndex === this.adList.length) {
      this.currentAdIndex = 0;
    }
  }

}
