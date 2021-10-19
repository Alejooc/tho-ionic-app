import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-cuatroimg',
  templateUrl: './cuatroimg.component.html',
  styleUrls: ['./cuatroimg.component.scss'],
})
export class CuatroimgComponent implements OnInit {
  @Input()
  images;
  constructor() { }

  ngOnInit() {}
  convertURL(url){

    const urlarr = url.split('/');
    var newArray = new Array();
    for( var i = 0, j = urlarr.length; i < j; i++ ){
        if ( urlarr[ i ] ){
          newArray.push( urlarr[ i ] );
      }
    }
    return newArray[2];
  }
}
