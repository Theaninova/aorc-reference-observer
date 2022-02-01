import {NgModule} from '@angular/core'
import {AdvancedHudOverlayComponent} from './advanced-hud-overlay.component'
import {BrowserModule} from '@angular/platform-browser'
import {AppModule} from '../app.module'

@NgModule({
  declarations: [AdvancedHudOverlayComponent],
  imports: [BrowserModule, AppModule],
  exports: [],
})
export class StreamOverlaysModule {}
