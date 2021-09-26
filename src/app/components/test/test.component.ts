import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss'],
})
export class TestComponent implements OnInit {

  slideOpts = {
    initialSlide: 1,
    speed: 400
  };
  
  constructor() { }

  ngOnInit() {}

}
