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

}
