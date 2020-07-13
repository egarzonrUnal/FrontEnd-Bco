import { Pipe, PipeTransform } from '@angular/core';
import {ProductTypeEnum} from '@core/models/enums/product-type.enum';

@Pipe({
  name: 'productType'
})
export class ProductTypePipe implements PipeTransform {

  transform(value: string): string {
    console.log(value)
    return ProductTypeEnum[value];
  }

}
