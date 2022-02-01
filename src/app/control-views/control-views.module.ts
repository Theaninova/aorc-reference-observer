import {NgModule} from '@angular/core'
import {AppComponent} from '../app.component'
import {BrowserModule} from '@angular/platform-browser'
import {SliderInputViewComponent} from './slider-input-view.component'
import {FeatureBulbViewComponent} from './feature-bulb-view.component'
import {UtilModule} from '../util/util.module'
import {SteeringViewComponent} from './steering-view.component'

@NgModule({
  declarations: [SliderInputViewComponent, FeatureBulbViewComponent, SteeringViewComponent],
  imports: [BrowserModule, UtilModule],
  providers: [],
  bootstrap: [AppComponent],
  exports: [SliderInputViewComponent, FeatureBulbViewComponent, SteeringViewComponent],
})
export class ControlViewsModule {}
