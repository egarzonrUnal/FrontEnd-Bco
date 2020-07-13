import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ProductTypePipe} from './pipes/product-type.pipe';
import { CardSecurityPipe } from './pipes/card-security.pipe';
import { HeaderComponent } from './components/header/header.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {RouterModule} from '@angular/router';


@NgModule({
  declarations: [ProductTypePipe, CardSecurityPipe, HeaderComponent],
    imports: [
        CommonModule,
        NgbModule,
        RouterModule
    ],
  exports: [
    ProductTypePipe,
    CardSecurityPipe,
    HeaderComponent
  ],
})
export class SharedModule {
}
