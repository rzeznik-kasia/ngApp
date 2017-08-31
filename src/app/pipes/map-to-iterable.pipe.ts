import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mapToIterable'
})
export class MapToIterablePipe implements PipeTransform {

  transform(obj: any, args?: any): any {
    if (obj) {
      return Object.keys(obj);
    }
  }
}
