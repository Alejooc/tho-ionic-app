import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map, retry } from 'rxjs/operators';
import { Home } from '../interfaces/home';
import { Categories } from '../interfaces/categories';


@Injectable({
  providedIn: 'root'
})
export class RestService {

  url = 'https://tuhogaronline.com/backTHO/index.php/';

  constructor(public http: HttpClient) { }

  // home page services
  getHome():Observable<HttpResponse<Home>>{
    return this.http.get<Home>(this.url+'storemain/home/',{ observe: 'response' });
  }

  getnewprodsHome(param):Observable<any>{
    return this.http.get<Home>(this.url+'storemain/productsnav/'+param,{ observe: 'response' });
  }

  //menu categories component service
  getCategories():Observable<HttpResponse<Categories>>{
    return this.http.get<Categories>(this.url+'storemain/menu/menu/3',{ observe: 'response' });
  }

  // filter Material Data
  getMaterial():Observable<any>{
    return this.http.get(this.url+'storecat/products_material/',{ observe: 'response' })
  }

  // filter Medida data
  getMedidas():Observable<any>{
    return this.http.get(this.url+'storecat/products_medidas/',{ observe: 'response' })
  }
  // shop by category products
  getProductsCategory(fill,slug,order,pag,price,material,medida,tipo):Observable<any>{
    let _urlParams: any = new FormData();
    _urlParams.append('Fil', fill);
    _urlParams.append('slug', slug);
    _urlParams.append('order', order);
    _urlParams.append('pag', pag);
    _urlParams.append('price', price);
    _urlParams.append('material', material);
    _urlParams.append('medida', medida);
    _urlParams.append('tipo',tipo);

    return this.http.post(this.url+'storecat/category_products2b/',_urlParams);
  }

  // shop by promo category products
  getProductsPromo(fill,slug,cat,order,pag,price,material,medida):Observable<any>{
    let _urlParams: any = new FormData();
    _urlParams.append('Fil', fill);
    _urlParams.append('slug', slug);
    _urlParams.append('Cat',cat);
    _urlParams.append('order', order);
    _urlParams.append('pag', pag);
    _urlParams.append('price', price);
    _urlParams.append('material', material);
    _urlParams.append('medida', medida);
    

    return this.http.post(this.url+'storecat/promo_products/',_urlParams);
  }

   // get info landing promo
   getDataLanding(id):Observable<any>{
    let _urlParams: any = new FormData();
    _urlParams.append('id', id);
    return this.http.post(this.url+'storecat/Datalanding/',_urlParams);
  }

  // product by slug
  getProductslug(slug:string):Observable<any>{
    return this.http.get(this.url+'storecat/product/slug/'+slug,{ observe: 'response' });
  }

  //related Products by slug
  getRelatedProds(slug:string):Observable<any>{
    return this.http.get(this.url+'storemain/products_related/slug/'+slug,{ observe: 'response' });
  }

  //get user data by user ID
  getUserData(id:string,id2:string,type:Number):Observable<any>{
    return this.http.get(this.url+"storeclient/data/id/"+id+"/id2/"+id2+"/type/"+type,{ observe: 'response' });
  }

}
