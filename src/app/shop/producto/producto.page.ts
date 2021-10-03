import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { RestService } from "../../rest/rest.service";
import { MenuController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';
import { CartService } from "../cart.service";

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

  cart=[];
  cantItems: any;

  constructor(private socialSharing: SocialSharing,
    public toastController: ToastController,
    private rest : RestService,
    private rutaActiva: ActivatedRoute,
    private menu:MenuController,
    private router:Router,
    private cartService:CartService
    ) {
      this.loadData();
     }

  async ngOnInit() {
    this.getProductBySlug();
    this.menu.enable(true, 'menua');     
    
  }

  async loadData(){
    this.cart=await this.cartService.getData();
    this.cantItems =this.cart.length;
  }
  async addData(){
    const prodcart={
      cantidad:2,
      category:this.product.category,
      category_id: this.product.category_id,
      categoryslug: this.product.categoryslug,
      id:this.product.id,
      imgTitle:null,
      imgUrl:this.product.img[0].url,
      nombre:this.product.name,
      price:this.product.detail[0].price,
      price2:this.product.detail[0].price2,
      pricepromo:this.product.pricepromo,
      promo:this.product.promo,
      prop:this.product.prop,
      sku:this.product.detail[0].sku,
      slug:this.product.slug,
      superpromo:this.product.superpromo,
      variation:"",
      weight:this.product.weight

    }
    await this.cartService.addData(prodcart);
    this.loadData();
    this.presentToast();
  }
  

  openshare(){
    let msg ="Me gustó este producto "+this.product.name+". ¡Lo quiero!";
    this.socialSharing.share(msg).then(()=>{
      console.log('good');
      
    }).catch(()=>{
      console.log('nooooo');
    })
  }
  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Producto agregado a la bolsa',
      duration: 2000
    });
    toast.present();
  }
  test(){
    this.addData();    
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
