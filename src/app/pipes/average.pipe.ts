import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'average',
  standalone: true
})
export class AveragePipe implements PipeTransform {

  transform(value?: number, decimalPlaces: number = 0): string {
    if (value == null || isNaN(value)) {
      return 'No information';
    }

    const percentage = (value * 10).toFixed(decimalPlaces);
    return `${percentage}%`;
  }

}
