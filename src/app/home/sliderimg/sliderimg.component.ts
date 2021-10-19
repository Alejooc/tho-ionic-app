import { Component, OnInit,Input  } from '@angular/core';

@Component({
  selector: 'app-sliderimg',
  templateUrl: './sliderimg.component.html',
  styleUrls: ['./sliderimg.component.scss'],
})
export class SliderimgComponent implements OnInit {
  slideOpts = {
    initialSlide: 0,
    speed: 700,
    loop: true,
    centeredSlides: true,
    autoplay: {
      delay: 8000,
      disableOnInteraction: false,
      stopOnLastSlide: false

    }
};
  @Input()
  banners;

  constructor() { }

  ngOnInit() {
    
  }

}
