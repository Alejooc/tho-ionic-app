import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
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

  //menu categories component service
  getCategories():Observable<HttpResponse<Categories>>{
    return this.http.get<Categories>(this.url+'storemain/menu/menu/3',{ observe: 'response' });
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

  // product by slug
  getProductslug(slug:string):Observable<any>{
    return this.http.get(this.url+'storecat/product/slug/'+slug,{ observe: 'response' });
  }

}
