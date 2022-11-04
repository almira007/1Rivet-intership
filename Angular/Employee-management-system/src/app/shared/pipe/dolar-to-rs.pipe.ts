import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dolarToRs'
})
export class DolarToRsPipe implements PipeTransform {

  transform(value: number, contryValue: number): unknown {
    let newValue;
    if (contryValue === 70) {
      newValue = "₹" + 70 * value
    }
    return newValue
  }

}
