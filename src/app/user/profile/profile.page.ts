import { getLocaleFirstDayOfWeek } from '@angular/common';
import { Component, OnInit,ChangeDetectionStrategy,AfterViewInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import {  AuthService} from "../../auth/auth.service";
import { RestService } from "../../rest/rest.service";
@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
  changeDetection:ChangeDetectionStrategy.Default
})
export class ProfilePage implements OnInit {
  data:any;

  constructor(private auth:AuthService,route:ActivatedRoute,private router:Router,private rest:RestService ) {
    route.params.subscribe(async val => {
      if (await this.auth.validate() === false) {
        this.router.navigate(['/login','profile']);
        
      }
      this.getUserInfo(); 
    });
     
    }

 
  ngOnInit() {
    this.getUserInfo();  
  }

  async getUserInfo(){
    const info = await this.auth.getData();    
    this.rest.getUserData(info.id,"0",1).subscribe(resp=>{
      this.data = resp.body;  
      console.log('aja');
          
    })  
  }

}
