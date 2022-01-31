import {Pipe, PipeTransform} from '@angular/core'

@Pipe({
  name: 'formatPercentage',
})
export class FormatPercentagePipe implements PipeTransform {
  transform(value: number): string {
    return `${Math.round(value * 100)}%`
  }
}
