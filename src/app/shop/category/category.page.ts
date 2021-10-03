import { Component, OnInit,ViewChild } from '@angular/core';
import { RestService } from "../../rest/rest.service";
import { AppComponent } from "../../app.component";
import { IonInfiniteScroll } from '@ionic/angular';
import { ParamMap, Router, ActivatedRoute } from '@angular/router';
import { TabstateService } from "../../tabstate.service";


@Component({
  selector: 'app-category',
  templateUrl: './category.page.html',
  styleUrls: ['./category.page.scss'],
})
export class CategoryPage implements OnInit {
  noproducts=[
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
  ];
  reload=false;
  products:any;
  totalprods=0;
  titlepag="Categoria";
  pagina=0;
  totalpags=0;
  noprods=false;
  slug=this.rutaActiva.snapshot.params.slug;

  constructor(public tabstateService:TabstateService,private rest:RestService,private appcon:AppComponent,private rutaActiva: ActivatedRoute,private router:Router) { }

  @ViewChild(IonInfiniteScroll) infiniteScroll: IonInfiniteScroll;

  loadData(event) {
    setTimeout(() => {
      this.rest.getProductsCategory('[]',this.slug,undefined,this.pagina,undefined,"",undefined,"").subscribe(resp=>{
        console.log(resp);
        for (const i of resp.prods) {
          this.products.push(i);
        }
        this.titlepag =resp.cat.name;
      })
      if (this.pagina <= this.totalpags) {
        this.pagina = this.pagina+1;
        console.log('pagina',this.pagina);
      }
      console.log('total paginas',this.totalpags);
      console.log('Done');
      event.target.complete();
      // App logic to determine if all data is loaded
      // and disable the infinite scroll
      if (this.pagina >= this.totalpags) {
        event.target.disabled = true;
        console.log('yaaaa weeee');
      }
      //this.toggleInfiniteScroll();
    }, 500);
  }

  toggleInfiniteScroll() {
    this.infiniteScroll.disabled = !this.infiniteScroll.disabled;
  }

  doRefresh(event) {
    console.log('Begin async operation');
    this.reload=true;
    this.products=[];
    this.pagina=0;
    this.toggleInfiniteScroll()
    setTimeout(() => {
      this.getProducts();
    }, 1500);
    setTimeout(() => {
      console.log('Async operation has ended');
      this.reload=false;
      event.target.complete();
    }, 2000);
  }

  ngOnInit() {
    this.getProducts();
    this.tabstateService.setState('producto',true)

    console.log(this.rutaActiva.snapshot.params);
    
  }
  backcategory(){
    this.appcon.menu.enable(true, 'menua');
    this.appcon.menu.open('menua')
    this.appcon.loadMenu();
    if (this.appcon.subcategorias === undefined) {
      console.log('no definido');
    }else{
      console.log(this.appcon.subcategorias);
      let data=[{
        nombre:'test',
        detail:this.appcon.subcategorias}]
      this.appcon.showsubcate(true,data,null)

    }
  }
  getProducts(){
    this.rest.getProductsCategory('[]',this.slug,undefined,this.pagina,undefined,"",undefined,"").subscribe(resp=>{
      console.log(resp);
      if (resp.total != '0') {
          this.products=[...resp.prods!];
          this.titlepag =resp.cat.name;
          this.totalprods = parseInt(resp.total);
          this.totalpags=parseInt(resp.pagin);
      }else{
        console.log('nada');
        this.titlepag =resp.cat.name;
        this.noprods=true;
      }
      

    })
  }
  caldcto(prices){
    //console.log(prices);
    let dcto = 100*prices[0]/prices[1] -100;
    if (prices.length==3){
       let promodcto = parseInt(prices[2])-Math.trunc(dcto)
      return -promodcto;
    }else{
      return Math.trunc(dcto);
    }
  }
  shortname(name){
    let shortname = name.substr(0,21)    
    return shortname.toLowerCase()
    .trim()
    .split(' ')
    .map( v => v[0].toUpperCase() + v.substr(1) )
    .join(' ');
  }

  goToProduct(slug){
    this.router.navigate(['tienda/producto/',slug]);

  }
}
