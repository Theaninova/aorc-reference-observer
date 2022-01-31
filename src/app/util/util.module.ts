import {NgModule} from '@angular/core'
import {FormatPercentagePipe} from './format-percentage.pipe'
import {FormatTimeStringPipe} from './format-time-string.pipe'

@NgModule({
  declarations: [FormatPercentagePipe, FormatTimeStringPipe],
  imports: [],
  exports: [FormatTimeStringPipe, FormatPercentagePipe],
  providers: [],
})
export class UtilModule {}
