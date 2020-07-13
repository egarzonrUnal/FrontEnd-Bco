import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ProductTypePipe} from './pipes/product-type.pipe';
import { CardSecurityPipe } from './pipes/card-security.pipe';


@NgModule({
  declarations: [ProductTypePipe, CardSecurityPipe],
  imports: [
    CommonModule
  ],
  exports: [
    ProductTypePipe,
    CardSecurityPipe
  ],
})
export class SharedModule {
}
