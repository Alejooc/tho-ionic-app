import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss'],
})
export class CategoriesComponent implements OnInit {

  @Input() 
    categories;
  @Input()
    promo;

  slideOpts = {
    initialSlide: 1,
    slidesPerView:2.0,
    spaceBetween: 4,
    speed: 400,
    loop: true,
    centeredSlides: true,
    autoplay: {
      delay: 2000,
      disableOnInteraction: false,
      stopOnLastSlide: false
    }
  };
  constructor() { }

  ngOnInit() {}

}
