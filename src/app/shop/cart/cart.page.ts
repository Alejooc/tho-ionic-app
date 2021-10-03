import { Component, OnInit } from '@angular/core';
import { TabstateService } from "../../tabstate.service";
import { CartService } from "../cart.service";
@Component({
  selector: 'app-cart',
  templateUrl: './cart.page.html',
  styleUrls: ['./cart.page.scss'],
})
export class CartPage implements OnInit {

  cart=[];

  constructor(public tabs:TabstateService,private carts:CartService) {
    this.loadData();
   }

   async ngOnInit() {
    console.log(await this.cart);
    
  }
  async loadData(){
    this.cart=await this.carts.getData();
    console.log(this.cart);
    
  }
  async removeItem(index){
    await this.carts.removeItem(index)
    this.cart.splice(index,1);
  }
}
