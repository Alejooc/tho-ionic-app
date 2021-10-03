import { Component, OnInit,Input } from '@angular/core';
import { RestService } from "../../../rest/rest.service";
import { CategoryPage } from "../../category/category.page";
@Component({
  selector: 'app-related',
  templateUrl: './related.component.html',
  styleUrls: ['./related.component.scss'],
})
export class RelatedComponent implements OnInit {
  @Input() cat;

  products=[];
  slideOpts = {
    initialSlide: 1,
    slidesPerView: 2.3,
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
  constructor(private rest :RestService,public catemd:CategoryPage) { }

  ngOnInit() {
    this.getRelatedProds();
  }
  getRelatedProds(){
    this.rest.getRelatedProds(this.cat).subscribe(resp=>{
      console.log(resp.body.prods[0].img[0]);   
      this.products=[...resp.body.prods];
    })
  }

}
