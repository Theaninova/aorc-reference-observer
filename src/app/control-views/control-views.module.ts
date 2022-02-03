import {NgModule} from '@angular/core'
import {BrowserModule} from '@angular/platform-browser'
import {SliderInputViewComponent} from './slider-input-view.component'
import {FeatureBulbViewComponent} from './feature-bulb-view.component'
import {UtilModule} from '../util/util.module'
import {SteeringViewComponent} from './steering-view.component'
import {MinimapComponent} from './minimap.component'

@NgModule({
  declarations: [SliderInputViewComponent, FeatureBulbViewComponent, SteeringViewComponent, MinimapComponent],
  imports: [BrowserModule, UtilModule],
  providers: [],
  exports: [SliderInputViewComponent, FeatureBulbViewComponent, SteeringViewComponent, MinimapComponent],
})
export class ControlViewsModule {}
