import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-sliderimg',
  templateUrl: './sliderimg.component.html',
  styleUrls: ['./sliderimg.component.scss'],
})

export class SliderimgComponent implements OnInit {
  
  @Input()
  imgs;
  @Input()
  etiqueta;
  @Input()
  imgpromo;

  slideOpts = {
    initialSlide: 0,
    loop: false,
    pagination : {
      el: '.swiper-pagination',
      clickable: true
    }
};
  constructor() { }

  ngOnInit() {}

}
