import {Component, Input, OnInit} from '@angular/core';
import {Product} from '@core/models/product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  @Input()
  product: Product = {};
  
  constructor() { }
  
  ngOnInit(): void {
    
    console.log(this.product)
    
  }

}