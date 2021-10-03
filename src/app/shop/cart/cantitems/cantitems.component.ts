import { Component, OnInit } from '@angular/core';
import { CartService } from '../../cart.service';

@Component({
  selector: 'app-cantitems',
  templateUrl: './cantitems.component.html',
  styleUrls: ['./cantitems.component.scss'],
})
export class CantitemsComponent implements OnInit {
  cart=[];
  constructor(
    private cartService:CartService
  ) { }

  ngOnInit() {
    this.loadData();
  }

  async loadData(){
    this.cart=await this.cartService.getData();
    return this.cart.length;
  }
}
