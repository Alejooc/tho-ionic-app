import { Component, OnInit } from '@angular/core';
import { RestService } from "../rest/rest.service";

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  constructor(private rest:RestService) {}

  bannersData=[];
  dosimg=[];
  home2=[];
  navcate=[]
  ngOnInit() {
    this.rest.getHome().subscribe(resp=>{
      console.log(resp);
      this.bannersData= resp.body.bannerppal // noticias home
      this.home2 = resp.body.home2; // more options home
      this.dosimg = this.home2[0]; // dos imagenes banners
      this.navcate= resp.body.navcate;

    })
  }
}
