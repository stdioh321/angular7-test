import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'showOnConsole'
})
export class ShowOnConsolePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    console.log(value);
    return null;
  }

}
