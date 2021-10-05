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

  constructor(route:ActivatedRoute,private router:Router,private auth:AuthService,private rest:RestService) {
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
      this.rest.getUserData("0",info.id,5).subscribe(resp=>{
        this.data = resp.body;  
        console.log(resp.body);
        
        console.log('aja');
            
      })  
  }
}
