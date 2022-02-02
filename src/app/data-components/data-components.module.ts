import {NgModule} from '@angular/core'
import {CarDataComponent} from './car-data.component'
import {DrivetrainDataComponent} from './drivetrain-data.component'
import {BrowserModule} from '@angular/platform-browser'
import {ControlViewsModule} from '../control-views/control-views.module'
import {MinimapComponent} from './minimap.component'

@NgModule({
  declarations: [CarDataComponent, DrivetrainDataComponent, MinimapComponent],
  imports: [BrowserModule, ControlViewsModule],
  exports: [CarDataComponent, DrivetrainDataComponent, MinimapComponent],
})
export class DataComponentsModule {}
