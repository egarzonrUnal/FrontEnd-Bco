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
  result: any;
  percent:any;


  constructor() { }
  
  ngOnInit(): void {
    this.barraestado();
  }
public barraestado(){

  if (this.product.typeAccount === 'CREDIT_CARD'){

    let currentbalance = this.product.productAccountBalances.saldo_actual.amount
    let totallimit = this.product.productAccountBalances.cupo_total.amount
    this.result =  totallimit - currentbalance
    this.percent = currentbalance/totallimit*100 +'%'
    
    console.log(this.percent);

  }

}
}