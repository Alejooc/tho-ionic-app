import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RestService } from "../rest/rest.service";
import { CartService } from "../shop/cart.service";
import { AuthService } from "../auth/auth.service";
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  cartCant;
  bannersData=[];
  dosimg=[];
  home2=[];
  navcate=[]
  login;
  constructor(private rest:RestService,private cart:CartService,route:ActivatedRoute,private router:Router,
    private auth:AuthService) {
    route.params.subscribe(async val => {

      this.cartCant= await  this.cart.getCantidad();
      this.login= await this.auth.validate();
    });
  }

  
  ngOnInit() {
    console.log(this.login);
    
    this.rest.getHome().subscribe(resp=>{
      console.log(resp);
      this.bannersData= resp.body.bannerppal // noticias home
      this.home2 = resp.body.home2; // more options home
      this.dosimg = this.home2[0]; // dos imagenes banners
      this.navcate= resp.body.navcate;

    })
  }
}
