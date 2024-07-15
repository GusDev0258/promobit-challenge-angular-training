import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'duration',
  standalone: true
})
export class DurationPipe implements PipeTransform {

  transform(value?: number): string {
    if (value == null || value < 0) {
      return 'No information';
    }

    const hours = Math.floor(value / 60);
    const minutes = value % 60;
    let result = '';

    if (hours > 0) {
      result += `${hours}h `;
    }
    result += `${minutes}m`;

    return result.trim();
  }

}
