import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'initials'
})
export class InitialsPipe implements PipeTransform {

  transform(value: string): string {
    // 'Pratik Tandel - PT
    const nameArray = value.split(' ');
    return `${nameArray[0].charAt(0)}${nameArray[1].charAt(0)}`;
  }

}
