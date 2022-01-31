import {Pipe, PipeTransform} from '@angular/core'

@Pipe({
  name: 'formatTimeString',
})
export class FormatTimeStringPipe implements PipeTransform {
  transform(value: number): string {
    if (value) {
      const minutes = Math.floor(value / 60)
      const seconds = value % 60
      // return with zero padding and three digits of milliseconds
      return `${minutes.toLocaleString(undefined, {minimumIntegerDigits: 2})}:${seconds.toLocaleString(
        undefined,
        {minimumIntegerDigits: 2, maximumFractionDigits: 3, minimumFractionDigits: 3},
      )}`
    }
    return String(value)
  }
}
