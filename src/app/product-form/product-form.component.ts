import { Component, OnInit } from '@angular/core';
import {Products} from '../products';
import {myService} from '../product.service';


@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {

  constructor(private _myService: myService) { }

  ngOnInit() {
  }

  model = new Products(1,'Product A');

  myservice: string = this._myService.getResult();

}
