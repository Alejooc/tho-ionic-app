import { Component,NgZone } from '@angular/core';
import { MenuController, NavController } from '@ionic/angular';
import { RestService} from "./rest/rest.service";
import { ParamMap, Router, ActivatedRoute,NavigationEnd } from '@angular/router';
import { TabstateService } from "./tabstate.service";
import {filter} from 'rxjs/operators';
import lang from "./languages/es.json";
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Deeplinks } from '@ionic-native/deeplinks/ngx';
import { ProductoPage } from "./shop/producto/producto.page";
import {  PromoPage } from "./shop/promo/promo.page";
import { AnalyticsFirebase } from '@ionic-native/analytics-firebase/ngx';
import { ShipmentTrackingService } from "./plugins/shipmentTracking/shipment-tracking.service";
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
    private statusBar: StatusBar,
    private deeplinks: Deeplinks,
    public navController :NavController,
    private zone: NgZone,
    private analyticsFirebase: AnalyticsFirebase,
    private ShipmentTrackingService:ShipmentTrackingService) {

    /*this.ShipmentTrackingService.getDataShipmentEnvia().subscribe(resp=>{
  
      console.log(resp); 

    });*/

          this.analyticsFirebase.setCurrentScreen('Home')
          .then(() => console.log('View successfully tracked'))
          .catch(err => console.log('Error tracking view:', err));
          
      this.deeplinks.route({
        '/tienda/producto/:slug': ProductoPage,
        '/tienda/promo/:slug': PromoPage
      }).subscribe(match => {
          // match.$route - the route we matched, which is the matched entry from the arguments to route()
          // match.$args - the args passed in the link
          // match.$link - the full link data
          // Run the navigation in the Angular zone
        this.zone.run(() => {
          this.router.navigate([match.$link.path]);
        });
          console.log('Successfully matched route', match);
        }, nomatch => {
          // nomatch.$link - the full link data
          console.error('Got a deeplink that didn\'t match', nomatch);
        });
    this.loadMenu();
    //router.events.subscribe((url:any) => console.log(url));
    router.events.pipe(
      filter(event => event instanceof NavigationEnd)
      )
      .subscribe(event => {
          let url = event['url'].split('/')
          console.log('tabs url',url);
          
          if (url[2] != 'producto' && url[2] != 'cart'&& url[2] != 'search'&& url[1] != 'login') {
            this.tabstateService.setState('producto',true)
          }else{
            this.tabstateService.setState('producto',false)
          }          
      });
    // set status bar color
    this.statusBar.backgroundColorByHexString('#00b6c7');
  }
  
  
  validmenu(e,url){
    console.log(url);
    if (url) {
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
