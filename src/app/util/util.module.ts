import {NgModule} from '@angular/core'
import {FormatPercentagePipe} from './format-percentage.pipe'
import {FormatTimeStringPipe} from './format-time-string.pipe'
import {FormatFixedPipe} from './format-rpm.pipe'

@NgModule({
  declarations: [FormatPercentagePipe, FormatTimeStringPipe, FormatFixedPipe],
  imports: [],
  exports: [FormatTimeStringPipe, FormatPercentagePipe, FormatFixedPipe],
  providers: [],
})
export class UtilModule {}
