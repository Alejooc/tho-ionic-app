import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import {  AuthService} from "../../auth/auth.service";
import { RestService } from "../../rest/rest.service";

@Component({
  selector: 'app-buy-record',
  templateUrl: './buy-record.page.html',
  styleUrls: ['./buy-record.page.scss'],
})
export class BuyRecordPage implements OnInit {
  data: any;

  constructor(route:ActivatedRoute,
    private router:Router,
    private auth:AuthService,
    private rest:RestService,) {
    route.params.subscribe(async val => {
      console.log(await this.auth.validate());
      
      if (await this.auth.validate() === false) {

        this.router.navigate(['/login','buy-record']);
      }
      this.getMyPurchases();
    });
   }

  ngOnInit() {
  }
  async getMyPurchases(){
   
      const info = await this.auth.getData();    
      this.rest.getUserData("0",info.id,5).subscribe(async resp=>{
        for (const i of resp.body) {          
          i.extra = this.getExtradataPruchases(i.id);
          i.shipmentTracking = {
            status:'Entregado'
          }
        }
        this.data = resp.body;  
        console.log(resp.body);
      }) 
      
     
  }
  getExtradataPruchases(id){
    let data={};
    let datos;
      this.rest.getUserData("0", id, 6).subscribe(resp => {
        data = resp.body;
        console.log(data);
      })
   
  }

  shortname(name){
    let shortname = name.substr(0,30)    
    return shortname.toLowerCase()
    .trim()
    .split(' ')
    .map( v => v[0].toUpperCase() + v.substr(1) )
    .join(' ');
  }
}
