import { Component, Input, OnInit } from '@angular/core';
import { RestService } from "../../rest/rest.service";
import { CategoryPage } from "../../shop/category/category.page";

@Component({
  selector: 'app-newsprods',
  templateUrl: './newsprods.component.html',
  styleUrls: ['./newsprods.component.scss'],
})
export class NewsprodsComponent implements OnInit {

  @Input() categories;
  prods=[];
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
      stopOnLastSlide: false
    }
  };
  slideOpts2 = {
    initialSlide: 0,
    slidesPerView: 3.5,
    spaceBetween: 2,
    centradoSlides: true, 
    speed: 400,
    loop: false
  };
  constructor(private rest:RestService,public catemd:CategoryPage) { }

  ngOnInit() {
    console.log(this.categories);
    this.getNewProds(this.categories[0].categoria);
  }
  getNewProds(cat){
    this.rest.getnewprodsHome(cat).subscribe(resp=>{
      console.log(resp);
      for (const ite of resp.body.home2) {
        if (ite.type == 12) {
          this.prods=[...ite.prods];          
        }
      }
     
    })
    console.log(this.prods);
    
  }
}
