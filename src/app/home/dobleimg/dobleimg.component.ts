import { Component, OnInit,Input } from '@angular/core';
@Component({
  selector: 'app-dobleimg',
  templateUrl: './dobleimg.component.html',
  styleUrls: ['./dobleimg.component.scss'],
})
export class DobleimgComponent implements OnInit {

  constructor() { }
  @Input()
  dosimages;
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
