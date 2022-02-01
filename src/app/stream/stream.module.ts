import {NgModule} from '@angular/core'
import {ProtocolService} from '../protocol/protocol.service'
import {DataComponentsModule} from '../data-components/data-components.module'
import {BrowserModule} from '@angular/platform-browser'

@NgModule({
  declarations: [],
  imports: [BrowserModule, DataComponentsModule],
  providers: [ProtocolService],
  exports: [],
})
export class StreamModule {}
