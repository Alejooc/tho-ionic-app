import { Component, OnInit } from '@angular/core';
import { RestService } from "../../rest/rest.service";
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute,Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit {
  searchForm:FormGroup
  resultDataP=[];
  resultDataC=[];
  busqueda:boolean=false;
  constructor(private rest :RestService,
    private formBuilder:FormBuilder,
    private router:Router,
    private route:ActivatedRoute) { }

  ngOnInit() {
    this.searchForm= this.formBuilder.group(
      {
        txt:["",[Validators.required,Validators.minLength(2)]]
      }
    )
    
    this.searchForm.get('txt').valueChanges.subscribe(x=>{
      if (this.searchForm.invalid) {
        return;
      }
      this.rest.SearchData(x).subscribe(resp=>{
        console.log(resp);
        this.resultDataC=resp.cat;
        this.resultDataP=resp.prod;
        this.busqueda=true;
      })
    });
    
  }

  backPage(){
    if (this.route.snapshot.params.ruta2) {
      return this.router.navigate(['/tienda/',this.route.snapshot.params.ruta,this.route.snapshot.params.ruta2]);
    }
    this.router.navigate([this.route.snapshot.params.ruta]);
  }

  onReset(){
    
  }
  shortname(name){    
        
    return name.toLowerCase()
    .trim()
    .split(' ')
    .map( v => v[0].toUpperCase() + v.substr(1) )
    .join(' ');
  }
}
