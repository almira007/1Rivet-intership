import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'currencyFormat'
})
export class CurrencyFormatPipe implements PipeTransform {

  transform(value: string, countryCode: string): string {
    let symbol = 'dollar';

    if (countryCode === 'EUR') {
      symbol = 'euro';
    } else if (countryCode === 'BRL') {
      symbol = 'real';
    } else if (countryCode === 'INR') {
      symbol = 'rupee';
    }
    return `${symbol} ${value}`;
  }

}
