import {NgModule} from '@angular/core'
import {BrowserModule} from '@angular/platform-browser'
import {SliderInputViewComponent} from './slider-input-view.component'
import {FeatureBulbViewComponent} from './feature-bulb-view.component'
import {UtilModule} from '../util/util.module'
import {SteeringViewComponent} from './steering-view.component'
import {MinimapComponent} from './minimap.component'
import {GearViewComponent} from './gear-view.component'

@NgModule({
  declarations: [
    SliderInputViewComponent,
    FeatureBulbViewComponent,
    SteeringViewComponent,
    MinimapComponent,
    GearViewComponent,
  ],
  imports: [BrowserModule, UtilModule],
  providers: [],
  exports: [
    SliderInputViewComponent,
    FeatureBulbViewComponent,
    SteeringViewComponent,
    MinimapComponent,
    GearViewComponent,
  ],
})
export class ControlViewsModule {}
