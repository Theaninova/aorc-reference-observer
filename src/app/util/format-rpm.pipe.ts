import {Pipe, PipeTransform} from '@angular/core'

@Pipe({
  name: 'formatFixed',
})
export class FormatFixedPipe implements PipeTransform {
  transform(value?: number): string {
    return value ? value.toFixed(0) : '0'
  }
}
