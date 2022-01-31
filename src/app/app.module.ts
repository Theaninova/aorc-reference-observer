import {NgModule} from '@angular/core'
import {BrowserModule} from '@angular/platform-browser'

import {AppComponent} from './app.component'
import {CarDataComponent} from './car-data.component'
import {DrivetrainDataComponent} from './drivetrain-data.component'
import {FormsModule} from '@angular/forms'
import {ControlViewsModule} from './control-views/control-views.module'
import {UtilModule} from './util/util.module'

@NgModule({
  declarations: [AppComponent, CarDataComponent, DrivetrainDataComponent],
  imports: [BrowserModule, FormsModule, ControlViewsModule, UtilModule],
  providers: [],
  bootstrap: [AppComponent],
  exports: [],
})
export class AppModule {}
