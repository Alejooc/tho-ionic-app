import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map, retry, take } from 'rxjs/operators';
import { config } from "./config";


@Injectable({
  providedIn: 'root'
})
export class ShipmentTrackingService {

  url = 'https://tuhogaronline.com/backTHO/index.php/';

  constructor(public http: HttpClient) { 
    console.log(config);
    
  }

  // home page services
  getHome():Observable<any>{
    return this.http.get(this.url+'storemain/home/',{ observe: 'response' });
  }

   // get info guia servi
   getDataShipmentServi(guia:string):Observable<any>{
    const data = {
      datorespuestaUsuario: "0",
      idValidacionUsuario: "0",
      idpais: 1,
      lenguaje: "es",
      numeroGuia: "2105250891",
      tipoDatoValidar: "0"}
    return this.http.post(config.servers.servientrega.server+config.servers.servientrega.router.shipmentTracking,data);
  }

  // get info guia envia
  getDataShipmentEnvia(guia:string):Observable<any>{
  
      return this.http.get(config.servers.envia.server+config.servers.envia.router.shipmentTracking+'014999902693',{ observe: 'response' });
  }

  //url img to base64
  imageUrlToBase64(urL: string):Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Access-Control-Allow-Origin':'*',
      })
    };
    return this.http.get(urL, {
        observe: 'body',
        responseType: 'arraybuffer',
        headers: new HttpHeaders({
          'Access-Control-Allow-Origin':'*',
          'Content-Type': 'image/jpeg',
        })
      })
      .pipe(
        take(1),
        map((arrayBuffer) =>
          btoa(
            Array.from(new Uint8Array(arrayBuffer))
            .map((b) => String.fromCharCode(b))
            .join('')
          )
        ),
      )
  }
}
