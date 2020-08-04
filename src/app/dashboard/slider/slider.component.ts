import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slider',
  template: `
    <ion-content style="height: 200px">
      <ion-slides pager="true" [options]="slideOpts">
        <ng-content></ng-content>
      </ion-slides>
    </ion-content>
  `
})
export class SliderComponent implements OnInit {

  // Optional parameters to pass to the swiper instance.
  // See http://idangero.us/swiper/api/ for valid options.
  slideOpts = {
    initialSlide: 1,
    speed: 400
  };

  constructor() { }

  ngOnInit() {}

}
