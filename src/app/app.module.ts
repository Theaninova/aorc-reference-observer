import {NgModule} from '@angular/core'
import {BrowserModule} from '@angular/platform-browser'

import {AppComponent} from './app.component'
import {CarDataComponent} from './car-data.component'
import {DrivetrainDataComponent} from './drivetrain-data.component'
import {FormsModule} from '@angular/forms'
import {FormatTimeStringPipe} from './format-time-string.pipe'
import {ControlViewsModule} from './control-views/control-views.module'

@NgModule({
  declarations: [AppComponent, CarDataComponent, DrivetrainDataComponent, FormatTimeStringPipe],
  imports: [BrowserModule, FormsModule, ControlViewsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
