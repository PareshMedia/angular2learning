import { Component, OnInit } from '@angular/core';
import { Router }  from '@angular/router';  

@Component({
  selector: 'app-root',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor(private _router : Router) { }

  ngOnInit() {
  }

  onBack(){
    this._router.navigate(['/inventory']);
  }
}
