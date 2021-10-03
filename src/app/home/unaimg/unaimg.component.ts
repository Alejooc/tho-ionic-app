import { Component, Input, OnInit } from '@angular/core';
@Component({
  selector: 'app-unaimg',
  templateUrl: './unaimg.component.html',
  styleUrls: ['./unaimg.component.scss'],
})
export class UnaimgComponent implements OnInit {
  
  @Input() imgdata;

  constructor() { }

  ngOnInit() {
    
  }
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
