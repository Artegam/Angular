import { Pipe, PipeTransform } from '@angular/core';
import { ValueConverter } from '@angular/compiler/src/render3/view/template';

@Pipe({
  name: 'truncate'
})
export class TruncatePipe implements PipeTransform {
  longueur: number;

  transform(str: string, longueur: number = 30, suffix: string = '...'): string {
    if (str?.length > longueur) {
      return str.substr(0, longueur) + suffix;
    } else {
      return str;
    }
  }
}
