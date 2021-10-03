import { LEADING_TRIVIA_CHARS } from '@angular/compiler/src/render3/view/template';
import { Component } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { RestService} from "./rest/rest.service";
import { ParamMap, Router, ActivatedRoute,NavigationEnd } from '@angular/router';
import { TabstateService } from "./tabstate.service";
import {filter} from 'rxjs/operators';
import lang from "./languages/es.json";
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  t=lang.lang;
  titlemenu="Categorias";
  categories;
  subcategorias;
  submenu =false;

  constructor(public menu: MenuController,
    private rest:RestService,
    private router: Router,
    private rutaActiva: ActivatedRoute,
    public tabstateService:TabstateService,
    private statusBar: StatusBar) {

    this.loadMenu();
    //router.events.subscribe((url:any) => console.log(url));
    router.events.pipe(
      filter(event => event instanceof NavigationEnd)
  )
      .subscribe(event => {
          let url = event['url'].split('/')
          console.log('tabs url',url);
          
          if (url[2] != 'producto' && url[2] != 'cart') {
            this.tabstateService.setState('producto',true)
          }else{
            this.tabstateService.setState('producto',false)
          }          
      });
    // set status bar color
    this.statusBar.backgroundColorByHexString('#00b6c7');
  }
  
  
  validmenu(e,url){
    const ur = url.split('/');
    if (e==1) {
      
      if (ur[1] == 'promo') {
        this.router.navigate(['tienda/promo',this.convertURL(url)]);
      }else{
        this.router.navigate(['tienda/category',this.convertURL(url)]);
      }
      this.menu.close('menua');
    }
  }


  public showsubcate(e,data,active){
    if (e) {
      if (data !== null) {
        this.subcategorias = [...data[0].detail]
        this.titlemenu = data[0].nombre
      }
    }else{
      this.titlemenu ="Categorias";
    }
    this.submenu =e;    
  }

  convertURL(url){
    const urlarr = url.split('/');
    return urlarr[2];
  }

  loadMenu(){
    this.rest.getCategories().subscribe(resp=>{
      this.categories=resp.body;
      console.log(this.categories); 

    })    
  }

  closeMenu() {
    this.menu.close('menua');    
  }

  openEnd() {
    this.menu.open('end');
  }

  openCustom() {
    this.menu.enable(true, 'custom');
    this.menu.open('custom');
  }
}
