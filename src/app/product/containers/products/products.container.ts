import {Component, OnInit} from '@angular/core';
import {ProductService} from '@core/services/product/product.service';
import {Product} from '@core/models/product';

@Component({
  selector: 'app-products',
  templateUrl: './products.container.html',
})
export class ProductsContainer implements OnInit {
  public products: Product [] = []
  constructor(private productService: ProductService) {
  }

  ngOnInit(): void {
    this.getForBankName('BANCO_3')
  }

  getForBankName(name: string){
    this.productService.getForBankName(name).subscribe(response => {
      this.products = response as Product [];
    })
  }

}
