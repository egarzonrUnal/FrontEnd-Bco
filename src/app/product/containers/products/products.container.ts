import {Component, OnInit} from '@angular/core';
import {ProductService} from '@core/services/product/product.service';
import {Product} from '@core/models/product';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-products',
  templateUrl: './products.container.html',
})
export class ProductsContainer implements OnInit {
  public products: Product [] = []
  public bankName: string

  constructor(private productService: ProductService , private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.bankName = params.bank || 'BANCO_1'
      console.log(params)
      this.getForBankName(this.bankName)
    })
  }

  getForBankName(name: string){
    this.productService.getForBankName(name).subscribe(response => {
      this.products = response as Product [];
    })
  }

}
