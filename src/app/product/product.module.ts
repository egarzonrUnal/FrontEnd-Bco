import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './product-routing.module';
import { ProductComponent } from './components/product/product.component';
import {ProductsContainer} from "./containers/products/products.container";
import {SharedModule} from '../shared/shared.module';


@NgModule({
  declarations: [ProductComponent, ProductsContainer],
  imports: [
    CommonModule,
    ProductRoutingModule,
    SharedModule
  ]
})
export class ProductModule { }
