import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mayusculas'
})
export class UppercasePipe implements PipeTransform {

  transform(value: any): any {
    if(!value) return 'Vacio'
    return value.toUpperCase();
  }

}