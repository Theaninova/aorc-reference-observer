import {NgModule} from '@angular/core'
import {BrowserModule} from '@angular/platform-browser'

import {DebugPageComponent} from './debug-page.component'
import {FormsModule} from '@angular/forms'
import {UtilModule} from './util/util.module'
import {RouterModule, Routes} from '@angular/router'
import {PlayerHudComponent} from './player-hud.component'
import {AppComponent} from './app.component'
import {ProtocolService} from './protocol/protocol.service'
import {DataComponentsModule} from './data-components/data-components.module'
import {ControlViewsModule} from './control-views/control-views.module'

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: DebugPageComponent},
  {path: 'advanced-hud', component: PlayerHudComponent},
]

@NgModule({
  declarations: [DebugPageComponent, AppComponent, PlayerHudComponent],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    FormsModule,
    UtilModule,
    DataComponentsModule,
    ControlViewsModule,
  ],
  providers: [ProtocolService],
  bootstrap: [AppComponent],
  exports: [],
})
export class AppModule {}
