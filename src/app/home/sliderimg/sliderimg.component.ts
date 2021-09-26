import { Component, OnInit,Input  } from '@angular/core';

@Component({
  selector: 'app-sliderimg',
  templateUrl: './sliderimg.component.html',
  styleUrls: ['./sliderimg.component.scss'],
})
export class SliderimgComponent implements OnInit {
  slideOpts = {
    initialSlide: 1,
    slidesPerView: 1.5,
    spaceBetween: 5,
    speed: 400,
    loop: true,
    centeredSlides: true,
    autoplay: {
      delay: 2000,
      disableOnInteraction: false,
    },
    pagination : {
      el: '.swiper-pagination',
      clickable: true
    }
};
  @Input()
  banners;

  constructor() { }

  ngOnInit() {
    
  }

}
