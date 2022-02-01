import {NgModule} from '@angular/core'
import {CarDataComponent} from './car-data.component'
import {DrivetrainDataComponent} from './drivetrain-data.component'
import {BrowserModule} from '@angular/platform-browser'
import {ControlViewsModule} from '../control-views/control-views.module'

@NgModule({
  declarations: [CarDataComponent, DrivetrainDataComponent],
  imports: [BrowserModule, ControlViewsModule],
  exports: [CarDataComponent, DrivetrainDataComponent],
})
export class DataComponentsModule {}
