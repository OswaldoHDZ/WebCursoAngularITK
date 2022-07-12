import { Pipe, PipeTransform } from '@angular/core';
import * as _ from 'underscore';

@Pipe({
  name: 'ordenar'
})
export class SortPipe implements PipeTransform {
  transform(value: any): any {
    if (!value) return 'Vacio'
    return _.sortBy(value, function (entry) { return entry.API; }).reverse()
  }

}