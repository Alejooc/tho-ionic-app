import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { RestService } from "../../rest/rest.service";
import { MenuController } from '@ionic/angular';
import { AppComponent } from "../../app.component";
import { TabstateService } from "../../tabstate.service";
import { ToastController } from '@ionic/angular';


@Component({
  selector: 'app-producto',
  templateUrl: './producto.page.html',
  styleUrls: ['./producto.page.scss'],
})
export class ProductoPage implements OnInit {

  imgsData=[];
  slug = this.rutaActiva.snapshot.params.slug;
  product=null;
  prodProps=[];
  currentNumber = 0;
  constructor(public toastController: ToastController,private rest : RestService,private rutaActiva: ActivatedRoute,private menu:MenuController,private router:Router,public appcon:AppComponent) { }

  ngOnInit() {
    this.getProductBySlug();
    this.menu.enable(true, 'menua'); 
       
  }

 
  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Producto agregado a la bolsa',
      duration: 2000
    });
    toast.present();
  }

  increment () {
    this.currentNumber++;
  }

  decrement () {
    this.currentNumber--;
  }

  getProductBySlug(){
    this.rest.getProductslug(this.slug).subscribe(resp=>{
      console.log(resp.body);
      this.product= resp.body;
      this.imgsData = [...resp.body.img];
      this.prodProps=[...resp.body.detail]      
    })
  }

  openCustom() {
    this.menu.enable(true, 'custom');
    this.menu.open('custom');
  }
  close(){
    this.menu.close('custom');
    this.menu.enable(true, 'menua');

  }

}
