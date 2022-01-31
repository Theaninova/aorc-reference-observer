import {NgModule} from '@angular/core'
import {AppComponent} from '../app.component'
import {BrowserModule} from '@angular/platform-browser'
import {SliderInputViewComponent} from './slider-input-view.component'
import {FeatureBulbViewComponent} from './feature-bulb-view.component'
import {UtilModule} from '../util/util.module'

@NgModule({
  declarations: [SliderInputViewComponent, FeatureBulbViewComponent],
  imports: [BrowserModule, UtilModule],
  providers: [],
  bootstrap: [AppComponent],
  exports: [SliderInputViewComponent, FeatureBulbViewComponent],
})
export class ControlViewsModule {}
