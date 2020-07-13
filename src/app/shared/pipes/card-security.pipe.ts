import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cardSecurity'
})
export class CardSecurityPipe implements PipeTransform {

  transform(value:string): string {
    const size = value.length - 4
    let idx  =  1;
    let mask = ''
    while (idx <= size) {
      mask += '*';
      idx++
    }
    mask += value.substr(-4)
    return mask
  }

}
