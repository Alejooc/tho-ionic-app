import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { TabstateService } from "../../tabstate.service";
import { CartService } from "../cart.service";
@Component({
  selector: 'app-cart',
  templateUrl: './cart.page.html',
  styleUrls: ['./cart.page.scss'],
  changeDetection:ChangeDetectionStrategy.Default
})
export class CartPage implements OnInit {

  cart=[];
  totalPay=0;
  currentNumber:number=0;
  
  constructor(public tabs:TabstateService,private carts:CartService) {
    this.loadData();
   }

   async ngOnInit() {
    console.log(await this.cart);
    
  }
  async loadData(){
    this.cart=await this.carts.getData();
    for (const i of this.cart) {
      if (i.pricepromo >0 ) {
        this.totalPay = this.totalPay+i.pricepromo*i.cantidad
      }
      else{
        this.totalPay=this.totalPay+parseInt(i.price2)*i.cantidad
      }
    }
    console.log(this.cart);
  }
  async removeItem(index){
    await this.carts.removeItem(index)
    this.cart.splice(index,1);
    this.totalPay=0;
    for (const i of this.cart) {
      if (i.pricepromo >0 ) {
        this.totalPay = this.totalPay+i.pricepromo*i.cantidad
      }
      else{
        this.totalPay=this.totalPay+parseInt(i.price2)*i.cantidad
      }
    }
  }
  total(data){
    if (data.p3 > 0) {
      return data.p3;
    }else{
      return data.p2;
    }
  }

  increment () {
    this.currentNumber++;
  }

  decrement () {
    this.currentNumber--;
  }
}
