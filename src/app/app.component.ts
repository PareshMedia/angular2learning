import { Component } from '@angular/core';
import {ProductService} from './product.service';
import {myService} from './product.service';
import {IProduct} from './product';
import { Http , Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[ProductService,myService]
})
export class AppComponent {
  iProduct : IProduct[];
  constructor(private _product: ProductService){}
  ngOnInit():void{
    this._product.getproducts().subscribe(iProduct => this.iProduct = iProduct)
  }
  title: string = 'Paresh';
  flag: boolean = true;

  namaste : string = "Namaste Bro !!";

  appList: any[] = [ {
      "ID": "1",
      "Name" : "One"
  },
  {
      "ID": "2",
      "Name" : "Two"
  } ];

  private handleError(error: Response) { 
    console.error(error); 
    return Observable.throw(error.json().error()); 
 } 
}
